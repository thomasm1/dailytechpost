package xyz.cryptomaven.x;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import twitter4j.TwitterException;
import xyz.cryptomaven.x.config.XToKafkaServiceConfigData;
import xyz.cryptomaven.x.runner.StreamRunner;

import java.util.Arrays;
 @SpringBootApplication
public class XToKafkaApplication implements CommandLineRunner {

    private static final Logger LOG = LoggerFactory.getLogger(XToKafkaApplication.class);

    private XToKafkaServiceConfigData xToKafkaServiceConfigData;

    private    StreamRunner streamRunner;

    public XToKafkaApplication(XToKafkaServiceConfigData configData) {
        this.xToKafkaServiceConfigData = configData;
    }

    public static void main(String[] args) {
        SpringApplication.run(XToKafkaApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        LOG.info("App starts...");
//        LOG.info(Arrays.toString(xToKafkaServiceConfigData.getXKeywords().toArray(new String[] {})));
//        LOG.info(xToKafkaServiceConfigData.getWelcomeMessage());
       StreamRunner streamRunner = () -> {

       };
        streamRunner.start();
    }
}
