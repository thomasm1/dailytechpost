package xyz.cryptomaven.x.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Data
@Configuration
@ConfigurationProperties(prefix = "x-to-kafka-service")
public class XToKafkaServiceConfigData {

    private List<String> xKeywords;
    private String welcomeMessage;
    private Boolean enableMockTweets;
    private Long mockSleepMs;
    private Integer mockMinTweetLength;
    private Integer mockMaxTweetLength;

    public int getMockMinTweetLength() {
        return this.mockMinTweetLength;
    }
    public int getMockMaxTweetLength() {
        return this.mockMinTweetLength;
    }
    public List<String> getXKeywords() {
        return this.xKeywords != null ? this.xKeywords : List.of();
    }
}
