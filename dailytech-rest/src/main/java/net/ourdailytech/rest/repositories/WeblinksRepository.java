package net.ourdailytech.rest.repositories;

import java.util.Optional;
import net.ourdailytech.rest.models.Weblink;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource(collectionResourceRel="weblink", path="weblink")
public interface WeblinksRepository extends JpaRepository<Weblink, Long> {
  Optional<Weblink> findById(Long id);
  // Additional query methods can be defined here if needed
}