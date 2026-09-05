package net.ourdailytech.rest.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import java.net.http.HttpClient;
import java.time.Clock;
import java.time.Duration;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Set;
import net.ourdailytech.rest.exception.PostApiException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.client.JdkClientHttpRequestFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;
import org.springframework.web.util.UriComponentsBuilder;

/** Fixed NYT operations. Neither destinations nor credentials are supplied by callers. */
@Service
public class NewsService {
    private static final Set<String> SECTIONS = Set.of("arts", "automobiles", "books", "business",
            "fashion", "food", "health", "home", "insider", "magazine", "movies", "national",
            "nyregion", "obituaries", "opinion", "politics", "realestate", "science", "sports",
            "sundayreview", "technology", "theater", "tmagazine", "travel", "upshot", "us", "world");
    private final RestClient client;
    private final String apiKey;
    private final Clock clock;
    private final int requestsPerMinute;
    private final int requestsPerDay;
    private final ObjectMapper mapper = new ObjectMapper();
    private final Map<String, Cached> cache = new LinkedHashMap<>();
    private long minute = -1;
    private long day = -1;
    private int minuteRequests;
    private int dayRequests;
    private record Cached(long expiresAt, JsonNode data) {}

    @Autowired
    public NewsService(@Value("${app.news.nyt-api-key:${NYT_API:${NYT_API_KEY:}}}") String apiKey,
                       @Value("${app.news.requests-per-minute:10}") int perMinute,
                       @Value("${app.news.requests-per-day:50}") int perDay) {
        this(buildClient(), apiKey, Clock.systemUTC(), perMinute, perDay);
    }

    public NewsService(RestClient client, String apiKey, Clock clock, int perMinute, int perDay) {
        this.client = client;
        this.apiKey = apiKey == null ? "" : apiKey.trim();
        this.clock = clock;
        this.requestsPerMinute = Math.max(1, perMinute);
        this.requestsPerDay = Math.max(1, perDay);
    }

