package net.ourdailytech.rest.config;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.io.IOException;
import java.util.Map;
import org.junit.jupiter.api.Test;
import org.springframework.boot.env.YamlPropertySourceLoader;
import org.springframework.core.env.MapPropertySource;
import org.springframework.core.env.StandardEnvironment;
import org.springframework.core.io.FileSystemResource;

class ProviderEnvironmentConfigTest {
    private StandardEnvironment environment(Map<String, Object> variables) throws IOException {
        StandardEnvironment env = new StandardEnvironment();
        // Never read real developer or CI credentials in this test.
        env.getPropertySources().remove(StandardEnvironment.SYSTEM_ENVIRONMENT_PROPERTY_SOURCE_NAME);
        env.getPropertySources().remove(StandardEnvironment.SYSTEM_PROPERTIES_PROPERTY_SOURCE_NAME);
        env.getPropertySources().addFirst(new MapPropertySource("fake-runtime", variables));
        new YamlPropertySourceLoader().load("application",
                new FileSystemResource("src/main/resources/application.yml"))
                .forEach(source -> env.getPropertySources().addLast(source));
        return env;
    }

    @Test
    void resolvesEc2NamesAndExplicitLimits() throws IOException {
        var env = environment(Map.of(
                "NYT_API", "fake-nyt", "OPENAI_API_KEY", "fake-openai",
                "GEMINI_API_KEY", "fake-gemini", "googleMapAPIKey", "fake-maps",
                "GOOGLE_API_KEY", "fake-google", "ANTHRO_API_KEY", "fake-anthropic",
                "MORALIS_API_KEY", "fake-moralis", "nasaAPIKey", "fake-nasa",
                "NEWS_REQUESTS_PER_MINUTE", "10", "NEWS_REQUESTS_PER_DAY", "1000"));
        assertEquals("fake-nyt", env.getProperty("app.news.nyt-api-key"));
        for (String provider : new String[]{"openai", "gemini", "google", "anthropic", "moralis", "nasa"}) {
            assertEquals("fake-" + provider, env.getProperty("app.providers." + provider + "-api-key"));
        }
        assertEquals("fake-maps", env.getProperty("app.providers.google-maps-api-key"));
        assertEquals("10", env.getProperty("app.news.requests-per-minute"));
        assertEquals("1000", env.getProperty("app.news.requests-per-day"));
    }

    @Test
    void handlesAliasesAndPrecedence() throws IOException {
        var aliases = environment(Map.of("NYT_API_KEY", "fallback-nyt",
                "ANTHROPIC_API_KEY", "fallback-anthropic", "GOOGLE_API_KEY", "fallback-maps"));
        assertEquals("fallback-nyt", aliases.getProperty("app.news.nyt-api-key"));
        assertEquals("fallback-anthropic", aliases.getProperty("app.providers.anthropic-api-key"));
        assertEquals("fallback-maps", aliases.getProperty("app.providers.google-maps-api-key"));
        var both = environment(Map.of("NYT_API", "primary", "NYT_API_KEY", "fallback",
                "NASA_API_KEY", "uppercase", "nasaAPIKey", "legacy"));
        assertEquals("primary", both.getProperty("app.news.nyt-api-key"));
        assertEquals("uppercase", both.getProperty("app.providers.nasa-api-key"));
    }

    @Test
    void absentKeysStayEmptyAndActuatorValuesStayHidden() throws IOException {
        var env = environment(Map.of());
        assertEquals("", env.getProperty("app.news.nyt-api-key"));
        assertEquals("", env.getProperty("app.providers.openai-api-key"));
        assertEquals("5", env.getProperty("app.news.requests-per-minute"));
        assertEquals("500", env.getProperty("app.news.requests-per-day"));
        assertEquals("never", env.getProperty("management.endpoint.env.show-values"));
        assertEquals("never", env.getProperty("management.endpoint.configprops.show-values"));
    }
}
