package net.ourdailytech.rest.repositories;

import net.ourdailytech.rest.models.Bookmark;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "bookmarks", path = "bookmarks", itemResourceRel = "bookmark")
public interface BookmarkRepository extends JpaRepository<Bookmark, Long> {

}
