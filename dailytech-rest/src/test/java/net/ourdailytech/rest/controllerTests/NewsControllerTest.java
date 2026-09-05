package net.ourdailytech.rest.controllerTests;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.time.Clock;
import java.time.Instant;
import java.time.ZoneOffset;
import net.ourdailytech.rest.controllers.NewsController;
import net.ourdailytech.rest.exception.GlobalExceptionHandler;
import net.ourdailytech.rest.service.NewsService;
import org.junit.jupiter.api.Test;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

class NewsControllerTest {
    @Test
    void rateLimitsRequestsAndIgnoresSpoofedForwardedAddresses() throws Exception {
        NewsService news = mock(NewsService.class);
        when(news.topStories("technology")).thenReturn(new ObjectMapper().readTree("{\"results\":[]}"));
        var mvc = MockMvcBuilders.standaloneSetup(new NewsController(news,
                        Clock.fixed(Instant.parse("2026-09-05T12:00:00Z"), ZoneOffset.UTC)))
                .setControllerAdvice(new GlobalExceptionHandler()).build();
        for (int i = 0; i < 30; i++) {
            mvc.perform(get("/api/news/top-stories/technology").header("X-Forwarded-For", "spoof-" + i))
                    .andExpect(status().isOk());
        }
        mvc.perform(get("/api/news/top-stories/technology").header("X-Forwarded-For", "another"))
                .andExpect(status().isTooManyRequests());
        verify(news, times(30)).topStories("technology");
    }
}
