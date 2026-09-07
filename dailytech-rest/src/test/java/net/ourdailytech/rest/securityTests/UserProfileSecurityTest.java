package net.ourdailytech.rest.securityTests;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
import java.util.Optional;
import net.ourdailytech.rest.controllers.UsersController;
import net.ourdailytech.rest.models.dto.UserDto;
import net.ourdailytech.rest.models.dto.UserProfileUpdateDto;
import net.ourdailytech.rest.service.UsersService;
import org.junit.jupiter.api.Test;
import org.springframework.context.annotation.*;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;

class UserProfileSecurityTest {
    @Test
    void userCanUpdateSelfButOnlyAdminCanTargetAnotherEmail() {
        try (var context = new AnnotationConfigApplicationContext(Config.class)) {
            var controller = context.getBean(UsersController.class);
            var service = context.getBean(UsersService.class);
            var change = new UserProfileUpdateDto();
            var auth = new UsernamePasswordAuthenticationToken("owner@example.com", "",
                    AuthorityUtils.createAuthorityList("ROLE_USER"));
            SecurityContextHolder.getContext().setAuthentication(auth);
            when(service.updateUserProfileByEmail("owner@example.com", change))
                    .thenReturn(Optional.of(new UserDto()));
            assertEquals(200, controller.updateCurrentUserProfile(auth, change).getStatusCode().value());
            verify(service).updateUserProfileByEmail("owner@example.com", change);
            assertThrows(AccessDeniedException.class,
                    () -> controller.updateUserProfileByEmail("other@example.com", change));
            verify(service, never()).updateUserProfileByEmail("other@example.com", change);
            var admin = new UsernamePasswordAuthenticationToken("admin@example.com", "",
                    AuthorityUtils.createAuthorityList("ROLE_ADMIN"));
            SecurityContextHolder.getContext().setAuthentication(admin);
            when(service.updateUserProfileByEmail("other@example.com", change))
                    .thenReturn(Optional.of(new UserDto()));
            assertEquals(200, controller.updateUserProfileByEmail("other@example.com", change).getStatusCode().value());
            verify(service).updateUserProfileByEmail("other@example.com", change);
        } finally {
            SecurityContextHolder.clearContext();
        }
    }

    @Configuration
    @EnableMethodSecurity
    static class Config {
        @Bean UsersService usersService() { return mock(UsersService.class); }
        @Bean UsersController usersController(UsersService service) { return new UsersController(service); }
    }
}
