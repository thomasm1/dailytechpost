package com.post.api.core;

import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class PostService {
    private final IPostRepository postRepository;

    public PostService(IPostRepository postRepository){
        this.postRepository = postRepository;
    }

    public PostDTO CreatePost(PostDTO postDTO) {
        var post = new Post();
        post.setName(postDTO.getName());
        post.setPrice(postDTO.getPrice());

        var savedPost = this.postRepository.save(post);

        return savedPost.asDto();
    }

    public PostDTO GetPost(long postId) {
        var retrievedPost = this.postRepository.findById(postId);

        return retrievedPost.map(Post::asDto).orElse(null);

    }

    public Iterable<PostDTO> ListPosts() {
        var posts = this.postRepository.findAll();

        var postDtoList = new ArrayList<PostDTO>();

        var postIterator = posts.iterator();

        while (postIterator.hasNext())
        {
            postDtoList.add(postIterator.next().asDto());
        }

        return postDtoList;
    }
}