package net.ourdailytech.rest.models.dto;

import lombok.*; 
import net.ourdailytech.rest.models.Role; 
import java.io.Serializable;
import java.util.Set;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.NotNull;

@Data
@Builder
@NoArgsConstructor
@Getter
@Setter
public class RegisterDto implements Serializable {
    private static long serialVersionUID = 1L;
    @Email(message = "Email should be valid")
    @NotEmpty(message = "Email should not be empty")
    @Pattern(regexp = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$", message = "Invalid email format")
    @NotNull(message = "Email cannot be null")
    private String email;

    @NotEmpty(message = "Password should not be empty")
//    @Pattern(regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{6,}$",
//             message = "Password must be at least 6 characters long and include at least one uppercase letter, " +
//                       "one lowercase letter, one digit, and one special character")
    @NotNull(message = "Password cannot be null")
    private String password;

    public RegisterDto(String email, String password   ) {

        this.email = email;
        this.password = password;

    }

    String makeUsername(String email) {
//        	String[] parts = email.split("@");
//        	return parts[0];
        return email;
    }
 
    public void setRoles(Set<Role> roleUser) {
    } 
}
