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

//  id	name        	       description
//10	A.I.Now.	           AI news
//11	Web Dev Affairs 	     Web
//12	Sociology Tomorrow!      Sociology
//13	Quantum Data            Quantum  news
//14	Musing Blockchain   	Cryptocurrency insights
//15	category name	description category
//16	category name	description category
//17	category name	description category
