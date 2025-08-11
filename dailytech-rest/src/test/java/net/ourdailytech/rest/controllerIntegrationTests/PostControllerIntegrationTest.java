package net.ourdailytech.rest.controllerIntegrationTests;

import com.fasterxml.jackson.databind.ObjectMapper;
import net.ourdailytech.rest.models.dto.PostEntityDto;
import net.ourdailytech.rest.models.dto.PostEntityResponse;
import net.ourdailytech.rest.service.PostService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class PostControllerIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private PostService postService;

    @Test
    void testGetAllPosts() throws Exception {
        Mockito.when(postService.getAllPosts()).thenReturn(Arrays.asList(
                PostEntityDto.builder().id(1L).author("Author1").post("Content1").build(),
                PostEntityDto.builder().id(2L).author("Author2").post("Content2").build()
        ));

        mockMvc.perform(get("/api/posts"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.size()").value(2))
                .andExpect(jsonPath("$[0].author").value("Author1"))
                .andExpect(jsonPath("$[1].author").value("Author2"));
    }

    @Test
    void testGetPostById() throws Exception {
        Mockito.when(postService.getPostById(1L)).thenReturn(Optional.of(
                PostEntityDto.builder().id(1L).author("Author1").post("Content1").build()
        ));

        mockMvc.perform(get("/api/posts/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.author").value("Author1"))
                .andExpect(jsonPath("$.post").value("Content1"));
    }

    @Test
    void testCreatePost() throws Exception {
        PostEntityDto postDto = PostEntityDto.builder().author("NewAuthor").post("NewContent").build();
        PostEntityDto savedPost = PostEntityDto.builder().id(1L).author("NewAuthor").post("NewContent").build();

        Mockito.when(postService.createPost(any(PostEntityDto.class))).thenReturn(savedPost);

        mockMvc.perform(post("/api/posts")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(postDto)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.author").value("NewAuthor"))
                .andExpect(jsonPath("$.post").value("NewContent"));
    }

    @Test
    void testUpdatePost() throws Exception {
        PostEntityDto postDto = PostEntityDto.builder().id(1L).author("UpdatedAuthor").post("UpdatedContent").build();

        Mockito.when(postService.updatePost(any(PostEntityDto.class), eq(1L))).thenReturn(postDto);

        mockMvc.perform(put("/api/posts/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(postDto)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.author").value("UpdatedAuthor"))
                .andExpect(jsonPath("$.post").value("UpdatedContent"));
    }

    @Test
    void testDeletePost() throws Exception {
        Mockito.when(postService.deletePostById(1L)).thenReturn(true);

        mockMvc.perform(delete("/api/posts/1"))
                .andExpect(status().isOk())
                .andExpect(content().string("true"));
    }
}