package xyz.cryptomaven.stream.ourdailytech.models.dto;

import lombok.*;

import java.util.List;

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
    private List<NewsDto> news;
}
