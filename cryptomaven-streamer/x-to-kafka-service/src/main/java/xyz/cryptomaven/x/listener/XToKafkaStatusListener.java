package xyz.cryptomaven.x.listener;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import twitter4j.Status;
import twitter4j.StatusAdapter;

@Component
public class XToKafkaStatusListener extends StatusAdapter {

    private static final Logger LOG = LoggerFactory.getLogger(XToKafkaStatusListener.class);

    @Override
    public void onStatus(Status status) {
        LOG.info("Twitter status with text {}", status.getText());
    }
}
