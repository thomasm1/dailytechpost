package net.ourdailytech.rest.securityTests;

import static org.mockito.Mockito.*;
import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.fasterxml.jackson.databind.ObjectMapper;
import net.ourdailytech.rest.controllers.NewsController;
import net.ourdailytech.rest.security.SecurityConfig;
import net.ourdailytech.rest.service.NewsService;
import org.junit.jupiter.api.Test;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mock.web.MockServletContext;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;

class NewsCorsSecurityTest {
    @Test
    void anonymousNewsAndPreflightAllowTheDailyTechDevOrigin() throws Exception {
        try (var context = new AnnotationConfigWebApplicationContext()) {
            context.setServletContext(new MockServletContext());
            context.getEnvironment().setActiveProfiles("security-test");
            context.register(SecurityConfig.class, RetiredKeysSecurityTest.Dependencies.class, NewsDependencies.class);
            context.refresh();
            var service = context.getBean(NewsService.class);
            var mapper = new ObjectMapper();
            when(service.topStories("technology")).thenReturn(mapper.readTree("{\"results\":[]}"));
            when(service.search("science", null, null, null)).thenReturn(mapper.readTree("{\"response\":{\"docs\":[]}}"));
            var mvc = MockMvcBuilders.webAppContextSetup(context).apply(springSecurity()).build();

            // No authentication: these are the same requests the public News tab makes.
            mvc.perform(get("/api/news/top-stories/technology").header("Origin", "http://localhost:3000"))
                    .andExpect(status().isOk())
                    .andExpect(header().string("Access-Control-Allow-Origin", "http://localhost:3000"))
                    .andExpect(jsonPath("$.results").isArray());
            mvc.perform(get("/api/news/search").param("q", "science").header("Origin", "http://localhost:3000"))
                    .andExpect(status().isOk())
                    .andExpect(header().string("Access-Control-Allow-Origin", "http://localhost:3000"));
            mvc.perform(options("/api/news/top-stories/technology")
                            .header("Origin", "http://localhost:3000")
                            .header("Access-Control-Request-Method", "GET")
                            .header("Access-Control-Request-Headers", "authorization"))
                    .andExpect(status().isOk())
                    .andExpect(header().string("Access-Control-Allow-Origin", "http://localhost:3000"));
            mvc.perform(get("/api/news/top-stories/technology").header("Origin", "https://untrusted.example"))
                    .andExpect(status().isForbidden());
            verify(service, times(1)).topStories("technology");
        }
    }

    @Configuration
    static class NewsDependencies {
        @Bean NewsService newsService() { return mock(NewsService.class); }
        @Bean NewsController newsController(NewsService service) { return new NewsController(service); }
    }
}
