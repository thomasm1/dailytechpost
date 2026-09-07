package net.ourdailytech.rest.models.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import lombok.*;
import net.ourdailytech.rest.models.PostEntity;
import net.ourdailytech.rest.models.Role;
import java.util.Objects;
import java.io.Serializable;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Schema(
        description = "User profile information Data Transfer Object"
)
@Getter
@Setter
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDto implements Serializable {


    private Long userId; // userId
    @Schema(description = "User Last Name")
    private String lastName; // lastName
    @Schema(description = "User First Name")
    private String firstName; // firstName
    private String organizationCode;
    private String dashboardCode; // usergroup
    private String cusUrl; // usergroup
    private Integer userType;

    @Schema(description = "Username==email")
    @NotEmpty(message = "User email should not be null or empty")
    @Email(message = "Email address should be valid")
    private String email;
    private Integer contactType;
    private Integer isActive;

    private net.ourdailytech.rest.util.enums.Plan userPlan;
    private net.ourdailytech.rest.util.enums.AuthProvider authProvider;
    private String authSubject;

    private Set<RoleDto> roles;
    private String id; // id
    private Set<PostEntity> posts = new HashSet<>();

    // for/admin: creation now uses CreateUserRequestDto with an explicit password.
    // Response DTOs never expose or manufacture credentials from the email.



    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserDto userDto = (UserDto) o;
        return Objects.equals(userId, userDto.userId) &&
                Objects.equals(userType, userDto.userType) &&
                Objects.equals(isActive, userDto.isActive) &&
                Objects.equals(contactType, userDto.contactType) &&
                Objects.equals(lastName, userDto.lastName) &&
                Objects.equals(firstName, userDto.firstName) &&
                Objects.equals(organizationCode, userDto.organizationCode) &&
                Objects.equals(dashboardCode, userDto.dashboardCode) &&
                Objects.equals(email, userDto.email) &&
                Objects.equals(cusUrl, userDto.cusUrl) &&
                Objects.equals(id, userDto.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId,   lastName, firstName, userType, organizationCode, dashboardCode, email, cusUrl, contactType, isActive, id);
    }
}
