package net.ourdailytech.rest.models.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;


/**
 * DTO for {@link net.ourdailytech.rest.models.Link}
 */

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LinkDto implements Serializable {
    Long id;
    String title;
    String url;
    String normalizedUrl;
    Long categoryId;
    Boolean publicLink;
}
