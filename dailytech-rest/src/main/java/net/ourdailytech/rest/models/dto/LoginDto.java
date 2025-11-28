package net.ourdailytech.rest.models.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.*;

import java.io.Serializable;

@Data
@NoArgsConstructor
@Getter
@Setter
public class LoginDto  implements Serializable {
    static long serialVersionUID = 1L;

        @NotEmpty(message = "Email/Username should not be empty")
        @NotNull(message = "Email/Username is invalid")
    private String usernameOrEmail;

        @NotEmpty(message = "Password should not be empty")
        @NotNull(message = "Password is invalid")
    private String password;

    public LoginDto(String usernameOrEmail, String password ) {
        this.usernameOrEmail = usernameOrEmail;
        this.password = password;
    }



    public void setUsernameOrEmail(String usernameOrEmail) {
        this.usernameOrEmail = usernameOrEmail;
    }
}
