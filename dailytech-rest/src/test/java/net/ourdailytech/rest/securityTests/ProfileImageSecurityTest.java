package net.ourdailytech.rest.securityTests;

import net.ourdailytech.rest.controllers.UserProfileImageController;
import net.ourdailytech.rest.security.SecurityConfig;
import net.ourdailytech.rest.service.UserProfileImageService;
import org.junit.jupiter.api.Test;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.mock.web.MockServletContext;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import static org.mockito.Mockito.*;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.user;
import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.multipart;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

class ProfileImageSecurityTest {
    @Test
    void usesAuthenticatedIdentityAndRejectsAnonymousUploads() throws Exception {
        try (var context = new AnnotationConfigWebApplicationContext()) {
            context.setServletContext(new MockServletContext());
            context.getEnvironment().setActiveProfiles("security-test");
            context.register(SecurityConfig.class, RetiredKeysSecurityTest.Dependencies.class, Dependencies.class);
            context.refresh();
            var mvc = MockMvcBuilders.webAppContextSetup(context).apply(springSecurity()).build();
            var file = new MockMultipartFile("file", new byte[]{1});
            String path = "/api/users/me/profile/image";
            mvc.perform(multipart(path).file(file)).andExpect(status().isUnauthorized());
            var service = context.getBean(UserProfileImageService.class);
            verifyNoInteractions(service);
            for (String role : new String[]{"USER", "ADMIN"}) {
                mvc.perform(multipart(path).file(file).param("email", "someone-else@example.com")
                        .with(user(role + "@example.com").roles(role))).andExpect(status().isOk());
                verify(service).upload(role + "@example.com", file);
            }
        }
    }
    @Test void privateReadUsesAuthenticatedIdentityAndReturnsNoStoreHeaders() throws Exception {
        try (var context = new AnnotationConfigWebApplicationContext()) {
            context.setServletContext(new MockServletContext());
            context.getEnvironment().setActiveProfiles("security-test");
            context.register(SecurityConfig.class, RetiredKeysSecurityTest.Dependencies.class, Dependencies.class);
            context.refresh();
            var mvc = MockMvcBuilders.webAppContextSetup(context).apply(springSecurity()).build();
            String path = "/api/users/me/profile/image";
            mvc.perform(org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get(path)).andExpect(status().isUnauthorized());
            var service = context.getBean(UserProfileImageService.class);
            verifyNoInteractions(service);
            when(service.read("owner@example.com")).thenReturn(new net.ourdailytech.rest.service.ProfileImageStorageService.ProfileImage(new byte[]{1}, "image/png"));
            mvc.perform(org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get(path)
                    .param("email", "other@example.com").with(user("owner@example.com").roles("USER")))
                    .andExpect(status().isOk()).andExpect(org.springframework.test.web.servlet.result.MockMvcResultMatchers.header().string("Cache-Control", "private, no-store"))
                    .andExpect(org.springframework.test.web.servlet.result.MockMvcResultMatchers.content().bytes(new byte[]{1}));
            verify(service).read("owner@example.com");
        }
    }
    @Configuration
    static class Dependencies {
        @Bean UserProfileImageService images() { return mock(UserProfileImageService.class); }
        @Bean UserProfileImageController controller(UserProfileImageService images) { return new UserProfileImageController(images); }
    }
}
