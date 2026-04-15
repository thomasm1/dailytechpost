package net.ourdailytech.rest.security;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Collections;
import java.util.HashSet;
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
import org.springframework.util.StringUtils;

@Service
public class FirebaseTokenAuthenticationService {

  private static final Logger log = LoggerFactory.getLogger(FirebaseTokenAuthenticationService.class);
  private static final String FIREBASE_APP_NAME = "dailytech-rest-firebase-auth";

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

  public Optional<UserDetails> authenticate(String token) {
    try {
      FirebaseToken decodedToken = getFirebaseAuth().verifyIdToken(token);
      String email = decodedToken.getEmail();
      if (!StringUtils.hasText(email)) {
        log.warn("Firebase token validated but email claim is missing");
        return Optional.empty();
      }

      User user = usersRepository.findByEmail(email)
          .orElseGet(() -> provisionFirebaseUser(email, decodedToken.getUid()));

      Set<GrantedAuthority> authorities = user.getRoles().stream()
          .map(Role::getName)
          .map(SimpleGrantedAuthority::new)
          .collect(Collectors.toCollection(HashSet::new));

      return Optional.of(new org.springframework.security.core.userdetails.User(
          user.getEmail(),
          "",
          authorities));
    } catch (FirebaseAuthException | IOException ex) {
      log.debug("Bearer token is not a valid Firebase ID token", ex);
      return Optional.empty();
    }
  }

  private synchronized FirebaseAuth getFirebaseAuth() throws IOException {
    if (firebaseAuth != null) {
      return firebaseAuth;
    }

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
      try (InputStream credentialsStream = new FileInputStream(firebaseCredentialsPath)) {
        return GoogleCredentials.fromStream(credentialsStream);
      }
    }
    return GoogleCredentials.getApplicationDefault();
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
