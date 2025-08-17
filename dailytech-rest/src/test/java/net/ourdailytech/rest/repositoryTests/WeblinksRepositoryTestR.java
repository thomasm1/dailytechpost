// src/test/java/net/ourdailytech/rest/repositoryTests/WeblinksRepositoryTestR.java
package net.ourdailytech.rest.repositoryTests;

import net.ourdailytech.rest.models.PostEntity;
import net.ourdailytech.rest.models.Weblink;
import net.ourdailytech.rest.repositories.PostRepository;
import net.ourdailytech.rest.repositories.WeblinksRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@ActiveProfiles("h2")
public class WeblinksRepositoryTestR {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private WeblinksRepository weblinksRepository;

    @Autowired
    private PostRepository postRepository;

    private PostEntity testPost;
    private Weblink testWeblink;

    @BeforeEach
    void setUp() {
        testPost = new PostEntity();
        testPost.setTitle("Test Post");
        testPost.setPost("Test content");
        testPost.setDid("TEST001");
        testPost.setBlogcite("Test citation");
        testPost = entityManager.persistAndFlush(testPost);

        testWeblink = new Weblink();
        testWeblink.setTitle("Test Article Citation");
        testWeblink.setUrl("https://example.com/article");
        testWeblink.setHost("example.com");
        testWeblink.setPostEntity(testPost);
    }

    @Test
    void testSaveWeblink() {
        Weblink savedWeblink = weblinksRepository.save(testWeblink);

        assertNotNull(savedWeblink.getId());
        assertEquals("Test Article Citation", savedWeblink.getTitle());
        assertEquals("https://example.com/article", savedWeblink.getUrl());
        assertEquals(testPost.getId(), savedWeblink.getPostEntity().getId());
    }

    @Test
    void testFindById() {
        Weblink savedWeblink = entityManager.persistAndFlush(testWeblink);

        Optional<Weblink> found = weblinksRepository.findById(savedWeblink.getId());

        assertTrue(found.isPresent());
        assertEquals("Test Article Citation", found.get().getTitle());
    }

    @Test
    void testFindByPostEntity() {
        entityManager.persistAndFlush(testWeblink);

        List<Weblink> weblinks = weblinksRepository.findByPostEntity(testPost);

        assertEquals(1, weblinks.size());
        assertEquals("Test Article Citation", weblinks.get(0).getTitle());
        assertEquals(testPost.getId(), weblinks.get(0).getPostEntity().getId());
    }

    @Test
    void testDeleteWeblink() {
        Weblink savedWeblink = entityManager.persistAndFlush(testWeblink);
        Long weblinkId = savedWeblink.getId();

        weblinksRepository.delete(savedWeblink);
        entityManager.flush();

        Optional<Weblink> deleted = weblinksRepository.findById(weblinkId);
        assertFalse(deleted.isPresent());
    }

    @Test
    void testCascadeDeleteWithPost() {
        entityManager.persistAndFlush(testWeblink);
        Long weblinkId = testWeblink.getId();

        postRepository.delete(testPost);
        entityManager.flush();

        Optional<Weblink> orphanedWeblink = weblinksRepository.findById(weblinkId);
        assertFalse(orphanedWeblink.isPresent(), "Weblink should be deleted when post is deleted");
    }
}