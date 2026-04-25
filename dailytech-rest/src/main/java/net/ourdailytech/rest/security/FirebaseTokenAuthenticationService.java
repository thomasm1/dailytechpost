package net.ourdailytech.rest.security;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;
import java.nio.charset.StandardCharsets;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.Instant;
import java.util.Base64;
import java.util.Collections;
import java.util.HashSet;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;
import net.ourdailytech.rest.exception.ResourceNotFoundException;
import net.ourdailytech.rest.models.Role;
import net.ourdailytech.rest.models.User;
import net.ourdailytech.rest.repositories.RoleRepository;
import net.ourdailytech.rest.repositories.UsersRepository;
import net.ourdailytech.rest.util.enums.AuthProvider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

@Service
public class FirebaseTokenAuthenticationService {

  private static final Logger log = LoggerFactory.getLogger(FirebaseTokenAuthenticationService.class);
  private static final String FIREBASE_APP_NAME = "dailytech-rest-firebase-auth";
  private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();

  private final UsersRepository usersRepository;
  private final RoleRepository roleRepository;

  @Value("${app.firebase.project-id:}")
  private String firebaseProjectId;

  @Value("${app.firebase.credentials-path:}")
  private String firebaseCredentialsPath;

  private volatile FirebaseAuth firebaseAuth;

  public FirebaseTokenAuthenticationService(
      UsersRepository usersRepository,
      RoleRepository roleRepository) {
    this.usersRepository = usersRepository;
    this.roleRepository = roleRepository;
  }

  @Transactional(readOnly = true)
  public Optional<UserDetails> authenticate(String token) {
    Map<String, Object> unverifiedClaims = decodeClaimsWithoutVerification(token);
    try {
      logTokenDiagnostics(unverifiedClaims);
      FirebaseToken decodedToken = getFirebaseAuth().verifyIdToken(token);
      log.info(
          "Firebase token verified successfully (uid={}, email={}, configuredProjectId={})",
          decodedToken.getUid(),
          decodedToken.getEmail(),
          StringUtils.hasText(firebaseProjectId) ? firebaseProjectId : "<not-set>");
      String email = decodedToken.getEmail();
      if (!StringUtils.hasText(email)) {
        log.warn("Firebase token validated but email claim is missing");
        return Optional.empty();
      }

      User user = usersRepository.findByEmail(email)
          .orElseGet(() -> provisionFirebaseUser(email, decodedToken.getUid()));

      Set<GrantedAuthority> authorities = usersRepository.findRoleNamesByEmail(user.getEmail()).stream()
          .map(SimpleGrantedAuthority::new)
          .collect(Collectors.toCollection(HashSet::new));

      return Optional.of(new org.springframework.security.core.userdetails.User(
          user.getEmail(),
          "",
          authorities));
    } catch (FirebaseAuthException | IOException ex) {
      log.warn(
          "Firebase token verification failed (configuredProjectId={}, aud={}, iss={}, exp={})",
          StringUtils.hasText(firebaseProjectId) ? firebaseProjectId : "<not-set>",
          claimAsString(unverifiedClaims, "aud"),
          claimAsString(unverifiedClaims, "iss"),
          expAsIso(unverifiedClaims),
          ex);
      return Optional.empty();
    }
  }

  private void logTokenDiagnostics(Map<String, Object> claims) {
    if (claims.isEmpty()) {
      log.warn("Bearer token payload could not be decoded before Firebase verification");
      return;
    }
    log.info(
        "Firebase token diagnostics: aud={}, iss={}, exp={}, configuredProjectId={}, credentialsPathSet={}",
        claimAsString(claims, "aud"),
        claimAsString(claims, "iss"),
        expAsIso(claims),
        StringUtils.hasText(firebaseProjectId) ? firebaseProjectId : "<not-set>",
        StringUtils.hasText(firebaseCredentialsPath));
  }

  private Map<String, Object> decodeClaimsWithoutVerification(String token) {
    if (!StringUtils.hasText(token)) {
      return Collections.emptyMap();
    }
    try {
      String[] parts = token.split("\\.");
      if (parts.length < 2) {
        return Collections.emptyMap();
      }
      byte[] payloadBytes = Base64.getUrlDecoder().decode(parts[1]);
      String payloadJson = new String(payloadBytes, StandardCharsets.UTF_8);
      return OBJECT_MAPPER.readValue(payloadJson, new TypeReference<>() {
      });
    } catch (Exception ex) {
      return Collections.emptyMap();
    }
  }

