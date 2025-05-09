package xyz.cryptomaven.stream.streamer.exception;

public class XToKafkaServiceException extends RuntimeException {

    public XToKafkaServiceException() {
        super();
    }

    public XToKafkaServiceException(String message) {
        super(message);
    }

    public XToKafkaServiceException(String message, Throwable cause) {
        super(message, cause);
    }
}
