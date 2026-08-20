package net.ourdailytech.rest.securityTests;

import static org.assertj.core.api.Assertions.assertThat;

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