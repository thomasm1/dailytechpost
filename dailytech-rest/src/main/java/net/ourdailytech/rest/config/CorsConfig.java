package net.ourdailytech.rest.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import static net.ourdailytech.rest.util.constants.Constant.*;

@Configuration
public class CorsConfig {

  @Bean
  public WebMvcConfigurer corsConfigurer() {
    return new WebMvcConfigurer() {
      @Override
      public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
            .allowedOriginPatterns("http://localhost:*", UI_ORIGIN, UI_ORIGIN + ":*" )
            .allowedMethods("GET","POST","PUT","DELETE","OPTIONS")
            .allowedHeaders("*")
            .exposedHeaders("*")
            .allowCredentials(true);
      }
    };
  }
}