    private static RestClient buildClient() {
        HttpClient http = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(3))
                .followRedirects(HttpClient.Redirect.NEVER).build();
        JdkClientHttpRequestFactory factory = new JdkClientHttpRequestFactory(http);
        factory.setReadTimeout(Duration.ofSeconds(10));
        return RestClient.builder().requestFactory(factory).build();
    }

    public JsonNode topStories(String section) {
        if (!SECTIONS.contains(section)) throw invalid("Unsupported news section");
        return fetch("/topstories/v2/" + section + ".json", Map.of(), false);
    }

    public JsonNode search(String query, String beginDate, String endDate, String sort) {
        String q = query == null ? "" : query.trim();
        if (q.length() > 200 || q.chars().anyMatch(Character::isISOControl)) {
            throw invalid("Search text must be at most 200 characters without control characters");
        }
        LocalDate begin = parseDate(beginDate);
        LocalDate end = parseDate(endDate);
        if (begin != null && end != null && begin.isAfter(end)) throw invalid("Invalid date range");
        String order = sort == null || sort.isBlank() ? "newest" : sort;
        if (!Set.of("newest", "oldest", "relevance").contains(order)) throw invalid("Invalid sort order");
        Map<String, String> params = new LinkedHashMap<>();
        if (!q.isEmpty()) params.put("q", q);
        if (begin != null) params.put("begin_date", beginDate);
        if (end != null) params.put("end_date", endDate);
        params.put("sort", order);
        return fetch("/search/v2/articlesearch.json", params, true);
    }

    private LocalDate parseDate(String date) {
        if (date == null || date.isBlank()) return null;
        if (!date.matches("[0-9]{8}")) throw invalid("Dates must use YYYYMMDD");
        try { return LocalDate.parse(date, DateTimeFormatter.BASIC_ISO_DATE); }
        catch (DateTimeParseException e) { throw invalid("Invalid calendar date"); }
    }

    // Serialize cache misses to prevent simultaneous requests spending the same provider quota.
    private synchronized JsonNode fetch(String path, Map<String, String> params, boolean search) {
        if (apiKey.isBlank()) throw new PostApiException(HttpStatus.SERVICE_UNAVAILABLE, "News is not configured");
        String cacheKey = path + params;
        long now = clock.millis();
        Cached cached = cache.get(cacheKey);
        if (cached != null && cached.expiresAt() > now) return cached.data().deepCopy();
        reserveProviderRequest(now);
        UriComponentsBuilder uri = UriComponentsBuilder.fromHttpUrl("https://api.nytimes.com/svc" + path);
        params.forEach(uri::queryParam);
        uri.queryParam("api-key", apiKey);
        try {
            // Do not forward caller headers or upstream headers/errors. Redirects are rejected too.
            JsonNode raw = client.get().uri(uri.build().encode().toUri()).accept(MediaType.APPLICATION_JSON)
                    .exchange((request, response) -> {
                        if (!response.getStatusCode().is2xxSuccessful()) throw new IllegalStateException("Provider failure");
                        byte[] bytes = response.getBody().readNBytes(2_000_001);
                        if (bytes.length > 2_000_000) throw new IllegalStateException("Provider response too large");
                        return mapper.readTree(bytes);
                    });
            if (raw == null || !(search ? raw.path("response").path("docs") : raw.path("results")).isArray()) {
                throw new IllegalStateException("Unexpected provider response");
            }
            JsonNode result = project(raw, search);
            // Never echo the configured credential even if it occurs in a provider text field.
            result = mapper.readTree(mapper.writeValueAsString(result).replace(apiKey, "[redacted]"));
            cache.entrySet().removeIf(entry -> entry.getValue().expiresAt() <= now);
            if (cache.size() >= 256) cache.remove(cache.keySet().iterator().next());
            cache.put(cacheKey, new Cached(clock.millis() + Duration.ofMinutes(10).toMillis(), result));
            return result.deepCopy();
        } catch (Exception e) {
            // Rest client exceptions can include the credential-bearing URI. Do not expose their message/cause.
            throw new PostApiException(HttpStatus.BAD_GATEWAY, "News provider is temporarily unavailable");
        }
    }

    private void reserveProviderRequest(long now) {
        if (minute != now / 60_000) { minute = now / 60_000; minuteRequests = 0; }
        if (day != now / 86_400_000) { day = now / 86_400_000; dayRequests = 0; }
        if (minuteRequests >= requestsPerMinute || dayRequests >= requestsPerDay) {
            throw new PostApiException(HttpStatus.TOO_MANY_REQUESTS, "News request limit reached; try again later");
        }
        minuteRequests++;
        dayRequests++;
    }

    private JsonNode project(JsonNode raw, boolean search) {
        ObjectNode result = mapper.createObjectNode().put("status", "OK");
        ArrayNode articles = mapper.createArrayNode();
        for (JsonNode article : search ? raw.path("response").path("docs") : raw.path("results")) {
            ObjectNode safe = select(article, search
                    ? new String[]{"web_url", "pub_date", "lead_paragraph", "snippet", "abstract"}
                    : new String[]{"title", "abstract", "url", "byline", "published_date", "section"});
            if (search) {
                safe.set("headline", select(article.path("headline"), "main"));
                safe.set("byline", select(article.path("byline"), "original"));
            } else {
                ArrayNode images = safe.putArray("multimedia");
                if (article.path("multimedia").isArray()) {
                    article.path("multimedia").forEach(image -> images.add(select(image,
                            "url", "format", "height", "width", "caption", "copyright", "type")));
                }
            }
            articles.add(safe);
        }
        if (search) result.putObject("response").set("docs", articles);
        else { result.set("results", articles); result.put("num_results", articles.size()); }
        return result;
    }

    private ObjectNode select(JsonNode source, String... fields) {
        ObjectNode result = mapper.createObjectNode();
        for (String field : fields) {
            JsonNode value = source.get(field);
            if (value != null && value.isValueNode()) result.set(field, value);
        }
        return result;
    }

    private PostApiException invalid(String message) { return new PostApiException(HttpStatus.BAD_REQUEST, message); }
}
