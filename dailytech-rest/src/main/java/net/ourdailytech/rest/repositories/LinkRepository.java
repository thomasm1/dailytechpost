package net.ourdailytech.rest.repositories;

import java.util.List;
import java.util.Optional;
import net.ourdailytech.rest.models.Link;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "links", path = "links", itemResourceRel = "link")
public interface LinkRepository extends JpaRepository<Link, Long> {

  @Override
  Optional<Link> findById(Long aLong);

  List<Link> findByCategoryId(Long categoryId);

  List<Link> findByCategoryIdAndPublicLinkTrueOrCategoryIdAndPublicLinkIsNull(Long publicCategoryId, Long legacyCategoryId);

  List<Link> findByUserEmail(String email);

  List<Link> findByCategoryIdAndUserEmail(Long categoryId, String email);
}
