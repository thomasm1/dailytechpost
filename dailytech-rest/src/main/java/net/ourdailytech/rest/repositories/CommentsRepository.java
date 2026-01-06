package net.ourdailytech.rest.repositories;

import net.ourdailytech.rest.models.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "comments", path = "comments", itemResourceRel = "comment")
public interface CommentsRepository extends JpaRepository<Comment, Long> {
    List<Comment> findByPostId(long postId);
}
