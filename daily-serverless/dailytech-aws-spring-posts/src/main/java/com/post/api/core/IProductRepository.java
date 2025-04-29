package com.post.api.core;

import org.springframework.data.repository.CrudRepository;

public interface IPostRepository extends CrudRepository<Post, Long> {
}
