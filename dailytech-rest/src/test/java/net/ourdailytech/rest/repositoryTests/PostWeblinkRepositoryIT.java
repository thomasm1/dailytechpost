// src/test/java/net/ourdailytech/rest/repositoryTests/PostWeblinkRepositoryIT.java
package net.ourdailytech.rest.repositoryTests;

import net.ourdailytech.rest.models.PostEntity;
import net.ourdailytech.rest.models.Weblink;
import net.ourdailytech.rest.repositories.PostRepository;
import net.ourdailytech.rest.repositories.WeblinksRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Commit;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Disabled;

@Disabled
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class PostWeblinkRepositoryIT {

    @Autowired
    private WeblinksRepository weblinksRepository;

    @Autowired
    private PostRepository postRepository;

    @Commit
    @Test
    void testPostWeblinkRelationship() {
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
        post.addWeblink(weblink); // Use the helper method to set both sides
        weblink = weblinksRepository.saveAndFlush(weblink);

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
        post = postRepository.saveAndFlush(post);

        Weblink weblink = new Weblink();
        weblink.setTitle("Citation Link");
        weblink.setUrl("https://citation.com");
        post.addWeblink(weblink); // Use the helper method
        weblink = weblinksRepository.saveAndFlush(weblink);

        Long weblinkId = weblink.getId();

        postRepository.delete(post);

        assertFalse(weblinksRepository.findById(weblinkId).isPresent());
    }
}