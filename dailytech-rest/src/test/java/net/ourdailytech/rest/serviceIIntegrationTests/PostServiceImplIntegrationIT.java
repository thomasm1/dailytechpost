// src/test/java/net/ourdailytech/rest/serviceTests/PostServiceImplIntegrationIT.java
package net.ourdailytech.rest.serviceTests;

import net.ourdailytech.rest.models.Category;
import net.ourdailytech.rest.models.dto.PostEntityDto;
import net.ourdailytech.rest.repositories.CategoryRepository;
import net.ourdailytech.rest.repositories.PostRepository;
import net.ourdailytech.rest.service.PostService;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Disabled;

@Disabled
@SpringBootTest
@AutoConfigureTestDatabase
@Transactional
public class PostServiceImplIntegrationIT {

    @Autowired
    private PostService postService;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private PostRepository postRepository;

    private Category category;

    @BeforeEach
    void setup() {
        category = new Category();
        category.setName("TestCategory");
        category = categoryRepository.save(category);
    }

    private PostEntityDto getPostEntityDto() {
        return PostEntityDto.builder()
                .author("thomas")
                .post("post content")
                .did("did123")
                .cat3("cat3")
                .blogcite("blogcite")
                .email("email@example.com")
                .categoryId(category.getId())
                .build();
    }

    @Test
    void testCreateAndGetPost() {
        PostEntityDto postDto = getPostEntityDto();
        PostEntityDto saved = postService.createPost(postDto);
        assertNotNull(saved.getId());

        Optional<PostEntityDto> found = postService.getPostById(saved.getId());
        assertTrue(found.isPresent());
        assertEquals("thomas", found.get().getAuthor());
    }

    @Test
    void testUpdatePost() {
        PostEntityDto postDto = postService.createPost(getPostEntityDto());
        postDto.setPost("updated content");
        PostEntityDto updated = postService.updatePost(postDto, postDto.getId());
        assertEquals("updated content", updated.getPost());
    }

    @Test
    void testDeletePost() {
        PostEntityDto postDto = postService.createPost(getPostEntityDto());
        boolean deleted = postService.deletePostById(postDto.getId());
        assertTrue(deleted);
        Optional<PostEntityDto> found = postService.getPostById(postDto.getId());
        assertFalse(found.isPresent());
    }
}