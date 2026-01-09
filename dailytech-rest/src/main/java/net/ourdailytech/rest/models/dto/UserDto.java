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
    @Schema(description = "User First Name")
    private String username;
    private String lastName; // lastName
    @Schema(description = "User First Name")
    private String firstName; // firstName
    private String organizationCode;
    private String dashboardCode; // usergroup
    private String cusUrl; // usergroup
    private int userType;

    @Schema(description = "Username==email")
    @NotEmpty(message = "User email should not be null or empty")
    @Email(message = "Email address should be valid")
    private String email;
    private int contactType;
    private int isActive;

    private Set<RoleDto> roles;
    private String id; // id
    private Set<PostEntity> posts = new HashSet<>();

    public String getPassword() {
        return username; // for/admin
    }



    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserDto userDto = (UserDto) o;
        return userId == userDto.userId &&
                userType == userDto.userType &&
                isActive == userDto.isActive &&
                contactType == userDto.contactType &&
                Objects.equals(username, userDto.username) &&
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
        return Objects.hash(userId, username, lastName, firstName, userType, organizationCode, dashboardCode, email, cusUrl, contactType, isActive, id);
    }
}
