package net.ourdailytech.rest.models.dto;

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
    private List<NewsDto> news;
//    private List<PostEntityDto> posts;
}

//  id	name	description
//10	Tech	Technology news
//11	Health	Health & Wellness
//12	Sports	Sports updates
//13	Finance	Financial news & tips
//14	Crypto	Cryptocurrency insights
//15	category name	description category
//16	category name	description category
//17	category name	description category
