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
    private Long parentId;
    private List<CategoryDto> children;
    private List<NewsDto> news;
//    private List<PostEntityDto> posts;
}

//  id	name        	       description
//10	A.I.Now.	           AI news
//11	Web Dev Affairs 	     Web
//12	Sociology Tomorrow!      Sociology
//13	Quantum Data            Quantum  news
//14	Musing Blockchain   	Cryptocurrency insights
// INSERT INTO categories (id, name, description, parent_id, depth)
// VALUES
//     (1001, 'A.I. Developer', 'Developer resources for A.I.Now.', 10, 1),
//     (1101, 'Web Dev Developer', 'Developer resources for Web Dev Affairs', 11, 1),
//     (1201, 'Sociology Developer', 'Developer resources for Sociology Tomorrow!', 12, 1),
//     (1301, 'Quantum Developer', 'Developer resources for Quantum Data', 13, 1),
//     (1401, 'Blockchain Developer', 'Developer resources for Musing Blockchain', 14, 1);
