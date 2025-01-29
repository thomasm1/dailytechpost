package net.ourdailytech.rest.models.dto;

import lombok.Data;
import net.ourdailytech.rest.models.Comment;

import java.io.Serializable;

/**
 * A DTO for the {@link Comment} entity
 */
@Data
public class CommentDto implements Serializable {
    private final long id;
    private final String name;
    private final String email;
    private final String body;
    private final PostEntityDto post;
}