 package net.ourdailytech.rest.serviceTests;

import net.ourdailytech.rest.exception.ResourceNotFoundException;
import net.ourdailytech.rest.models.Book;
import net.ourdailytech.rest.models.dto.BookDto;

import net.ourdailytech.rest.repositories.BooksRepository;
import net.ourdailytech.rest.service.BooksServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class BooksServiceTest {

    @Mock
    private BooksRepository bookRepository;

    @InjectMocks
    private BooksServiceImpl booksService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }


    @Test
    void testCreateBook() {
        BookDto bookDto = new BookDto(1L, "Test Book", "Author");
        Book book = new Book(1L, "Test Book", "Author");

        when(bookRepository.save(any(Book.class))).thenReturn(book);

        BookDto createdBook = booksService.createBook(bookDto);

        assertNotNull(createdBook);
        assertEquals("Test Book", createdBook.getTitle());
        verify(bookRepository, times(1)).save(any(Book.class));
    }

    @Test
    void testGetBookById() {
        Book book = new Book(1L, "Test Book", "Author");
        when(bookRepository.findById(1L)).thenReturn(Optional.of(book));

        BookDto bookDto = booksService.getBook(1L);

        assertNotNull(bookDto);
        assertEquals("Test Book", bookDto.getTitle());
        verify(bookRepository, times(1)).findById(1L);
    }

    @Test
    void testGetBookById_NotFound() {
        when(bookRepository.findById(1L)).thenReturn(Optional.empty());

        assertThrows(ResourceNotFoundException.class, () -> booksService.getBook(1L));
        verify(bookRepository, times(1)).findById(1L);
    }

    @Test
    void testGetAllBooks() {
        List<Book> books = Arrays.asList(
                new Book(1L, "Book 1", "Author 1"),
                new Book(2L, "Book 2", "Author 2")
        );
        when(bookRepository.findAll()).thenReturn(books);

        List<BookDto> bookDtos = booksService.getAllBooks();

        assertEquals(2, bookDtos.size());
        verify(bookRepository, times(1)).findAll();
    }

    @Test
    void testUpdateBook() {
        Book book = new Book(1L, "Old Title", "Author");
        Book updatedBook = new Book(1L, "New Title", "Author");
        BookDto bookDto = new BookDto(1L, "New Title", "Author");

        when(bookRepository.findById(1L)).thenReturn(Optional.of(book));
        when(bookRepository.save(any(Book.class))).thenReturn(updatedBook);

        BookDto result = booksService.updateBook(bookDto);
        assertNotNull(result);
}