package net.ourdailytech.rest.models.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import lombok.*;
import net.ourdailytech.rest.models.Role;

import java.io.Serializable;
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


    private int userId; // userId
    @Schema(description = "User First Name")
    @NotEmpty(message = "User last name should not be null or empty")
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

    private Set<Role> roles;
    private String id; // id


    public String getPassword() {
        return username; // for/admin
    }
}
