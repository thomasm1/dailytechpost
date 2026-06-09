package net.ourdailytech.rest.models.dto;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FirebaseAdminUserDto {
  private String uid;
  private String email;
  private String displayName;
  private Boolean emailVerified;
  private Boolean disabled;
  private List<String> providers;
  private Long creationTimestamp;
  private Long lastSignInTimestamp;
}
