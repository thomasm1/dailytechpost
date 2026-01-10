package net.ourdailytech.rest.models.dto;

import jakarta.validation.constraints.NotEmpty;
import java.io.Serializable;
import java.util.Set;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import net.ourdailytech.rest.models.PostEntity;

/**
 * A DTO for the {@link PostEntity} entity
 */
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PostRequestDto implements Serializable {

    private static final long serialVersionUID = 1L;

    private String did;
    private String date;
    private String author;
    private String monthOrder;
    private String cat3;

    @NotEmpty
//    @Size(min = 10, message="Post title should have at least 10 characters")
    private String title;

    @NotEmpty
    private String post;
    private String blogcite;

    private String email;
    private String state;
    private int wordCount;
    private int durationGoal;
    private Long categoryId;
    private Set<CommentDto> comments;
    private Set<WeblinkDto> weblinks;
}