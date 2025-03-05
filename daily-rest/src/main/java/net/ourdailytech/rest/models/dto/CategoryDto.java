package net.ourdailytech.rest.models.dto;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CategoryDto {
    private Long id;
    private String name;
    private String description;
    private  String  urls;
}
