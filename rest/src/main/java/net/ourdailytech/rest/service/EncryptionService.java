package net.ourdailytech.rest.service;

/**
 * Created by jt on 6/28/22.
 */
public interface EncryptionService {

    String encrypt(String freeText);

    String decrypt(String encryptedText);
}
