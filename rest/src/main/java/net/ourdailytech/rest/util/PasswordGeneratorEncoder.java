package net.ourdailytech.rest.util;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class PasswordGeneratorEncoder {
    public static void encodeUsers(String[] args) {
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        System.out.println( "thomasmaestas: ") ;
        System.out.println(passwordEncoder.encode("thomasmaestas"));
        System.out.println( "password: ");
        System.out.println(passwordEncoder.encode("password"));
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
