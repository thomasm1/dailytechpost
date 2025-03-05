package xyz.cryptomaven.stream.ourdailytech.models;

import jakarta.persistence.AttributeConverter;
import xyz.cryptomaven.stream.ourdailytech.config.SpringContextHelper;
import xyz.cryptomaven.stream.ourdailytech.services.EncryptionService;

public class UserConverter implements AttributeConverter<String, String> {
    @Override
    public String convertToDatabaseColumn(String attribute) {
        return getEncryptionService().encrypt(attribute);
    }

    @Override
    public String convertToEntityAttribute(String dbData) {
        return getEncryptionService().decrypt(dbData);
    }

    private EncryptionService getEncryptionService(){
        return SpringContextHelper.getApplicationContext().getBean(EncryptionService.class);
    }
}
