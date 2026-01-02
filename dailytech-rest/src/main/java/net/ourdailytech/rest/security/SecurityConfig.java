package net.ourdailytech.rest.security;


import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import jakarta.servlet.http.HttpServletResponse;
import java.util.Arrays;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity; 
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.annotation.web.configurers.HeadersConfigurer; 
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
//import org.springframework.securityOLD.authentication.AnonymousAuthenticationToken;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.configurers.HeadersConfigurer.FrameOptionsConfig;


import java.util.function.Function;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;


@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@SecurityScheme(
        name = "Bearer Authentication",
        type = SecuritySchemeType.HTTP,
        bearerFormat = "JWT",
        scheme = "bearer"
)
public class SecurityConfig {

    private static final Logger log = LoggerFactory.getLogger(SecurityConfig.class);

    private UserDetailsService userDetailsService;
    private JwtAuthenticationEntryPoint authenticationEntryPoint;

    private JwtAuthenticationFilter authenticationFilter;

    public SecurityConfig(
            UserDetailsService userDetailsService,
            JwtAuthenticationEntryPoint authenticationEntryPoint,
            JwtAuthenticationFilter authenticationFilter) {
        this.userDetailsService = userDetailsService;
        this.authenticationEntryPoint = authenticationEntryPoint;
        this.authenticationFilter = authenticationFilter;
    }

  @Value("${app.cors.allowed-origins:http://localhost:4200,http://localhost:3000,http://localhost:5000,http://18.219.100.84,https://blog.cryptomaven.xyz}")
  private String allowedOriginsString;
 
  private List<String> getAllowedOrigins() {
    return Arrays.asList(allowedOriginsString.split(","));
  }
    // IMPORTANT: with allowCredentials(true), do NOT use "*" here.
  @Bean
  public CorsConfigurationSource corsConfigurationSource() {
    CorsConfiguration config = new CorsConfiguration();

    // IMPORTANT: with allowCredentials(true), do NOT use "*" here.
    config.setAllowedOrigins(getAllowedOrigins());
    config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
    config.setAllowedHeaders(List.of("*"));
    config.setExposedHeaders(List.of("*"));
    config.setAllowCredentials(true);

    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    source.registerCorsConfiguration("/api/**", config);
    return source;
  }

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        log.info("sec___________securityFilterChain__________________ filterChain");


        http.cors(Customizer.withDefaults())
            .csrf(AbstractHttpConfigurer::disable) // disable CSRF for stateless APIs
            .authorizeHttpRequests(auth -> auth
                        .requestMatchers(HttpMethod.GET, "/swagger-ui/**", "/swagger-ui.html", "/v3/api-docs/**").permitAll() // Open API
                        .requestMatchers("/h2-console/**").permitAll()
                        .requestMatchers(HttpMethod.GET, "/actuator/**").permitAll() // Actuator
                        .requestMatchers(HttpMethod.GET, "/rest/**", "/v1/**", "/api/**" ).permitAll() // APIs
                        .requestMatchers(HttpMethod.POST, "/api/users/auth/**").permitAll() // Login & register

                        .requestMatchers(HttpMethod.POST, "/api/**" ).authenticated() //.permitAll()
                        .requestMatchers(HttpMethod.OPTIONS, "/api/**" ).permitAll()
                        .requestMatchers(HttpMethod.PUT, "/api/**").hasAnyRole("USER", "ADMIN") //.permitAll() //
                        .requestMatchers(HttpMethod.DELETE, "/api/**").hasRole( "ADMIN") //permitAll() //

                    .requestMatchers(HttpMethod.GET, "/api/posts/*/comments").permitAll()
                    .requestMatchers(HttpMethod.POST, "/api/posts/*/comments").authenticated()  //permitAll() //
                    .requestMatchers(HttpMethod.OPTIONS, "/api/posts/*/comments").permitAll()
                    .requestMatchers(HttpMethod.PUT, "/api/posts/*/comments/*").hasAnyRole("USER", "ADMIN") //.permitAll() //
                    .requestMatchers(HttpMethod.DELETE, "/api/posts/*/comments/*").hasRole( "ADMIN") //permitAll() //
                    .anyRequest().authenticated() // All other requests require authentication
                )
                .exceptionHandling(exception -> exception
                        .authenticationEntryPoint(authenticationEntryPoint)
                        .accessDeniedHandler((req, res, e) -> res.sendError(HttpServletResponse.SC_FORBIDDEN))
                )
                .sessionManagement(session -> session
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                )
                .headers(headers -> headers 
                        .frameOptions(HeadersConfigurer.FrameOptionsConfig::sameOrigin)  // Allow H2 Console 
                );

        http.addFilterBefore(authenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public static PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
        log.info("authenticationManager");
        return configuration.getAuthenticationManager();
    }

    // FORM
//    http.formLogin(httpwithDefaults());
//        http.authorizeRequests().anyRequest().permitAll();

}
