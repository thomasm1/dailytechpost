 package net.ourdailytech.rest.controllerIntegrationTests;

import com.fasterxml.jackson.databind.ObjectMapper;
import net.ourdailytech.rest.models.dto.PostEntityDto;
import net.ourdailytech.rest.models.dto.WeblinkDto;
import net.ourdailytech.rest.service.PostService;
import net.ourdailytech.rest.service.WeblinksService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.WebApplicationContext;

import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import org.junit.jupiter.api.Disabled;

@Disabled
@SpringBootTest
@ActiveProfiles("h2")
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Transactional
public class WeblinksControllerIntegrationIT {

    @Autowired
    private WebApplicationContext context;

    @Autowired
    private WeblinksService weblinksService;

    @Autowired
    private PostService postService;

    @Autowired
    private ObjectMapper objectMapper;

    private MockMvc mockMvc;
    private WeblinkDto testWeblinkDto;
    private PostEntityDto testPostDto;

    @BeforeEach
    void setUp() {
        mockMvc = MockMvcBuilders.webAppContextSetup(context)
            .apply(springSecurity())
            .build();

        testWeblinkDto = new WeblinkDto();
        testWeblinkDto.setTitle("Test Citation");
        testWeblinkDto.setUrl("https://example.com/article");
        testWeblinkDto.setHost("example.com");
        testWeblinkDto.setDownloadStatus("SUCCESS");

        testPostDto = PostEntityDto.builder()
            .title("Test Post")
            .post("Test post content")
            .did("TEST001")
            .author("Test Author")
            .blogcite("Test citation")
            .email("test@example.com")
            .categoryId(1L)
            .build();
    }

    @Test
    @WithMockUser(username = "testuser", roles = {"ADMIN"})
    void testCreateWeblink() throws Exception {
        String weblinkJson = objectMapper.writeValueAsString(testWeblinkDto);

        mockMvc.perform(post("/api/weblinks")
                .contentType(MediaType.APPLICATION_JSON)
                .content(weblinkJson))
            .andExpect(status().isCreated())
            .andExpect(jsonPath("$.title").value("Test Citation"))
            .andExpect(jsonPath("$.url").value("https://example.com/article"));
    }

    @Test
    void testGetAllWeblinks() throws Exception {
        weblinksService.createWeblinks(testWeblinkDto);

        mockMvc.perform(get("/api/weblinks"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$").isArray());
    }

    @Test
    @WithMockUser(username = "testuser", roles = {"ADMIN"})
    void testAddWeblinkToPost() throws Exception {
        PostEntityDto createdPost = postService.createPost(testPostDto);
        WeblinkDto createdWeblink = weblinksService.createWeblinks(testWeblinkDto);

        mockMvc.perform(post("/api/posts/{postId}/weblinks", createdPost.getId())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(testWeblinkDto)))
            .andExpect(status().isCreated())
            .andExpect(jsonPath("$.title").value("Test Citation"));
    }

    @Test
    @WithMockUser(username = "testuser", roles = {"ADMIN"})
    void testDeleteWeblink() throws Exception {
        WeblinkDto createdWeblink = weblinksService.createWeblinks(testWeblinkDto);

        mockMvc.perform(delete("/api/weblinks/{id}", createdWeblink.getId()))
            .andExpect(status().isOk());
    }
}