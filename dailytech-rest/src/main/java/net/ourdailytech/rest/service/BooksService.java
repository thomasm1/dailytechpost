package net.ourdailytech.rest.service;

import net.ourdailytech.rest.models.dto.BookDto;

import java.util.List;
import java.util.Optional;

public interface BooksService {
    BookDto createBook(BookDto bookDto);
    Optional<BookDto> getBook(long id);
    List<BookDto> getAllBooks();
    Optional<BookDto> updateBook(BookDto bookDto);
    boolean deleteBook(long id);
}