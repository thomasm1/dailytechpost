// src/test/java/net/ourdailytech/rest/repositoryTests/WeblinksRepositoryIT.java
package net.ourdailytech.rest.repositoryTests;

import net.ourdailytech.rest.models.PostEntity;
import net.ourdailytech.rest.models.Weblink;
import net.ourdailytech.rest.repositories.PostRepository;
import net.ourdailytech.rest.repositories.WeblinksRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.test.annotation.Commit;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Disabled;

@Disabled
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class WeblinksRepositoryIT {

    @Autowired
    private WeblinksRepository weblinksRepository;

    @Autowired
    private PostRepository postRepository;

    @Commit
    @Test
    void testSaveWeblink() {
        PostEntity post = new PostEntity();
        post.setTitle("Test Post");
        post.setPost("Test content");
        post.setDid("TEST001");
        post.setBlogcite("Test citation");
        post = postRepository.saveAndFlush(post);

        Weblink weblink = new Weblink();
        weblink.setTitle("Test Article Citation");
        weblink.setUrl("https://example.com/article");
        weblink.setHost("example.com");
        post.addWeblink(weblink);
        Weblink savedWeblink = weblinksRepository.saveAndFlush(weblink);

        assertNotNull(savedWeblink.getId());
        assertEquals("Test Article Citation", savedWeblink.getTitle());
        assertEquals("https://example.com/article", savedWeblink.getUrl());
        assertEquals(post.getId(), savedWeblink.getPostEntity().getId());

//        postRepository.delete(post);
    }

    @Test
    void testFindById() {
        PostEntity post = new PostEntity();
        post.setTitle("Test Post");
        post.setPost("Test content");
        post.setDid("TEST001");
        post.setBlogcite("Test citation");
        post = postRepository.saveAndFlush(post);

        Weblink weblink = new Weblink();
        weblink.setTitle("Test Article Citation");
        weblink.setUrl("https://example.com/article");
        weblink.setHost("example.com");
        post.addWeblink(weblink);
        Weblink savedWeblink = weblinksRepository.saveAndFlush(weblink);

        Optional<Weblink> found = weblinksRepository.findById(savedWeblink.getId());

        assertTrue(found.isPresent());
        assertEquals("Test Article Citation", found.get().getTitle());

        postRepository.delete(post);
    }

    @Test
    void testFindByPostEntity() {
        PostEntity post = new PostEntity();
        post.setTitle("Test Post");
        post.setPost("Test content");
        post.setDid("TEST001");
        post.setBlogcite("Test citation");
        post = postRepository.saveAndFlush(post);

        Weblink weblink = new Weblink();
        weblink.setTitle("Test Article Citation");
        weblink.setUrl("https://example.com/article");
        weblink.setHost("example.com");
        post.addWeblink(weblink);
        weblinksRepository.saveAndFlush(weblink);

        List<Weblink> weblinks = weblinksRepository.findByPostEntity(post);

        assertEquals(1, weblinks.size());
        assertEquals("Test Article Citation", weblinks.get(0).getTitle());
        assertEquals(post.getId(), weblinks.get(0).getPostEntity().getId());

        postRepository.delete(post);
    }

    @Test
    void testDeleteWeblink() {
        PostEntity post = new PostEntity();
        post.setTitle("Test Post");
        post.setPost("Test content");
        post.setDid("TEST001");
        post.setBlogcite("Test citation");
        post = postRepository.saveAndFlush(post);

        Weblink weblink = new Weblink();
        weblink.setTitle("Test Article Citation");
        weblink.setUrl("https://example.com/article");
        weblink.setHost("example.com");
        post.addWeblink(weblink);
        Weblink savedWeblink = weblinksRepository.saveAndFlush(weblink);
        Long weblinkId = savedWeblink.getId();

        weblinksRepository.delete(savedWeblink);

        Optional<Weblink> deleted = weblinksRepository.findById(weblinkId);
        assertFalse(deleted.isPresent());

        postRepository.delete(post);
    }

    @Test
    void testCascadeDeleteWithPost() {
        PostEntity post = new PostEntity();
        post.setTitle("Test Post");
        post.setPost("Test content");
        post.setDid("TEST001");
        post.setBlogcite("Test citation");
        post = postRepository.saveAndFlush(post);

        Weblink weblink = new Weblink();
        weblink.setTitle("Test Article Citation");
        weblink.setUrl("https://example.com/article");
        weblink.setHost("example.com");
        post.addWeblink(weblink);
        weblinksRepository.saveAndFlush(weblink);
        Long weblinkId = weblink.getId();

        postRepository.delete(post);

        Optional<Weblink> orphanedWeblink = weblinksRepository.findById(weblinkId);
        assertFalse(orphanedWeblink.isPresent(), "Weblink should be deleted when post is deleted");
    }
}