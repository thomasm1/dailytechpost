package net.ourdailytech.rest.models.dto;

import lombok.*;
import net.ourdailytech.rest.models.Comment;
import net.ourdailytech.rest.models.PostEntity;

import java.io.Serializable;

/**
 * A DTO for the {@link Comment} entity
 */
@Getter
@Setter
@Builder
@AllArgsConstructor
public class CommentDto implements Serializable {
    private final long id;
    private final String name;
    private final String email;
    private final String body;
    private final long postId;
}