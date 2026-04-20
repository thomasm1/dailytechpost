package net.ourdailytech.rest.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.Profile;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.annotation.web.configurers.HeadersConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

/**
 * Test security configuration that is loaded only when h2 profile is active.
 * This configuration allows all requests without JWT validation for integration testing.
 */
@Configuration
@Profile("h2")
@EnableWebSecurity
@EnableMethodSecurity
public class TestSecurityConfig {

  /**
   * Test security filter chain that allows all requests without JWT validation.
   * This is used during integration testing with the h2 profile.
   */
  @Bean
  @Primary
  public SecurityFilterChain testSecurityFilterChain(HttpSecurity http) throws Exception {
    // For testing: no JWT filter, allow all requests, use session-based security context
    // so that SecurityMockMvcRequestPostProcessors.user() is picked up correctly.
    http
        .cors(Customizer.withDefaults())
        .csrf(AbstractHttpConfigurer::disable)
        .authorizeHttpRequests(auth -> auth
            .anyRequest().permitAll()
        )
        // IF_REQUIRED (the default) keeps HttpSessionSecurityContextRepository active,
        // which lets .with(user(...)) inject the Authentication properly.
        .headers(headers -> headers
            .frameOptions(HeadersConfigurer.FrameOptionsConfig::sameOrigin)
        );

    return http.build();
  }

  @Bean
  @Primary
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }

  /**
   * Expose AuthenticationManager as a bean so UsersServiceImpl can inject it
   * even when the main SecurityConfig is excluded by @Profile("!h2").
   */
  @Bean
  @Primary
  public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
    return configuration.getAuthenticationManager();
  }
}

