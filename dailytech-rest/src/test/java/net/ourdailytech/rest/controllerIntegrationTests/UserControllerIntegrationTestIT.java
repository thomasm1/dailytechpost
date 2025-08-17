package net.ourdailytech.rest.controllerIntegrationTests;

import com.fasterxml.jackson.databind.ObjectMapper;
import net.ourdailytech.rest.models.dto.UserDto;
import net.ourdailytech.rest.service.UsersService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class UserControllerIntegrationTestIT {

  @Autowired
  private MockMvc mockMvc;

  @Autowired
  private ObjectMapper objectMapper;

  @Autowired
  private UsersService userService;

  @Test
  void testGetAllUsers() throws Exception {
    Mockito.when(userService.getUsers()).thenReturn(Arrays.asList(
        UserDto.builder().id("1").username("user1").email("user1@example.com").build(),
        UserDto.builder().id("2").username("user2").email("user2@example.com").build()
    ));

    mockMvc.perform(get("/api/users"))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.size()").value(2))
        .andExpect(jsonPath("$[0].username").value("user1"))
        .andExpect(jsonPath("$[1].username").value("user2"));
  }

  @Test
  void testGetUserById() throws Exception {
    Mockito.when(userService.getUser(1)).thenReturn(Optional.of(
        UserDto.builder().id("1").username("user1").email("user1@example.com").build()
    ));

    mockMvc.perform(get("/api/users/1"))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.username").value("user1"))
        .andExpect(jsonPath("$.email").value("user1@example.com"));
  }

  @Test
  void testCreateUser() throws Exception {
    UserDto userDto = UserDto.builder().username("newuser").email("newuser@example.com").build();
    UserDto savedUser = UserDto.builder().id("1").username("newuser").email("newuser@example.com").build();

    Mockito.when(userService.createUser(any(UserDto.class))).thenReturn(savedUser);

    mockMvc.perform(post("/api/users")
            .contentType(MediaType.APPLICATION_JSON)
            .content(objectMapper.writeValueAsString(userDto)))
        .andExpect(status().isCreated())
        .andExpect(jsonPath("$.username").value("newuser"))
        .andExpect(jsonPath("$.email").value("newuser@example.com"));
  }

  @Test
  void testUpdateUser() throws Exception {
    UserDto userDto = UserDto.builder().id("1").username("updateduser").email("updated@example.com").build();

    Mockito.when(userService.updateUserById(eq(1), any(UserDto.class))).thenReturn(Optional.of(userDto));

    mockMvc.perform(put("/api/users/1")
            .contentType(MediaType.APPLICATION_JSON)
            .content(objectMapper.writeValueAsString(userDto)))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.username").value("updateduser"))
        .andExpect(jsonPath("$.email").value("updated@example.com"));
  }

  @Test
  void testDeleteUser() throws Exception {
    Mockito.when(userService.deleteUser("user1")).thenReturn(true);

    mockMvc.perform(delete("/api/users/user1"))
        .andExpect(status().isOk())
        .andExpect(content().string("true"));
  }
}