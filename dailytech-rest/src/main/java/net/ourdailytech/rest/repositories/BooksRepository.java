package net.ourdailytech.rest.repositories;

import net.ourdailytech.rest.models.Book;
import org.springframework.data.jpa.repository.JpaRepository;

//@RepositoryRestResource( collectionResourceRel = "book", path = "book")
public interface BooksRepository extends JpaRepository<Book, Long> {

}