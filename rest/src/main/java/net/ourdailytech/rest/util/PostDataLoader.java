package net.ourdailytech.rest.util;

import lombok.extern.slf4j.Slf4j;
import net.ourdailytech.rest.mapper.PostEntityMapper;
import net.ourdailytech.rest.models.PostEntity;
import net.ourdailytech.rest.models.dto.PostEntityDto;
import net.ourdailytech.rest.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.github.javafaker.Faker;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Configuration
public class PostDataLoader {

    private static final Faker faker = new Faker();
    @Autowired
    private PostRepository postRepository;
    @Autowired
    private PostEntityMapper postEntityMapper;

    @Bean
    public ApplicationRunner loadPosts() {
        return args -> {
            List<PostEntityDto> postDtos = generateRandomPosts();

            log.info("***** Generated Example Posts *****");
            postDtos.forEach(post -> log.info("Title: {}, Author: {}, Date: {}", post.getTitle(), post.getAuthor(), post.getDate()));

            List<PostEntity> posts =  postDtos.stream().map(post -> postEntityMapper.toEntity(post)).toList();
            postRepository.saveAll(posts);
            log.info("Saved {} example posts.", posts.size());
        };
    }

    private List<PostEntityDto> generateRandomPosts() {
        List<PostEntityDto> posts = new ArrayList<>();

        for (int i = 1; i <= 10; i++) {
            posts.add(PostEntityDto.builder()
                    .id(i)
                    .did("10-" + (10 + i) + "-18")
                    .date("October " + (10 + i) + ", 2018")
                    .author("by Thomas Maestas")
                    .monthOrder("October")
                    .cat3(faker.book().genre()) // Random category
                    .title(faker.book().title()) // Random book title
                    .post("<p class='firstparagraph'>" + faker.lorem().paragraph() + "</p>")
                    .blogcite("<p class='cite'><a href='" + faker.internet().url() + "'>Source</a></p>")
                    .username(faker.internet().emailAddress())
                    .categoryId((long) faker.number().numberBetween(1, 5))
                    .build());
        }

        return posts;
    }
}