  private String claimAsString(Map<String, Object> claims, String claimName) {
    Object value = claims.get(claimName);
    if (value == null) {
      return "<missing>";
    }
    return String.valueOf(value);
  }

  private String expAsIso(Map<String, Object> claims) {
    Object expRaw = claims.get("exp");
    if (expRaw == null) {
      return "<missing>";
    }
    try {
      long epochSeconds = Long.parseLong(String.valueOf(expRaw));
      return Instant.ofEpochSecond(epochSeconds).toString();
    } catch (NumberFormatException ex) {
      return String.valueOf(expRaw);
    }
  }

  private synchronized FirebaseAuth getFirebaseAuth() throws IOException {
    if (firebaseAuth != null) {
      return firebaseAuth;
    }

    log.info(
        "Initializing FirebaseAuth (configuredProjectId={}, credentialsPath={}, credentialsFileExists={})",
        StringUtils.hasText(firebaseProjectId) ? firebaseProjectId : "<not-set>",
        maskCredentialsPath(firebaseCredentialsPath),
        credentialsFileExists(firebaseCredentialsPath));

    FirebaseApp app = FirebaseApp.getApps().stream()
        .filter(existing -> FIREBASE_APP_NAME.equals(existing.getName()))
        .findFirst()
        .orElseGet(this::initializeFirebaseApp);

    firebaseAuth = FirebaseAuth.getInstance(app);
    return firebaseAuth;
  }

  private FirebaseApp initializeFirebaseApp() {
    try {
      GoogleCredentials credentials = loadCredentials();
      FirebaseOptions.Builder optionsBuilder = FirebaseOptions.builder()
          .setCredentials(credentials);

      if (StringUtils.hasText(firebaseProjectId)) {
        optionsBuilder.setProjectId(firebaseProjectId);
      }

      return FirebaseApp.initializeApp(optionsBuilder.build(), FIREBASE_APP_NAME);
    } catch (IOException ex) {
      throw new IllegalStateException("Unable to initialize Firebase Admin SDK", ex);
    }
  }

  private GoogleCredentials loadCredentials() throws IOException {
    if (StringUtils.hasText(firebaseCredentialsPath)) {
      log.info(
          "Loading Firebase credentials from configured path (path={}, exists={})",
          maskCredentialsPath(firebaseCredentialsPath),
          credentialsFileExists(firebaseCredentialsPath));
      try (InputStream credentialsStream = new FileInputStream(firebaseCredentialsPath)) {
        return GoogleCredentials.fromStream(credentialsStream);
      }
    }
    log.warn("FIREBASE_CREDENTIALS_PATH not set, falling back to Application Default Credentials");
    return GoogleCredentials.getApplicationDefault();
  }

  private boolean credentialsFileExists(String pathValue) {
    if (!StringUtils.hasText(pathValue)) {
      return false;
    }
    try {
      Path path = Paths.get(pathValue);
      return Files.exists(path);
    } catch (Exception ex) {
      log.warn("Unable to evaluate Firebase credentials path existence", ex);
      return false;
    }
  }

  private String maskCredentialsPath(String pathValue) {
    if (!StringUtils.hasText(pathValue)) {
      return "<not-set>";
    }
    try {
      Path path = Paths.get(pathValue);
      Path fileName = path.getFileName();
      if (fileName == null) {
        return "<unresolved>";
      }
      return ".../" + fileName;
    } catch (Exception ex) {
      return "<invalid-path>";
    }
  }

  private User provisionFirebaseUser(String email, String firebaseUid) {
    Role userRole = roleRepository.findByName("ROLE_USER")
        .orElseThrow(() -> new ResourceNotFoundException("Role", "name", "ROLE_USER"));

    User firebaseUser = User.builder()
        .email(email)
        .password("")
        .authProvider(AuthProvider.FIREBASE)
        .authSubject(firebaseUid)
        .roles(new HashSet<>(Collections.singleton(userRole)))
        .build();

    return usersRepository.save(firebaseUser);
  }
}
