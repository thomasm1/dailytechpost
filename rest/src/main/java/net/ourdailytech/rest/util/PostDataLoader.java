package net.ourdailytech.rest.util;

import lombok.extern.slf4j.Slf4j;
import net.ourdailytech.rest.mapper.CommentMapper;
import net.ourdailytech.rest.mapper.PostEntityMapper;
import net.ourdailytech.rest.mapper.UserMapper;
import net.ourdailytech.rest.models.Comment;
import net.ourdailytech.rest.models.PostEntity;
import net.ourdailytech.rest.models.User;
import net.ourdailytech.rest.models.dto.CommentDto;
import net.ourdailytech.rest.models.dto.PostEntityDto;
import net.ourdailytech.rest.models.dto.UserDto;
import net.ourdailytech.rest.repositories.CommentsRepository;
import net.ourdailytech.rest.repositories.PostRepository;
import net.ourdailytech.rest.repositories.UsersRepository;
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
    private final UsersRepository usersRepository;

    private PostRepository postRepository;

    private PostEntityMapper postEntityMapper;

    private CommentsRepository commentsRepository;

    private CommentMapper commentMapper;

    private UserMapper userMapper;

    public PostDataLoader(PostRepository postRepository, PostEntityMapper postEntityMapper, CommentsRepository commentsRepository, CommentMapper commentMapper, UserMapper userMapper, UsersRepository usersRepository) {
        this.postRepository = postRepository;
        this.postEntityMapper = postEntityMapper;
        this.commentsRepository = commentsRepository;
        this.commentMapper = commentMapper;
        this.userMapper = userMapper;
        this.usersRepository = usersRepository;
    }

    @Bean
    public ApplicationRunner runner() {
        return args -> {
            loadPosts();
            loadComments();
            loadUsers();
        };
    }

    public void loadUsers() {
        List<UserDto> userDtos = generateRandomUsers();

        log.info("***** Generated Example Users *****");
        userDtos.forEach(post -> log.info("userDtos: {}", userDtos.size()));
        List<User> users =  userDtos.stream().map(user -> userMapper.toEntity(user)).toList();
        usersRepository.saveAll(users);
        log.info("Saved {} example posts.", users.size());
    }
    public void loadPosts() {
        List<PostEntityDto> postDtos = generateRandomPosts();

        log.info("***** Generated Example Posts *****");
        postDtos.forEach(post -> log.info("Title: {}, Author: {}, Date: {}", post.getTitle(), post.getAuthor(), post.getDate()));
        List<PostEntity> posts =  postDtos.stream().map(post -> postEntityMapper.toEntity(post)).toList();
        postRepository.saveAll(posts);
        log.info("Saved {} example posts.", posts.size());
    }

    public void loadComments() {
            List<CommentDto> commentDtos = generateRandomComments();
            List<PostEntity> posts = (List<PostEntity>) postRepository.findAll();

            log.info("***** Generated Example Posts *****");
            commentDtos.forEach(cd -> log.info("Email: {}, Name: {}, Body: {}", cd.getEmail(), cd.getName(), cd.getBody()));
            List<Comment> comments =  commentDtos.stream().map(commentDto -> commentMapper.toEntity(commentDto)).toList();
            for (int i = 0; i < comments.size(); i++) {
                comments.get(i).setPost(commentDtos.get(i).getPostId() != 0 ? posts.get((int) (commentDtos.get(i).getPostId() - 1)) : null);
            }
            commentsRepository.saveAll(comments);
            log.info("Saved {} example comments.", comments.size());
    }
    private List<UserDto> generateRandomUsers() {
        List<UserDto> users = new ArrayList<>();

        for (int i = 1; i <= 10; i++) {
            users.add(UserDto.builder()
                    .id(String.valueOf(i))
                    .username(faker.internet().emailAddress())
                    .userId(i)
                    .email(faker.internet().emailAddress())
                    .firstName(faker.name().firstName())
                    .lastName(faker.name().lastName())
                    .userType(faker.number().numberBetween(1, 3))
                    .organizationCode("CD")
                    .cusUrl("http://www.dailytech.net/photoPath")
                    .dashboardCode("dashboardCd")
                    .isActive(1)
                    .contactType(1)
                    .build());
        }
        return users;
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
                    .categoryId(1L)
                    .build());
        }
        return posts;
    }

    private List<CommentDto> generateRandomComments() {
        List<CommentDto> comments = new ArrayList<>();

        for (int i = 1; i < 10; i++) {
            comments.add(CommentDto.builder()
                    .id(i)
                    .name(faker.name().fullName())
                    .email(faker.internet().emailAddress())
                    .body(faker.lorem().paragraph())
//                    .postId(generateRandomPosts().get(i).getId())
                    .postId(i)
                    .build());
        }
        return comments;
    }
}

