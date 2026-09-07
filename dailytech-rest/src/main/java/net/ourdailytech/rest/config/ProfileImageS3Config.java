package net.ourdailytech.rest.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.S3Client;

@Configuration
@EnableConfigurationProperties(ProfileImageS3Config.Properties.class)
public class ProfileImageS3Config {
    @Bean
    S3Client profileImageS3Client(Properties properties) {
        // Credentials come from the SDK default chain: local AWS profile or deployment IAM role.
        return S3Client.builder().region(Region.of(properties.getRegion())).build();
    }

    @Getter
    @Setter
    @ConfigurationProperties(prefix = "app.aws.s3")
    public static class Properties {
        private String region = "us-east-1";
        private String profileImageBucket = "";
        private String profileImagePrefix = "dailytech/img/";
        private String publicBaseUrl = "";
        private String publicOriginPath = "";
    }
}
