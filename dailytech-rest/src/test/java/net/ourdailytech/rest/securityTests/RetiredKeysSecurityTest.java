package net.ourdailytech.rest.securityTests;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.user;
import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import net.ourdailytech.rest.config.TestSecurityConfig;
import net.ourdailytech.rest.security.JwtAuthenticationEntryPoint;
import net.ourdailytech.rest.security.JwtAuthenticationFilter;
import net.ourdailytech.rest.security.SecurityConfig;
import org.junit.jupiter.api.Test;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mock.web.MockServletContext;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

class RetiredKeysSecurityTest {
    @Test
    void productionBlocksEveryRetiredKeyEvenForAdmin() throws Exception {
        assertBlocked(SecurityConfig.class, "security-test");
    }

    @Test
    void h2AlsoBlocksEveryRetiredKeyEvenForAdmin() throws Exception {
        assertBlocked(TestSecurityConfig.class, "h2");
    }

    private void assertBlocked(Class<?> security, String profile) throws Exception {
        try (var context = new AnnotationConfigWebApplicationContext()) {
            context.setServletContext(new MockServletContext());
            context.getEnvironment().setActiveProfiles(profile);
            context.register(security, Dependencies.class);
            context.refresh();
            var mvc = MockMvcBuilders.webAppContextSetup(context).apply(springSecurity()).build();
            for (String provider : new String[]{"Moralis", "Nasa", "Google", "Firebase", "Nyt", "Anthropic", "Gemini", "OpenAI"}) {
                String path = "/api/keys/get" + provider + "Api";
                mvc.perform(get(path)).andExpect(status().is4xxClientError());
                mvc.perform(get(path).with(user("reader").roles("USER"))).andExpect(status().isForbidden());
                mvc.perform(get(path).with(user("admin").roles("ADMIN"))).andExpect(status().isForbidden());
            }
            mvc.perform(get("/api/public-probe")).andExpect(status().isOk());
        }
    }

    @Configuration
    @EnableWebMvc
    static class Dependencies {
        @Bean UserDetailsService userDetailsService() { return new InMemoryUserDetailsManager(); }
        @Bean JwtAuthenticationEntryPoint entryPoint() { return new JwtAuthenticationEntryPoint(); }
        @Bean Probe probe() { return new Probe(); }
        @Bean JwtAuthenticationFilter filter() throws Exception {
            JwtAuthenticationFilter filter = mock(JwtAuthenticationFilter.class);
            doAnswer(invocation -> {
                ((FilterChain) invocation.getArgument(2)).doFilter(invocation.getArgument(0), invocation.getArgument(1));
                return null;
            }).when(filter).doFilter(any(ServletRequest.class), any(ServletResponse.class), any(FilterChain.class));
            return filter;
        }
    }

    // A probe makes the test fail if a broad permitAll rule ever bypasses the retired-route denial.
    @RestController
    static class Probe {
        @GetMapping({"/api/keys/{provider}", "/api/public-probe"})
        String get() { return "probe"; }
    }
}
