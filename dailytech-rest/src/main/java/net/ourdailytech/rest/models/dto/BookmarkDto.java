package net.ourdailytech.rest.models.dto;

 import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
 import net.ourdailytech.rest.models.Bookmark;

 import java.io.Serializable;

/**
 * A DTO for the {@link Bookmark} entity
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookmarkDto implements Serializable {

    static final long serialVersionUID = 1L;
    private long id;
    private String title;
    private String profileUrl;
    private UserDto sharedBy;
    private String ownerEmail;
}