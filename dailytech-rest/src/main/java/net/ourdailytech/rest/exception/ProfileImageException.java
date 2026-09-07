package net.ourdailytech.rest.exception;

import org.springframework.http.HttpStatus;

public class ProfileImageException extends RuntimeException {
    private final HttpStatus status;
    public ProfileImageException(HttpStatus status, String message) {
        super(message);
        this.status = status;
    }
    public HttpStatus getStatus() { return status; }
}
