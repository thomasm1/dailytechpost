package net.ourdailytech.rest.repositories;

import net.ourdailytech.rest.models.Bookmark;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookmarkRepository extends JpaRepository<Bookmark, Long> {

}
