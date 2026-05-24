package net.ourdailytech.rest.serviceTests;

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
        categoryId,parentId,description,url
        1101,11,"LESS,LESS CDN",http://cdnjs.cloudflare.com/ajax/libs/less.js/3.9.0/less.min.js
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
}
