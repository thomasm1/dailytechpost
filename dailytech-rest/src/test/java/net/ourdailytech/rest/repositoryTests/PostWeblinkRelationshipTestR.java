// src/test/java/net/ourdailytech/rest/repositoryTests/PostWeblinkRelationshipTestR.java
package net.ourdailytech.rest.repositoryTests;

import net.ourdailytech.rest.models.PostEntity;
import net.ourdailytech.rest.models.Weblink;
import net.ourdailytech.rest.repositories.PostRepository;
import net.ourdailytech.rest.repositories.WeblinksRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.ActiveProfiles;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@ActiveProfiles("h2")
public class PostWeblinkRelationshipTestR {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private WeblinksRepository weblinksRepository;

    @Autowired
    private PostRepository postRepository;

    @Test
    void testPostWeblinkRelationship() {
        PostEntity post = new PostEntity();
        post.setTitle("Test Post");
        post.setPost("Test content");
        post.setDid("TEST001");
        post.setBlogcite("Test citation");
        post = entityManager.persistAndFlush(post);

        Weblink weblink = new Weblink();
        weblink.setTitle("Test Article Citation");
        weblink.setUrl("https://example.com/article");
        weblink.setHost("example.com");
        weblink.setPostEntity(post);
        weblink = entityManager.persistAndFlush(weblink);

        PostEntity foundPost = postRepository.findById(post.getId()).orElse(null);
        assertNotNull(foundPost);
        assertEquals(1, foundPost.getWeblinks().size());

        Weblink foundWeblink = foundPost.getWeblinks().iterator().next();
        assertEquals("Test Article Citation", foundWeblink.getTitle());
        assertEquals("https://example.com/article", foundWeblink.getUrl());
    }

    @Test
    void testCascadeDeleteWeblinksWithPost() {
        PostEntity post = new PostEntity();
        post.setTitle("Test Post");
        post.setPost("Test content");
        post.setDid("TEST001");
        post.setBlogcite("Test citation");
        post = entityManager.persistAndFlush(post);

        Weblink weblink = new Weblink();
        weblink.setTitle("Citation Link");
        weblink.setUrl("https://citation.com");
        weblink.setPostEntity(post);
        weblink = entityManager.persistAndFlush(weblink);

        Long weblinkId = weblink.getId();

        postRepository.delete(post);
        entityManager.flush();

        assertFalse(weblinksRepository.findById(weblinkId).isPresent());
    }
}