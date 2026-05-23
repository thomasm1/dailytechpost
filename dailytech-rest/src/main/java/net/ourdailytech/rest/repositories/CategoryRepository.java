package net.ourdailytech.rest.repositories;

import net.ourdailytech.rest.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "categories", path = "categories", itemResourceRel = "category")
public interface CategoryRepository extends JpaRepository<Category, Long> {
  List<Category> findByParentIsNull();

  List<Category> findByParentId(Long parentId);
}
