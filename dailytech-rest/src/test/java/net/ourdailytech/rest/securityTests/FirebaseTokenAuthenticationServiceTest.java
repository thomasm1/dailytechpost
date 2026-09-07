package net.ourdailytech.rest.securityTests;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

import net.ourdailytech.rest.security.FirebaseTokenAuthenticationService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class FirebaseTokenAuthenticationServiceTest {  

@InjectMocks
private FirebaseTokenAuthenticationService service;

@Test
void firebaseLoginPreservesExistingLocalAdminIdentityAndRoles() throws Exception {
  var users = mock(net.ourdailytech.rest.repositories.UsersRepository.class);
  var roles = mock(net.ourdailytech.rest.repositories.RoleRepository.class);
  var firebase = mock(com.google.firebase.auth.FirebaseAuth.class);
  var token = mock(com.google.firebase.auth.FirebaseToken.class);
  var auth = spy(new FirebaseTokenAuthenticationService(users, roles));
  doReturn(firebase).when(auth).getFirebaseAuth();
  when(firebase.verifyIdToken("test-token")).thenReturn(token);
  when(token.getEmail()).thenReturn("admin@example.com");
  when(token.getUid()).thenReturn("firebase-uid");
  var account = net.ourdailytech.rest.models.User.builder().userId(10L)
      .email("admin@example.com").firstName("Local Name")
      .authProvider(net.ourdailytech.rest.util.enums.AuthProvider.INTERNAL)
      .authSubject("local-subject")
      .roles(java.util.Set.of(new net.ourdailytech.rest.models.Role(1L, "ROLE_ADMIN"))).build();
  when(users.findByEmailWithRoles("admin@example.com")).thenReturn(java.util.Optional.of(account));
  var principal = auth.authenticate("test-token").orElseThrow();
  assertThat(principal.getUsername()).isEqualTo("admin@example.com");
  assertThat(principal.getAuthorities()).extracting("authority").containsExactly("ROLE_ADMIN");
  assertThat(account.getUserId()).isEqualTo(10L);
  assertThat(account.getFirstName()).isEqualTo("Local Name");
  verify(users, never()).save(any());
  verifyNoInteractions(roles);
}

@Test
void looksLikeFirebaseTokenReturnsTrueForFirebaseIssuer() {
  String payload = Base64.getUrlEncoder().withoutPadding().encodeToString(
      "{\"iss\":\"https://securetoken.google.com/dailytech-project\"}".getBytes(StandardCharsets.UTF_8)
  );

  assertThat(service.looksLikeFirebaseToken("header." + payload + ".signature")).isTrue();
}

@Test
void looksLikeFirebaseTokenReturnsFalseForNativeJwt() {
  String payload = Base64.getUrlEncoder().withoutPadding().encodeToString(
      "{\"iss\":\"dailytech-rest\",\"sub\":\"admin@example.com\"}".getBytes(StandardCharsets.UTF_8)
  );

  assertThat(service.looksLikeFirebaseToken("header." + payload + ".signature")).isFalse();
}
}
