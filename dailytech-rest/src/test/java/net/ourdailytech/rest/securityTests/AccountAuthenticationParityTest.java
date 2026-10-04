package net.ourdailytech.rest.securityTests;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
import java.util.Optional;
import java.util.Set;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseToken;
import net.ourdailytech.rest.models.*;
import net.ourdailytech.rest.repositories.*;
import net.ourdailytech.rest.security.FirebaseTokenAuthenticationService;
import net.ourdailytech.rest.util.enums.AuthProvider;
import org.junit.jupiter.api.Test;

class AccountAuthenticationParityTest {
    private final UsersRepository users = mock(UsersRepository.class);
    private final RoleRepository roles = mock(RoleRepository.class);
    private final FirebaseAuth firebase = mock(FirebaseAuth.class);
    private final FirebaseToken token = mock(FirebaseToken.class);
    private FirebaseTokenAuthenticationService service() throws Exception {
        var service = spy(new FirebaseTokenAuthenticationService(users, roles));
        doReturn(firebase).when(service).getFirebaseAuth();
        when(firebase.verifyIdToken("test-token", true)).thenReturn(token);
        when(token.getEmail()).thenReturn("owner@example.com");
        return service;
    }
    @Test void differentSubjectCannotTakeOverExistingAccount() throws Exception {
        var service = service();
        when(token.getUid()).thenReturn("different-subject");
        when(users.findByEmailWithRoles("owner@example.com")).thenReturn(Optional.of(User.builder()
                .authSubject("original-subject").authProvider(AuthProvider.FIREBASE).build()));
        assertTrue(service.authenticate("test-token").isEmpty());
        verify(users, never()).save(any());
        verifyNoInteractions(roles);
    }
    @Test void emailVerificationIsNotRequiredToLinkExistingAccount() throws Exception {
        var service = service();
        when(token.getUid()).thenReturn("new-subject");
        var existing = User.builder().authProvider(AuthProvider.INTERNAL)
                .email("owner@example.com").roles(Set.of(new Role(1L, "ROLE_ADMIN"))).build();
        when(users.findByEmailWithRoles("owner@example.com")).thenReturn(Optional.of(existing));
        when(users.save(any())).thenAnswer(i -> i.getArgument(0));
        var principal = service.authenticate("test-token").orElseThrow();
        assertEquals("new-subject", existing.getAuthSubject());
        assertEquals(Set.of("ROLE_ADMIN"), principal.getAuthorities().stream()
                .map(a -> a.getAuthority()).collect(java.util.stream.Collectors.toSet()));
        verify(token, never()).isEmailVerified();
    }
    @Test void emailVerificationIsNotRequiredToProvisionActiveFreeUser() throws Exception {
        var service = service();
        when(token.getUid()).thenReturn("new-subject");
        when(users.findByEmailWithRoles("owner@example.com")).thenReturn(Optional.empty());
        when(roles.findByName("ROLE_USER")).thenReturn(Optional.of(new Role(2L, "ROLE_USER")));
        when(users.save(any())).thenAnswer(i -> i.getArgument(0));
        var principal = service.authenticate("test-token").orElseThrow();
        assertEquals("owner@example.com", principal.getUsername());
        verify(token, never()).isEmailVerified();
        assertEquals(Set.of("ROLE_USER"), principal.getAuthorities().stream().map(a -> a.getAuthority()).collect(java.util.stream.Collectors.toSet()));
        verify(users).save(argThat(u -> u.getIsActive() == 1 && u.getUserPlan() != null
                && u.getUserPlan().getPlan() == net.ourdailytech.rest.util.enums.Plan.FREE
                && u.getUserPlan().getUser() == u));
    }
    @Test void providerVerificationFailureNeverAuthenticates() throws Exception {
        var service = spy(new FirebaseTokenAuthenticationService(users, roles));
        doThrow(new java.io.IOException("test failure")).when(service).getFirebaseAuth();
        assertTrue(service.authenticate("test-token").isEmpty());
        verifyNoInteractions(users, roles);
    }
}
