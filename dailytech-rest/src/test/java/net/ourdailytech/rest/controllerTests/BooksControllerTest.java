package net.ourdailytech.rest.controllerTests;

import net.ourdailytech.rest.controllers.BooksController;
import net.ourdailytech.rest.models.dto.BookDto;
import net.ourdailytech.rest.service.BooksService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
 import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(BooksController.class)
class BooksControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private BooksService booksService;

    private BookDto bookDto;

    @BeforeEach
    void setUp() {
        bookDto = new BookDto();
        bookDto.setId(1L);
        bookDto.setTitle("Test Book");
        bookDto.setAuthor("Test Author");
    }

    @Test
    void testGetAllBooks() throws Exception {
        Mockito.when(booksService.getAllBooks()).thenReturn(Arrays.asList(bookDto));

        mockMvc.perform(get("/api/books"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].id").value(bookDto.getId()))
                .andExpect(jsonPath("$[0].title").value(bookDto.getTitle()))
                .andExpect(jsonPath("$[0].author").value(bookDto.getAuthor()));
    }

    @Test
    void testGetBookById() throws Exception {
        Mockito.when(booksService.getBook(1L)).thenReturn(Optional.of(bookDto));

        mockMvc.perform(get("/api/books/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(bookDto.getId()))
                .andExpect(jsonPath("$.title").value(bookDto.getTitle()))
                .andExpect(jsonPath("$.author").value(bookDto.getAuthor()));
    }

    @Test
    void testCreateBook() throws Exception {
        Mockito.when(booksService.createBook(any(BookDto.class))).thenReturn(bookDto);

        mockMvc.perform(post("/api/books")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"title\":\"Test Book\",\"author\":\"Test Author\"}"))
                .andExpect(status().isCreated())
                .andExpect(header().string("Location", "/api/books/1"))
                .andExpect(jsonPath("$.id").value(bookDto.getId()))
                .andExpect(jsonPath("$.title").value(bookDto.getTitle()))
                .andExpect(jsonPath("$.author").value(bookDto.getAuthor()));
    }

    @Test
    void testUpdateBook() throws Exception {
        Mockito.when(booksService.updateBook(any(BookDto.class))).thenReturn(Optional.of(bookDto));

        mockMvc.perform(put("/api/books")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"id\":1,\"title\":\"Updated Book\",\"author\":\"Updated Author\"}"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(bookDto.getId()))
                .andExpect(jsonPath("$.title").value(bookDto.getTitle()))
                .andExpect(jsonPath("$.author").value(bookDto.getAuthor()));
    }

    @Test
    void testDeleteBook() throws Exception {
        Mockito.when(booksService.getBook(1L)).thenReturn(Optional.of(bookDto));
        Mockito.when(booksService.deleteBook(1L)).thenReturn(true);

        mockMvc.perform(delete("/api/books/1"))
                .andExpect(status().isOk())
                .andExpect(content().string("true"));
    }
}