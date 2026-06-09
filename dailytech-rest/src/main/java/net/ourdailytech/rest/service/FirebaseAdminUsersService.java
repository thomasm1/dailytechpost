package net.ourdailytech.rest.service;

import com.google.firebase.auth.ExportedUserRecord;
import com.google.firebase.auth.FirebaseAuthException;
import java.io.IOException;
import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;
import net.ourdailytech.rest.models.dto.FirebaseAdminUserDto;
import net.ourdailytech.rest.security.FirebaseTokenAuthenticationService;
import org.springframework.stereotype.Service;

@Service
public class FirebaseAdminUsersService {

  private final FirebaseTokenAuthenticationService firebaseTokenAuthenticationService;

  public FirebaseAdminUsersService(
      FirebaseTokenAuthenticationService firebaseTokenAuthenticationService) {
    this.firebaseTokenAuthenticationService = firebaseTokenAuthenticationService;
  }

  public List<FirebaseAdminUserDto> listUsers() throws FirebaseAuthException, IOException {
    List<FirebaseAdminUserDto> users = new ArrayList<>();

    for (ExportedUserRecord user : firebaseTokenAuthenticationService.getFirebaseAuth().listUsers(null).iterateAll()) {
      users.add(toDto(user));
    }

    return users;
  }

  private FirebaseAdminUserDto toDto(ExportedUserRecord user) {
    return FirebaseAdminUserDto.builder()
        .uid(user.getUid())
        .email(user.getEmail())
        .displayName(user.getDisplayName())
        .emailVerified(user.isEmailVerified())
        .disabled(user.isDisabled())
        .providers(Arrays.stream(user.getProviderData())
            .map(provider -> provider.getProviderId())
            .toList())
        .creationTimestamp(user.getUserMetadata() != null
            ? user.getUserMetadata().getCreationTimestamp()
            : null)
        .lastSignInTimestamp(user.getUserMetadata() != null
            ? user.getUserMetadata().getLastSignInTimestamp()
            : null)
        .build();
  }
}
