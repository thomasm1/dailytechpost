package net.ourdailytech.rest.util;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class PasswordGeneratorEncoder {
    public static void mainEncoder(String[] args) {
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        System.out.println( "thomasmaestas: ") ;
        System.out.println(passwordEncoder.encode("thomasmaestas")); //$2a$10$v3gusZBHrf/XHRX0l8.35uMK5xdZYfTnDciHwjyNJAiW2FlmEz5m.
        System.out.println( "password: ");
        System.out.println(passwordEncoder.encode("z****4"));
        for (String arg : args) {
            System.out.println( arg + " : ");
            System.out.println(passwordEncoder.encode(arg));
        }
    }

    public static String encode(String password) {
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        return passwordEncoder.encode(password);
    }
}
