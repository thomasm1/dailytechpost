package net.ourdailytech.rest.serviceTests;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.time.LocalDateTime;
import java.util.Optional;
import java.util.Set;
import net.ourdailytech.rest.mapper.UserMapper;
import net.ourdailytech.rest.models.*;
import net.ourdailytech.rest.models.dto.*;
import net.ourdailytech.rest.repositories.*;
import net.ourdailytech.rest.security.JwtTokenProvider;
import net.ourdailytech.rest.service.UsersServiceImpl;
import net.ourdailytech.rest.util.enums.*;
import org.junit.jupiter.api.Test;
import org.mapstruct.factory.Mappers;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

class UserParityTest {
    private final UsersRepository users = mock(UsersRepository.class);
    private final RoleRepository roles = mock(RoleRepository.class);
    private final UserMapper mapper = Mappers.getMapper(UserMapper.class);
    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
    private final UsersServiceImpl service = new UsersServiceImpl(mock(AuthenticationManager.class),
            encoder, roles, users, mapper, mock(JwtTokenProvider.class));

    @Test
    void creationUsesExplicitPasswordAndDefaultUserRole() {
        when(users.findByEmail("new@example.com")).thenReturn(Optional.empty());
        when(roles.findByName("ROLE_USER")).thenReturn(Optional.of(new Role(2L, "ROLE_USER")));
        when(users.save(any())).thenAnswer(i -> i.getArgument(0));
        service.createUser(CreateUserRequestDto.builder().email("new@example.com")
                .password("test-only-secret").build());
        verify(users).save(argThat(u -> encoder.matches("test-only-secret", u.getPassword())
                && u.getRoles().size() == 1 && u.getRoles().iterator().next().getName().equals("ROLE_USER")));
    }

    @Test
    void profileCannotChangeIdentityRolePasswordOrPlan() throws Exception {
        User user = User.builder().userId(700L).email("owner@example.com").password("existing-hash")
                .firstName("Before").roles(Set.of(new Role(2L, "ROLE_USER")))
                .authProvider(AuthProvider.FIREBASE).authSubject("firebase-owner").build();
        when(users.findByEmail(user.getEmail())).thenReturn(Optional.of(user));
        when(users.save(any())).thenAnswer(i -> i.getArgument(0));
        var json = new ObjectMapper().configure(com.fasterxml.jackson.databind.DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        var change = json.readValue("""
                {"firstName":"After","email":"other@example.com","userId":1,
                 "roles":[{"name":"ROLE_ADMIN"}],"password":"replacement","userPlan":"PREMIUM"}
                """, UserProfileUpdateDto.class);
        UserDto result = service.updateUserProfileByEmail(user.getEmail(), change).orElseThrow();
        assertEquals("After", result.getFirstName());
        assertEquals("owner@example.com", result.getEmail());
        assertEquals(700L, result.getUserId());
        assertEquals("ROLE_USER", result.getRoles().iterator().next().getName());
        assertEquals("existing-hash", user.getPassword());
        assertEquals(AuthProvider.FIREBASE, result.getAuthProvider());
        assertEquals(Plan.FREE, result.getUserPlan());
        assertFalse(json.readTree(json.writeValueAsString(result)).has("password"));
    }

    @Test
    void partialUpdatesPreserveOmittedNumbersAndTargetId() {
        User existing = User.builder().userId(700L).userType(3).isActive(1).contactType(9).build();
        mapper.partialUpdate(UserDto.builder().userId(1L).firstName("Changed").build(), existing);
        assertEquals(700L, existing.getUserId());
        assertEquals(3, existing.getUserType());
        assertEquals(1, existing.getIsActive());
        assertEquals(9, existing.getContactType());
    }

    @Test
    void expiredTrialAndCanceledPlansAreFree() {
        UserPlan plan = UserPlan.builder().plan(Plan.PREMIUM).status(PlanStatus.TRIALING)
                .trialEnd(LocalDateTime.now().minusDays(1)).build();
        assertEquals(Plan.FREE, mapper.currentPlan(plan));
        plan.setStatus(PlanStatus.CANCELED);
        assertEquals(Plan.FREE, mapper.currentPlan(plan));
        plan.setStatus(PlanStatus.ACTIVE);
        assertEquals(Plan.PREMIUM, mapper.currentPlan(plan));
    }

    @Test
    void wrongPasswordNeverReturnsUser() {
        when(users.findByEmail("owner@example.com")).thenReturn(Optional.of(User.builder()
                .email("owner@example.com").password(encoder.encode("correct-test-password")).build()));
        assertThrows(BadCredentialsException.class, () -> service.loginUser("owner@example.com", "wrong"));
    }
}
