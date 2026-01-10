package net.ourdailytech.rest.repositories;

import java.util.Optional;
import net.ourdailytech.rest.models.News;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "news", path = "news", itemResourceRel = "news")
public interface NewsRepository extends JpaRepository<News, Long> {

  @Override
  Optional<News> findById(Long aLong);
}
