package net.ourdailytech.rest.serviceTests;

import net.ourdailytech.rest.exception.PostApiException;
import net.ourdailytech.rest.mapper.NewsMapper;
import net.ourdailytech.rest.models.Category;
import net.ourdailytech.rest.models.News;
import net.ourdailytech.rest.models.User;
import net.ourdailytech.rest.models.dto.NewsDto;
import net.ourdailytech.rest.repositories.CategoryRepository;
import net.ourdailytech.rest.repositories.NewsRepository;
import net.ourdailytech.rest.repositories.UsersRepository;
import net.ourdailytech.rest.service.NewsServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.io.ByteArrayInputStream;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class NewsServiceImplTest {

  @Mock
  private NewsRepository newsRepository;

  @Mock
  private NewsMapper newsMapper;

  @Mock
  private CategoryRepository categoryRepository;

  @Mock
  private UsersRepository usersRepository;

  private NewsServiceImpl newsService;

  @BeforeEach
  void setUp() {
    newsService = new NewsServiceImpl(newsRepository, newsMapper, categoryRepository, usersRepository);
  }

  @Test
  void createNewsFromCsvSavesQuotedDescriptionAsTitle() {
    String csv = """
        url,description,categoryId
        http://cdnjs.cloudflare.com/ajax/libs/less.js/3.9.0/less.min.js,"LESS,LESS CDN",1101
        """;
    User user = new User();
    user.setEmail("testuser@example.com");
    Category developer = new Category();
    developer.setId(1101L);
    NewsDto savedDto = NewsDto.builder()
        .id(50L)
        .title("LESS,LESS CDN")
        .url("http://cdnjs.cloudflare.com/ajax/libs/less.js/3.9.0/less.min.js")
        .categoryId(1101L)
        .build();

    when(usersRepository.findByEmail("testuser@example.com")).thenReturn(Optional.of(user));
    when(categoryRepository.findById(1101L)).thenReturn(Optional.of(developer));
    when(newsRepository.save(any(News.class))).thenAnswer(invocation -> invocation.getArgument(0));
    when(newsMapper.toDto(any(News.class))).thenReturn(savedDto);

    List<NewsDto> created = newsService.createNewsFromCsv(
        new ByteArrayInputStream(csv.getBytes(StandardCharsets.UTF_8)),
        "testuser@example.com"
    );

    ArgumentCaptor<News> newsCaptor = ArgumentCaptor.forClass(News.class);
    verify(newsRepository).save(newsCaptor.capture());
    News saved = newsCaptor.getValue();

    assertEquals(1, created.size());
    assertEquals("LESS,LESS CDN", saved.getTitle());
    assertEquals(1101L, saved.getCategory().getId());
    assertEquals(user, saved.getUser());
    assertEquals(Boolean.TRUE, saved.getPublicLink());
    assertNotNull(saved.getNormalizedUrlHash());
  }

  @Test
  void createNewsFromCsvRequiresOnlyUrl() {
    String csv = """
        url
        https://example.com/resource
        """;
    User user = new User();
    user.setEmail("testuser@example.com");
    Category developer = new Category();
    developer.setId(1101L);
    NewsDto savedDto = NewsDto.builder()
        .id(51L)
        .title("example.com/resource")
        .url("https://example.com/resource")
        .categoryId(1101L)
        .build();

    when(usersRepository.findByEmail("testuser@example.com")).thenReturn(Optional.of(user));
    when(categoryRepository.findById(1101L)).thenReturn(Optional.of(developer));
    when(newsRepository.save(any(News.class))).thenAnswer(invocation -> invocation.getArgument(0));
    when(newsMapper.toDto(any(News.class))).thenReturn(savedDto);

    List<NewsDto> created = newsService.createNewsFromCsv(
        new ByteArrayInputStream(csv.getBytes(StandardCharsets.UTF_8)),
        "testuser@example.com"
    );

    ArgumentCaptor<News> newsCaptor = ArgumentCaptor.forClass(News.class);
    verify(newsRepository).save(newsCaptor.capture());
    News saved = newsCaptor.getValue();

    assertEquals(1, created.size());
    assertEquals("https://example.com/resource", saved.getUrl());
    assertEquals("example.com/resource", saved.getTitle());
    assertEquals(1101L, saved.getCategory().getId());
    assertEquals(user, saved.getUser());
    assertEquals(Boolean.TRUE, saved.getPublicLink());
    assertNotNull(saved.getNormalizedUrlHash());
  }

  @Test
  void createNewsFromCsvAllowsMissingDescriptionWithCategoryId() {
    String csv = """
        url,description,categoryId
        https://example.com/resource,,1101
        """;
    User user = new User();
    user.setEmail("testuser@example.com");
    Category developer = new Category();
    developer.setId(1101L);
    NewsDto savedDto = NewsDto.builder()
        .id(53L)
        .url("https://example.com/resource")
        .categoryId(1101L)
        .build();

    when(usersRepository.findByEmail("testuser@example.com")).thenReturn(Optional.of(user));
    when(categoryRepository.findById(1101L)).thenReturn(Optional.of(developer));
    when(newsRepository.save(any(News.class))).thenAnswer(invocation -> invocation.getArgument(0));
    when(newsMapper.toDto(any(News.class))).thenReturn(savedDto);

    List<NewsDto> created = newsService.createNewsFromCsv(
        new ByteArrayInputStream(csv.getBytes(StandardCharsets.UTF_8)),
        "testuser@example.com"
    );

    ArgumentCaptor<News> newsCaptor = ArgumentCaptor.forClass(News.class);
    verify(newsRepository).save(newsCaptor.capture());
    News saved = newsCaptor.getValue();

    assertEquals(1, created.size());
    assertEquals("https://example.com/resource", saved.getUrl());
    assertEquals("example.com/resource", saved.getTitle());
    assertEquals(1101L, saved.getCategory().getId());
  }

  @Test
  void createNewsFromCsvRejectsParentIdColumn() {
    String csv = """
        url,description,categoryId,parentId
        https://example.com/resource,Example Resource,1101,11
        """;
    User user = new User();
    user.setEmail("testuser@example.com");

    when(usersRepository.findByEmail("testuser@example.com")).thenReturn(Optional.of(user));

    PostApiException exception = assertThrows(PostApiException.class, () -> newsService.createNewsFromCsv(
        new ByteArrayInputStream(csv.getBytes(StandardCharsets.UTF_8)),
        "testuser@example.com"
    ));

    assertEquals("CSV header parentId is not supported. Use url,description,categoryId", exception.getMessage());
  }

}
