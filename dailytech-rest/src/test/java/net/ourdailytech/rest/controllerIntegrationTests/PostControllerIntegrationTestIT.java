package net.ourdailytech.rest.controllerIntegrationTests;

import com.fasterxml.jackson.databind.ObjectMapper;
import net.ourdailytech.rest.models.dto.PostEntityDto;
import net.ourdailytech.rest.service.PostService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class PostControllerIntegrationTestIT {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private PostService postService;

    private PostEntityDto testPostDto;

    @BeforeEach
    void setUp() {
        testPostDto = PostEntityDto.builder()
            .author("TestAuthor")
            .post("TestContent")
            .title("TestTitle")
            .did("TEST001")
            .blogcite("TestCitation")
            .categoryId(1L)
            .build();
    }

    @Test
    void testCreatePost() throws Exception {
        String postJson = objectMapper.writeValueAsString(testPostDto);

        mockMvc.perform(post("/api/posts")
                .contentType(MediaType.APPLICATION_JSON)
                .content(postJson))
            .andExpect(status().isCreated())
            .andExpect(jsonPath("$.author").value("TestAuthor"))
            .andExpect(jsonPath("$.post").value("TestContent"));
    }

    @Test
    void testGetAllPosts() throws Exception {
        postService.createPost(testPostDto);

        mockMvc.perform(get("/api/posts"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.content").isArray());
    }

    @Test
    void testGetPostById() throws Exception {
        PostEntityDto createdPost = postService.createPost(testPostDto);

        mockMvc.perform(get("/api/posts/{id}", createdPost.getId()))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.author").value("TestAuthor"))
            .andExpect(jsonPath("$.post").value("TestContent"));
    }

    @Test
    void testUpdatePost() throws Exception {
        PostEntityDto createdPost = postService.createPost(testPostDto);
        createdPost.setAuthor("UpdatedAuthor");
        createdPost.setPost("UpdatedContent");

        String updatedJson = objectMapper.writeValueAsString(createdPost);

        mockMvc.perform(put("/api/posts/{id}", createdPost.getId())
                .contentType(MediaType.APPLICATION_JSON)
                .content(updatedJson))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.author").value("UpdatedAuthor"))
            .andExpect(jsonPath("$.post").value("UpdatedContent"));
    }

    @Test
    void testDeletePost() throws Exception {
        PostEntityDto createdPost = postService.createPost(testPostDto);

        mockMvc.perform(delete("/api/posts/{id}", createdPost.getId()))
            .andExpect(status().isOk())
            .andExpect(content().string("true"));
    }
}