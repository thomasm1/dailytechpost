package net.ourdailytech.rest.serviceTests;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.*;
import static org.springframework.test.web.client.response.MockRestResponseCreators.*;

import java.time.Clock;
import java.time.Instant;
import java.time.ZoneOffset;
import java.util.concurrent.atomic.AtomicReference;
import net.ourdailytech.rest.exception.PostApiException;
import net.ourdailytech.rest.service.NewsService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.test.web.client.MockRestServiceServer;
import org.springframework.web.client.RestClient;

class NewsServiceTest {
    private MockRestServiceServer server;
    private RestClient client;
    private Clock clock;
    private static final String KEY = "server-only-test-secret";
    private static final String URL = "https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=" + KEY;

    @BeforeEach
    void setup() {
        RestClient.Builder builder = RestClient.builder();
        server = MockRestServiceServer.bindTo(builder).build();
        client = builder.build();
        clock = Clock.fixed(Instant.parse("2026-09-05T12:00:00Z"), ZoneOffset.UTC);
    }

    @Test
    void attachesKeyOnlyUpstreamProjectsResponseAndCaches() {
        NewsService news = new NewsService(client, KEY, clock, 1, 10);
        server.expect(requestTo(URL)).andExpect(headerDoesNotExist("Authorization"))
                .andRespond(withSuccess("""
                    {"api-key":"server-only-test-secret","results":[{"title":"An article",
                    "url":"https://nytimes.com/article","apiKey":"secret","multimedia":null}]}
                    """, MediaType.APPLICATION_JSON));
        var result = news.topStories("technology");
        assertEquals("An article", result.path("results").get(0).path("title").asText());
        assertFalse(result.toString().contains(KEY));
        assertFalse(result.toString().contains("apiKey"));
        assertEquals(result, news.topStories("technology"));
        server.verify();
    }

    @Test
    void encodesSearchAsDataNotAsExtraProviderParameters() {
        NewsService news = new NewsService(client, KEY, clock, 5, 10);
        server.expect(requestTo("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=space%26api-key%3Devil&begin_date=20260101&sort=newest&api-key=" + KEY))
                .andRespond(withSuccess("{\"response\":{\"docs\":[{\"headline\":{\"main\":\"Title\"},\"byline\":{\"original\":\"Author\"}}]}}", MediaType.APPLICATION_JSON));
        assertEquals("Title", news.search("space&api-key=evil", "20260101", null, "newest")
                .path("response").path("docs").get(0).path("headline").path("main").asText());
        server.verify();
    }

    @Test
    void rejectsUnsupportedInputsWithoutProviderCalls() {
        NewsService news = new NewsService(client, KEY, clock, 5, 10);
        assertEquals(HttpStatus.BAD_REQUEST, assertThrows(PostApiException.class,
                () -> news.topStories("../../keys")).getStatus());
        assertThrows(PostApiException.class, () -> news.search("x".repeat(201), null, null, null));
        assertThrows(PostApiException.class, () -> news.search("q", "20260230", null, null));
        assertThrows(PostApiException.class, () -> news.search("q", "20260905", "20260901", null));
        assertThrows(PostApiException.class, () -> news.search("q", null, null, "custom"));
        server.verify();
    }

    @Test
    void missingKeyFailsClosedWithoutProviderCall() {
        NewsService news = new NewsService(client, "", clock, 5, 10);
        assertEquals(HttpStatus.SERVICE_UNAVAILABLE, assertThrows(PostApiException.class,
                () -> news.topStories("technology")).getStatus());
        server.verify();
    }

    @Test
    void providerErrorsAndRedirectsDoNotExposeBodyHeadersOrCredentialUri() {
        NewsService news = new NewsService(client, KEY, clock, 5, 10);
        server.expect(requestTo(URL)).andRespond(withStatus(HttpStatus.FOUND)
                .header("Location", "https://untrusted.example/?key=" + KEY).body(KEY));
        var error = assertThrows(PostApiException.class, () -> news.topStories("technology"));
        assertEquals(HttpStatus.BAD_GATEWAY, error.getStatus());
        assertFalse(error.getMessage().contains(KEY));
        assertNull(error.getCause());
        server.verify();
    }

    @Test
    void limitsUpstreamMissesButKeepsCachedDataAvailable() {
        NewsService news = new NewsService(client, KEY, clock, 1, 10);
        server.expect(requestTo(URL)).andRespond(withSuccess("{\"results\":[]}", MediaType.APPLICATION_JSON));
        news.topStories("technology");
        assertEquals(HttpStatus.TOO_MANY_REQUESTS, assertThrows(PostApiException.class,
                () -> news.topStories("science")).getStatus());
        assertEquals(0, news.topStories("technology").path("results").size());
        server.verify();
    }

    @Test
    void expiresCacheAndMaintainsDailyBudgetAcrossMinutes() {
        AtomicReference<Instant> now = new AtomicReference<>(clock.instant());
        Clock moving = org.mockito.Mockito.mock(Clock.class);
        org.mockito.Mockito.when(moving.millis()).thenAnswer(invocation -> now.get().toEpochMilli());
        NewsService news = new NewsService(client, KEY, moving, 1, 2);
        server.expect(requestTo(URL)).andRespond(withSuccess("{\"results\":[]}", MediaType.APPLICATION_JSON));
        server.expect(requestTo(URL)).andRespond(withSuccess("{\"results\":[]}", MediaType.APPLICATION_JSON));
        news.topStories("technology");
        now.set(now.get().plusSeconds(601));
        news.topStories("technology");
        now.set(now.get().plusSeconds(601));
        assertEquals(HttpStatus.TOO_MANY_REQUESTS, assertThrows(PostApiException.class,
                () -> news.topStories("technology")).getStatus());
        server.verify();
    }
}
