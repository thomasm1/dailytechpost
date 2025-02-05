package net.ourdailytech.rest.util;

import lombok.extern.slf4j.Slf4j;
import net.ourdailytech.rest.mapper.CommentMapper;
import net.ourdailytech.rest.mapper.PostEntityMapper;
import net.ourdailytech.rest.mapper.UserMapper;
import net.ourdailytech.rest.models.Comment;
import net.ourdailytech.rest.models.PostEntity;
import net.ourdailytech.rest.models.Role;
import net.ourdailytech.rest.models.User;
import net.ourdailytech.rest.models.dto.CommentDto;
import net.ourdailytech.rest.models.dto.PostEntityDto;
import net.ourdailytech.rest.models.dto.RegisterDto;
import net.ourdailytech.rest.models.dto.UserDto;
import net.ourdailytech.rest.repositories.CommentsRepository;
import net.ourdailytech.rest.repositories.PostRepository;
import net.ourdailytech.rest.repositories.RoleRepository;
import net.ourdailytech.rest.repositories.UsersRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.github.javafaker.Faker;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Slf4j
@Configuration
public class PostDataLoader {
    private static final Logger log = LoggerFactory.getLogger(PostDataLoader.class);

    private static final Faker faker = new Faker();

    private BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
    private final RoleRepository rolesRepository;
    private final UsersRepository usersRepository;
    private final PostRepository postRepository;
    private final PostEntityMapper postEntityMapper;
    private final CommentsRepository commentsRepository;
    private final CommentMapper commentMapper;
    private final UserMapper userMapper;

    Set<Role> roles;
    List<RegisterDto> registerDtos;
    List<UserDto> userDtos;
    List<PostEntityDto> postEntityDtos;
    List<CommentDto> commentDtos;

    public PostDataLoader(RoleRepository rolesRepository, PostRepository postRepository, PostEntityMapper postEntityMapper, CommentsRepository commentsRepository, CommentMapper commentMapper, UserMapper userMapper, UsersRepository usersRepository) {
        this.rolesRepository = rolesRepository;
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
            loadRoles();
            loadUsers();
            loadPosts();
            loadComments();
        };
    }

    private void loadRoles() {
        roles = Set.of(
                new Role(1, "ROLE_USER"),
                new Role(2, "ROLE_ADMIN")
        );
        rolesRepository.saveAll(roles);
    }

    public void loadUsers() {
        registerDtos = new ArrayList<>();

        List<UserDto> newUserDtos = generateRandomUsers(registerDtos);

        log.info("***** Generated Example Users *****");
        log.info("userDtos COUNT______________: {}", newUserDtos.size());
        List<User> users =  newUserDtos.stream().map(user -> userMapper.toEntity(user)).toList();
        usersRepository.saveAll(users);
        log.info("Saved {} example posts.", users.size());
    }
    public void loadPosts() {
        postEntityDtos = new ArrayList<>();
        List<PostEntityDto> newPostDtos = generateRandomPosts(postEntityDtos);

        log.info("***** Generated Example Posts *****");
        postEntityDtos.forEach(post -> log.info("Title: {}, Author: {}, Date: {}", post.getTitle(), post.getAuthor(), post.getDate()));
        List<PostEntity> posts =  newPostDtos.stream().map(post -> postEntityMapper.toEntity(post)).toList();
        postRepository.saveAll(posts);
        log.info("Saved {} example posts.", posts.size());
    }

    public void loadComments() {
            commentDtos = new ArrayList<>();
            List<CommentDto>  newCommentDtos = generateRandomComments(commentDtos);

            List<PostEntity> posts = (List<PostEntity>) postRepository.findAll();

            log.info("***** Generated Example Posts *****");
        newCommentDtos.forEach(cd -> log.info("Email: {}, Name: {}, Body: {}", cd.getEmail(), cd.getName(), cd.getBody()));
            List<Comment> comments =  newCommentDtos.stream().map(commentDto -> commentMapper.toEntity(commentDto)).toList();
            for (int i = 0; i < comments.size(); i++) {
                comments.get(i).setPost(commentDtos.get(i).getPostId() != 0 ? posts.get((int) (commentDtos.get(i).getPostId() - 1)) : null);
            }
            commentsRepository.saveAll(comments);
            log.info("Saved {} example comments.", comments.size());
    }
    private List<UserDto> generateRandomUsers(List<RegisterDto> registerDtos) {
        userDtos = new ArrayList<>();
        for (int i = 0; i<10; i++) {
            registerDtos.add(RegisterDto.builder()
                    .email(faker.internet().emailAddress())
                    .password(bCryptPasswordEncoder.encode(faker.internet().password()))
                    .build());
        }
        for (int i = 1; i <= 10; i++) {
            userDtos.add(UserDto.builder()
                    .id(String.valueOf(i))
                    .userId(i)
                    .email(registerDtos.get(i-1).getEmail())
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
        for (int i= 0;i < 10; i++) {
            userDtos.get(i).setUsername(userDtos.get(i).getEmail());
        }
        return userDtos;
    }
    private List<PostEntityDto> generateRandomPosts(List<PostEntityDto> postEntityDtos) {


        for (int i = 1; i <=10; i++) {
            postEntityDtos.add(PostEntityDto.builder()
                    .id(i)
                    .did("10-" + (10 + i) + "-18")
                    .date("October " + (10 + i) + ", 2018")
                    .author("by Thomas Maestas")
                    .monthOrder("October")
                    .cat3(faker.book().genre()) // Random category
                    .title(faker.book().title()) // Random book title
                    .post("<p class='firstparagraph'>" + faker.lorem().paragraph() + "</p>")
                    .blogcite("<p class='cite'><a href='" + faker.internet().url() + "'>Source</a></p>")
                    .username(userDtos.get(i-1).getUsername())
                    .categoryId(1L)
                    .build());
        }
        return postEntityDtos;
    }

    private List<CommentDto> generateRandomComments(List<CommentDto> commentDtos) {

        for (int i = 1; i < postEntityDtos.size() ; i++) {
            commentDtos.add(CommentDto.builder()
                    .id(i)
                    .name(faker.name().fullName())
                    .email(userDtos.get(i-1).getUsername())
                    .body(faker.lorem().paragraph())
//                    .postId(generateRandomPosts().get(i).getId())
                    .postId(i)
                    .build());
        }
        return commentDtos;
    }
}

