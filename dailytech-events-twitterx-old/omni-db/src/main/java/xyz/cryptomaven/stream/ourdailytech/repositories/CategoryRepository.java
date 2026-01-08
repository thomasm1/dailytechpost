package xyz.cryptomaven.stream.ourdailytech.repositories;

import xyz.cryptomaven.stream.ourdailytech.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
