package xyz.cryptomaven.stream.streamer;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import xyz.cryptomaven.stream.streamer.runner.StreamRunner;

@SpringBootApplication
public class XToKafkaApplication implements CommandLineRunner {

    private static final Logger LOG = LoggerFactory.getLogger(XToKafkaApplication.class);

    private final XToKafkaServiceConfigData xToKafkaServiceConfigData;

    private final  StreamRunner streamRunner;

    public XToKafkaApplication(XToKafkaServiceConfigData configData, StreamRunner streamRunner) {
        this.xToKafkaServiceConfigData = configData;
        this.streamRunner = streamRunner;
    }

    public static void main(String[] args) {
        SpringApplication.run(XToKafkaApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        LOG.info("App starts...");
//        LOG.info(Arrays.toString(xToKafkaServiceConfigData.getXKeywords().toArray(new String[] {})));
//        LOG.info(xToKafkaServiceConfigData.getWelcomeMessage());
        streamRunner.start();
    }
}
