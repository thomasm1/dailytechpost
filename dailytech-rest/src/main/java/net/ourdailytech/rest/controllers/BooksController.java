package net.ourdailytech.rest.controllers;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import net.ourdailytech.rest.exception.ResourceNotFoundException;
import net.ourdailytech.rest.models.dto.BookDto;
import net.ourdailytech.rest.service.BooksService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Tag(
        name = "CRUD REST APIs for Book Resource",
        description = "CRUD REST APIs - Create Book, Update Book, Get Book, Get All Books, Delete Book"
)
@CrossOrigin(origins = "*")
@RestController
@RequestMapping(BooksController.API_BOOKS)
public class BooksController {
    public static final String API_BOOKS = "/api/books";

    private final BooksService booksService;

    public BooksController(BooksService booksService) {
        this.booksService = booksService;
    }

    @Operation(
            summary = "Get All Books REST API",
            description = "Get All Books REST API is used to get all Books from the database"
    )
    @ApiResponse(
            responseCode = "200",
            description = "HTTP Status 200 SUCCESS"
    )
    @GetMapping({"", "/", "/list"})
    public ResponseEntity<List<BookDto>> getAllBooks() {
        List<BookDto> books;
        try {
            books = booksService.getAllBooks();
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(books, HttpStatus.OK);
    }

    @Operation(
            summary = "Get Book By ID REST API",
            description = "Get Book By ID REST API is used to get a single Book from the database"
    )
    @ApiResponse(
            responseCode = "200",
            description = "HTTP Status 200 SUCCESS"
    )
    @GetMapping("/{id}")
    public ResponseEntity<BookDto> getBook(@PathVariable("id") long id) {
        Optional<BookDto> book = booksService.getBook(id);
        if (book.isEmpty()) {
            throw new ResourceNotFoundException("Book " + id + " not found");
        }
        return new ResponseEntity<>(book.get(), HttpStatus.OK);
    }

    @Operation(
            summary = "Create Book REST API",
            description = "Create Book REST API is used to add a new Book to the database"
    )
    @ApiResponse(
            responseCode = "201",
            description = "HTTP Status CREATED"
    )
    @PostMapping(value = "", consumes = "application/json")
    public ResponseEntity<BookDto> createBook(@RequestBody BookDto bookDto) {
        BookDto savedBook = booksService.createBook(bookDto);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Location", API_BOOKS + "/" + savedBook.getId());
        return new ResponseEntity<>(savedBook, headers, HttpStatus.CREATED);
    }

    @Operation(
            summary = "Update Book REST API",
            description = "Update Book REST API is used to update an existing Book in the database"
    )
    @ApiResponse(
            responseCode = "200",
            description = "HTTP Status 200 SUCCESS"
    )
    @PutMapping(value = "", consumes = "application/json")
    public ResponseEntity<BookDto> updateBook(@RequestBody BookDto bookDto) {
        Optional<BookDto> updated = booksService.updateBook(bookDto);
        return updated.map(dto -> new ResponseEntity<>(dto, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @Operation(
            summary = "Delete Book By ID REST API",
            description = "Delete Book By ID REST API is used to delete a Book from the database"
    )
    @ApiResponse(
            responseCode = "200",
            description = "HTTP Status 200 SUCCESS"
    )
    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> deleteBook(@PathVariable("id") long id) {
        Optional<BookDto> book = booksService.getBook(id);
        if (book.isEmpty()) {
            throw new ResourceNotFoundException("Book " + id + " not found to delete");
        }
        boolean deleted = booksService.deleteBook(id);
        if (deleted) {
            return new ResponseEntity<>(true, HttpStatus.OK);
        }
        return new ResponseEntity<>(false, HttpStatus.NO_CONTENT);
    }
}