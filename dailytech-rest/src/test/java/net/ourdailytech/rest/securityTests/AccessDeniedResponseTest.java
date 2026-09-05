package net.ourdailytech.rest.securityTests;

import java.util.List;
import net.ourdailytech.rest.exception.GlobalExceptionHandler;
import net.ourdailytech.rest.exception.PostApiException;
import org.springframework.http.HttpStatus;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

class AccessDeniedResponseTest {
    private MockMvc mvc;

    @BeforeEach
    void setup() {
        SecurityContextHolder.clearContext();
        mvc = MockMvcBuilders.standaloneSetup(new DeniedController())
                .setControllerAdvice(new GlobalExceptionHandler()).build();
    }

    @AfterEach
    void clearContext() {
        SecurityContextHolder.clearContext();
    }

    @Test
    void missingAuthenticationReturns401InsteadOf500() throws Exception {
        mvc.perform(get("/denied")).andExpect(status().isUnauthorized());
    }

    @Test
    void anonymousAuthenticationReturns401InsteadOf500() throws Exception {
        SecurityContextHolder.getContext().setAuthentication(new AnonymousAuthenticationToken(
                "test", "anonymousUser", List.of(new SimpleGrantedAuthority("ROLE_ANONYMOUS"))));
        mvc.perform(get("/denied")).andExpect(status().isUnauthorized());
    }

    @Test
    void authenticatedUserReturns403InsteadOf500() throws Exception {
        SecurityContextHolder.getContext().setAuthentication(new UsernamePasswordAuthenticationToken(
                "user@example.com", null, List.of(new SimpleGrantedAuthority("ROLE_USER"))));
        mvc.perform(get("/denied")).andExpect(status().isForbidden());
    }

    @Test
    void serviceErrorsPreserveTheirDeclaredStatus() throws Exception {
        mvc.perform(get("/service-forbidden")).andExpect(status().isForbidden());
        mvc.perform(get("/service-missing")).andExpect(status().isNotFound());
        mvc.perform(get("/service-invalid")).andExpect(status().isBadRequest());
    }

    @RestController
    static class DeniedController {
        @GetMapping("/denied")
        String denied() {
            throw new AccessDeniedException("Requires ADMIN");
        }

        @GetMapping("/service-forbidden")
        String forbidden() {
            throw new PostApiException(HttpStatus.FORBIDDEN, "Not the link owner");
        }

        @GetMapping("/service-missing")
        String missing() {
            throw new PostApiException(HttpStatus.NOT_FOUND, "Comment belongs to another post");
        }

        @GetMapping("/service-invalid")
        String invalid() {
            throw new PostApiException(HttpStatus.BAD_REQUEST, "Duplicate registration");
        }
    }
}
