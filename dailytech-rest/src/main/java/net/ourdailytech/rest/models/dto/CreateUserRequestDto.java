package net.ourdailytech.rest.models.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import net.ourdailytech.rest.util.enums.AuthProvider;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreateUserRequestDto {
    @NotBlank
    @Email
    private String email;
    @NotBlank
    private String password;
    private String firstName;
    private String lastName;
    private String organizationCode;
    private String dashboardCode;
    private String cusUrl;
    private Integer userType;
    private Integer contactType;
    private Integer isActive;
    private AuthProvider authProvider;
    private String authSubject;
}
