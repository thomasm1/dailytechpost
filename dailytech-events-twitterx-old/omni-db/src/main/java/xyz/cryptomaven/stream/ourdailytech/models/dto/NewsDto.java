package xyz.cryptomaven.stream.ourdailytech.models.dto;

import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link xyz.cryptomaven.stream.ourdailytech.models.News}
 */
@Value
public class NewsDto implements Serializable {
    Long id;
    String title;
    String url;
    CategoryDto category;
}