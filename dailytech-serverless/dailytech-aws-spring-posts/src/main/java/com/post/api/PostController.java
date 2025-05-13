package com.post.api;

import com.post.api.core.PostDTO;
import com.post.api.core.PostService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

@RestController
public class PostController {
    private final PostService postService;
    private final ApplicationProperties applicationProperties;

    private static final Logger LOG = LogManager.getLogger();

    public PostController(PostService postService, ApplicationConfiguration configuration) {
        this.postService = postService;
        this.applicationProperties = configuration.getApplicationProperties();
    }

    @PostMapping("/post")
    ResponseEntity<PostDTO> addPost(@Valid @RequestBody PostDTO post) {
        var createdPost = postService.CreatePost(post);

        return ResponseEntity.ok(createdPost);
    }

    @GetMapping("/post")
    ResponseEntity<Iterable<PostDTO>> listPosts() {
        LOG.info("Received request to retrieve posts");

        var postList = postService.ListPosts();

        LOG.info("Post listing successful");

        return ResponseEntity.ok(postList);
    }

    @GetMapping("/post/{id}")
    ResponseEntity<PostDTO> getPost(@PathVariable long id) {
        var post = postService.GetPost(id);

        return ResponseEntity.ok(post);
    }
}
