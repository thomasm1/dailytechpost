package net.ourdailytech.rest.service;

import lombok.RequiredArgsConstructor;
import net.ourdailytech.rest.exception.ResourceNotFoundException;
import net.ourdailytech.rest.mapper.BookMapper;
import net.ourdailytech.rest.models.Book;
import net.ourdailytech.rest.models.dto.BookDto;
import net.ourdailytech.rest.repositories.BooksRepository;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * Service implementation for managing Book entities using DTOs and a mapper.
 * Provides CRUD operations with custom exception handling.
 */
@RequiredArgsConstructor
@Primary
@Service
public class BooksServiceImpl implements BooksService {

    private final BooksRepository booksRepository;
    private final BookMapper bookMapper;

    /**
     * Creates and saves a new Book from a DTO.
     *
     * @param bookDto the BookDto to create
     * @return the saved BookDto
     */
    @Override
    public BookDto createBook(BookDto bookDto) {
        Book book = bookMapper.toEntity(bookDto);
        Book saved = booksRepository.save(book);
        return bookMapper.toDto(saved);
    }

    /**
     * Retrieves a Book by its ID and returns as DTO.
     *
     * @param id the ID of the Book
     * @return an Optional containing the BookDto if found
     * @throws ResourceNotFoundException if the Book is not found
     */
    @Override
    public Optional<BookDto> getBook(long id) {
        Book book = booksRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Book", "id", String.valueOf(id)));
        return Optional.of(bookMapper.toDto(book));
    }

    /**
     * Retrieves all Books as DTOs.
     *
     * @return a list of all BookDto objects
     */
    @Override
    public List<BookDto> getAllBooks() {
        return booksRepository.findAll()
                .stream()
                .map(bookMapper::toDto)
                .collect(Collectors.toList());
    }

    /**
     * Updates an existing Book from a DTO.
     * Only non-null fields are updated.
     *
     * @param bookDto the BookDto with updated fields
     * @return an Optional containing the updated BookDto
     * @throws ResourceNotFoundException if the Book is not found
     */
    @Override
    public Optional<BookDto> updateBook(BookDto bookDto) {
        Book existingBook = booksRepository.findById(bookDto.getId())
                .orElseThrow(() -> new ResourceNotFoundException("Book", "id", String.valueOf(bookDto.getId())));
        Book updatedBook = bookMapper.partialUpdate(bookDto, existingBook);
        Book saved = booksRepository.save(updatedBook);
        return Optional.of(bookMapper.toDto(saved));
    }

    /**
     * Deletes a Book by its ID.
     *
     * @param id the ID of the Book to delete
     * @return true if deleted successfully
     * @throws ResourceNotFoundException if the Book is not found
     */
    @Override
    public boolean deleteBook(long id) {
        if (!booksRepository.existsById(id)) {
            throw new ResourceNotFoundException("Book", "id", String.valueOf(id));
        }
        booksRepository.deleteById(id);
        return true;
    }
}