package xyz.cryptomaven.stream.ourdailytech.repositories;

import xyz.cryptomaven.stream.ourdailytech.models.News;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NewsRepository extends JpaRepository<News, Long> {
}
