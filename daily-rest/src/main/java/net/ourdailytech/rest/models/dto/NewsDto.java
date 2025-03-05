package net.ourdailytech.rest.models.dto;

import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link net.ourdailytech.rest.models.News}
 */
@Value
public class NewsDto implements Serializable {
    Long id;
    String title;
    String url;
    CategoryDto category;
}