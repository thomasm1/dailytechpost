// src/test/java/net/ourdailytech/rest/service/BooksServiceImplIntegrationTest.java
package net.ourdailytech.rest.service;

import net.ourdailytech.rest.exception.ResourceNotFoundException;
import net.ourdailytech.rest.mapper.BookMapper;
import net.ourdailytech.rest.models.Book;
import net.ourdailytech.rest.models.dto.BookDto;
import net.ourdailytech.rest.repositories.BooksRepository;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;

@SpringBootTest
@AutoConfigureTestDatabase
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
class BooksServiceImplIntegrationTest {

    @Autowired
    private BooksService booksService;

    @Autowired
    private BooksRepository booksRepository;

    @MockBean
    private BookMapper bookMapper;

    @Test
    void getAllBooks_success() {
        Book book1 = new Book();
        book1.setId(1L);
        book1.setTitle("Book 1");
        book1.setAuthors("Author 1");

        Book book2 = new Book();
        book2.setId(2L);
        book2.setTitle("Book 2");
        book2.setAuthors("Author 2");

        booksRepository.save(book1);
        booksRepository.save(book2);

        Mockito.when(bookMapper.toDto(book1)).thenReturn(new BookDto(1L, "Book 1", "Author 1"));
        Mockito.when(bookMapper.toDto(book2)).thenReturn(new BookDto(2L, "Book 2", "Author 2"));

        List<BookDto> books = booksService.getAllBooks();
        assertThat(books).hasSize(2);
        assertThat(books.get(0).getTitle()).isEqualTo("Book 1");
        assertThat(books.get(1).getTitle()).isEqualTo("Book 2");
    }

    @Test
    void updateBook_success() {
        Book existingBook = new Book();
        existingBook.setId(1L);
        existingBook.setTitle("Old Title");
        existingBook.setAuthors("Old Author");

        booksRepository.save(existingBook);

        BookDto updatedDto = new BookDto(1L, "New Title", "New Authors");
        Book updatedBook = new Book();
        updatedBook.setId(1L);
        updatedBook.setTitle("New Title");
        updatedBook.setAuthors("New Authors");

        Mockito.when(bookMapper.partialUpdate(updatedDto, existingBook)).thenReturn(updatedBook);
        Mockito.when(bookMapper.toDto(updatedBook)).thenReturn(updatedDto);

        Optional<BookDto> result = booksService.updateBook(updatedDto);
        assertThat(result).isPresent();
        assertThat(result.get().getTitle()).isEqualTo("New Title");
    }

    @Test
    void deleteBook_success() {
        Book book = new Book();
        book.setId(1L);
        book.setTitle("Test Book");
        book.setAuthors("Test Authors");

        booksRepository.save(book);

        boolean deleted = booksService.deleteBook(1L);
        assertThat(deleted).isTrue();
        assertThat(booksRepository.existsById(1L)).isFalse();
    }

    @Test
    void deleteBook_notFound() {
        assertThrows(ResourceNotFoundException.class, () -> booksService.deleteBook(1L));
    }
}