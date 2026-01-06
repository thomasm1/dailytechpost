package net.ourdailytech.rest.repositories;

import java.util.List;
import java.util.Optional;
import net.ourdailytech.rest.models.Weblink;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import net.ourdailytech.rest.models.PostEntity;


@RepositoryRestResource(collectionResourceRel = "weblinks", path = "weblinks", itemResourceRel = "weblink")
public interface WeblinksRepository extends JpaRepository<Weblink, Long> {
  Optional<Weblink> findById(Long id);

  List<Weblink> findByPostEntity(PostEntity postEntity);
  // Additional query methods can be defined here if needed
}