package net.ourdailytech.rest.repositories;

import java.util.List;
import java.util.Optional;
import net.ourdailytech.rest.models.News;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "news", path = "news", itemResourceRel = "news")
public interface NewsRepository extends JpaRepository<News, Long> {

  @Override
  Optional<News> findById(Long aLong);

  List<News> findByCategoryId(Long categoryId);

  List<News> findByCategoryIdAndPublicLinkTrueOrCategoryIdAndPublicLinkIsNull(Long publicCategoryId, Long legacyCategoryId);

  List<News> findByUserEmail(String email);

  List<News> findByCategoryIdAndUserEmail(Long categoryId, String email);
}
