package net.ourdailytech.rest.controllerTests;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import org.junit.jupiter.api.Test;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import net.ourdailytech.rest.controllers.UsersController;
import net.ourdailytech.rest.exception.GlobalExceptionHandler;
import net.ourdailytech.rest.service.UsersService;

class UserInputValidationParityTest {
    @Test void invalidAccountAndProfileRequestsReturn400BeforeServiceCalls() throws Exception {
        var users = mock(UsersService.class);
        var mvc = MockMvcBuilders.standaloneSetup(new UsersController(users)).setControllerAdvice(new GlobalExceptionHandler()).build();
        mvc.perform(post("/api/users/auth/register").contentType(MediaType.APPLICATION_JSON)
                .content("{\"email\":\"bad-email\",\"password\":\"\"}")).andExpect(status().isBadRequest());
        mvc.perform(post("/api/users/auth/login").contentType(MediaType.APPLICATION_JSON)
                .content("{\"usernameOrEmail\":\" \",\"password\":\"\"}")).andExpect(status().isBadRequest());
        mvc.perform(patch("/api/users/me/profile").contentType(MediaType.APPLICATION_JSON)
                .content("{\"cusUrl\":\"javascript:alert(1)\",\"contactType\":-1}")).andExpect(status().isBadRequest());
        mvc.perform(patch("/api/users/me/profile").contentType(MediaType.APPLICATION_JSON)
                .content("{\"firstName\":\"" + "x".repeat(256) + "\"}")).andExpect(status().isBadRequest());
        verifyNoInteractions(users);
    }
}
