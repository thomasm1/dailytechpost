package net.ourdailytech.rest.serviceTests;

import net.ourdailytech.rest.exception.PostApiException;
import net.ourdailytech.rest.mapper.LinkMapper;
import net.ourdailytech.rest.models.Category;
import net.ourdailytech.rest.models.Link;
import net.ourdailytech.rest.models.User;
import net.ourdailytech.rest.models.dto.LinkDto;
import net.ourdailytech.rest.repositories.CategoryRepository;
import net.ourdailytech.rest.repositories.LinkRepository;
import net.ourdailytech.rest.repositories.UsersRepository;
import net.ourdailytech.rest.service.LinkCategorySuggestion;
import net.ourdailytech.rest.service.LinkClassificationService;
import net.ourdailytech.rest.service.LinkServiceImpl;
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
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class LinkServiceImplTest {

  @Mock
  private LinkRepository linkRepository;

  @Mock
  private LinkMapper linkMapper;

  @Mock
  private CategoryRepository categoryRepository;

  @Mock
  private UsersRepository usersRepository;

  @Mock
  private LinkClassificationService linkClassificationService;

  private LinkServiceImpl linkService;

  @BeforeEach
  void setUp() {
    linkService = new LinkServiceImpl(
        linkRepository,
        linkMapper,
        categoryRepository,
        usersRepository,
        linkClassificationService
    );
  }

  @Test
  void createLinksFromCsvSavesQuotedDescriptionAsTitle() {
    String csv = """
        url,description,categoryId
        http://cdnjs.cloudflare.com/ajax/libs/less.js/3.9.0/less.min.js,"LESS,LESS CDN",1101
        """;
    User user = new User();
    user.setEmail("testuser@example.com");
    Category developer = new Category();
    developer.setId(1101L);
    LinkDto savedDto = LinkDto.builder()
        .id(50L)
        .title("LESS,LESS CDN")
        .url("http://cdnjs.cloudflare.com/ajax/libs/less.js/3.9.0/less.min.js")
        .categoryId(1101L)
        .build();

    when(usersRepository.findByEmail("testuser@example.com")).thenReturn(Optional.of(user));
    when(categoryRepository.findById(1101L)).thenReturn(Optional.of(developer));
    when(linkRepository.save(any(Link.class))).thenAnswer(invocation -> invocation.getArgument(0));
    when(linkMapper.toDto(any(Link.class))).thenReturn(savedDto);

    List<LinkDto> created = linkService.createLinksFromCsv(
        new ByteArrayInputStream(csv.getBytes(StandardCharsets.UTF_8)),
        "testuser@example.com"
    );

    ArgumentCaptor<Link> linkCaptor = ArgumentCaptor.forClass(Link.class);
    verify(linkRepository).save(linkCaptor.capture());
    Link saved = linkCaptor.getValue();

    assertEquals(1, created.size());
    assertEquals("LESS,LESS CDN", saved.getTitle());
    assertEquals(1101L, saved.getCategory().getId());
    assertEquals(user, saved.getUser());
    assertEquals(Boolean.TRUE, saved.getPublicLink());
    assertNotNull(saved.getNormalizedUrlHash());
    verify(linkClassificationService, never()).suggestCategory(any(), any());
  }

  @Test
  void createLinksFromCsvRequiresOnlyUrl() {
    String csv = """
        url
        https://example.com/resource
        """;
    User user = new User();
    user.setEmail("testuser@example.com");
    Category developer = new Category();
    developer.setId(1101L);
    LinkDto savedDto = LinkDto.builder()
        .id(51L)
        .title("example.com/resource")
        .url("https://example.com/resource")
        .categoryId(1101L)
        .build();

    when(usersRepository.findByEmail("testuser@example.com")).thenReturn(Optional.of(user));
    when(linkClassificationService.suggestCategory("https://example.com/resource", "example.com/resource"))
        .thenReturn(new LinkCategorySuggestion(1101L, 0.0, "Default category"));
    when(categoryRepository.findById(1101L)).thenReturn(Optional.of(developer));
    when(linkRepository.save(any(Link.class))).thenAnswer(invocation -> invocation.getArgument(0));
    when(linkMapper.toDto(any(Link.class))).thenReturn(savedDto);

    List<LinkDto> created = linkService.createLinksFromCsv(
        new ByteArrayInputStream(csv.getBytes(StandardCharsets.UTF_8)),
        "testuser@example.com"
    );

    ArgumentCaptor<Link> linkCaptor = ArgumentCaptor.forClass(Link.class);
    verify(linkRepository).save(linkCaptor.capture());
    Link saved = linkCaptor.getValue();

    assertEquals(1, created.size());
    assertEquals("https://example.com/resource", saved.getUrl());
    assertEquals("example.com/resource", saved.getTitle());
    assertEquals(1101L, saved.getCategory().getId());
    assertEquals(user, saved.getUser());
    assertEquals(Boolean.TRUE, saved.getPublicLink());
    assertNotNull(saved.getNormalizedUrlHash());
  }

  @Test
  void createLinksFromCsvClassifiesMissingCategoryId() {
    String csv = """
        url,description
        https://www.kaggle.com/datasets/hojjatk/mnist-dataset,"MACHINE LEARNING DATA,MNIST Dataset"
        """;
    User user = new User();
    user.setEmail("testuser@example.com");
    Category sociology = new Category();
    sociology.setId(12L);
    LinkDto savedDto = LinkDto.builder()
        .id(52L)
        .title("MACHINE LEARNING DATA,MNIST Dataset")
        .url("https://www.kaggle.com/datasets/hojjatk/mnist-dataset")
        .categoryId(12L)
        .build();

    when(usersRepository.findByEmail("testuser@example.com")).thenReturn(Optional.of(user));
    when(linkClassificationService.suggestCategory(
        "https://www.kaggle.com/datasets/hojjatk/mnist-dataset",
        "MACHINE LEARNING DATA,MNIST Dataset"
    )).thenReturn(new LinkCategorySuggestion(12L, 0.85, "Matched sociology or data terms"));
    when(categoryRepository.findById(12L)).thenReturn(Optional.of(sociology));
    when(linkRepository.save(any(Link.class))).thenAnswer(invocation -> invocation.getArgument(0));
    when(linkMapper.toDto(any(Link.class))).thenReturn(savedDto);

    List<LinkDto> created = linkService.createLinksFromCsv(
        new ByteArrayInputStream(csv.getBytes(StandardCharsets.UTF_8)),
        "testuser@example.com"
    );

    ArgumentCaptor<Link> linkCaptor = ArgumentCaptor.forClass(Link.class);
    verify(linkRepository).save(linkCaptor.capture());
    Link saved = linkCaptor.getValue();

    assertEquals(1, created.size());
    assertEquals("MACHINE LEARNING DATA,MNIST Dataset", saved.getTitle());
    assertEquals(12L, saved.getCategory().getId());
  }

  @Test
  void createLinksFromCsvAllowsMissingDescriptionWithCategoryId() {
    String csv = """
        url,description,categoryId
        https://example.com/resource,,1101
        """;
    User user = new User();
    user.setEmail("testuser@example.com");
    Category developer = new Category();
    developer.setId(1101L);
    LinkDto savedDto = LinkDto.builder()
        .id(53L)
        .url("https://example.com/resource")
        .categoryId(1101L)
        .build();

    when(usersRepository.findByEmail("testuser@example.com")).thenReturn(Optional.of(user));
    when(categoryRepository.findById(1101L)).thenReturn(Optional.of(developer));
    when(linkRepository.save(any(Link.class))).thenAnswer(invocation -> invocation.getArgument(0));
    when(linkMapper.toDto(any(Link.class))).thenReturn(savedDto);

    List<LinkDto> created = linkService.createLinksFromCsv(
        new ByteArrayInputStream(csv.getBytes(StandardCharsets.UTF_8)),
        "testuser@example.com"
    );

    ArgumentCaptor<Link> linkCaptor = ArgumentCaptor.forClass(Link.class);
    verify(linkRepository).save(linkCaptor.capture());
    Link saved = linkCaptor.getValue();

    assertEquals(1, created.size());
    assertEquals("https://example.com/resource", saved.getUrl());
    assertEquals("example.com/resource", saved.getTitle());
    assertEquals(1101L, saved.getCategory().getId());
  }

  @Test
  void createLinksFromCsvRejectsParentIdColumn() {
    String csv = """
        url,description,categoryId,parentId
        https://example.com/resource,Example Resource,1101,11
        """;
    User user = new User();
    user.setEmail("testuser@example.com");

    when(usersRepository.findByEmail("testuser@example.com")).thenReturn(Optional.of(user));

    PostApiException exception = assertThrows(PostApiException.class, () -> linkService.createLinksFromCsv(
        new ByteArrayInputStream(csv.getBytes(StandardCharsets.UTF_8)),
        "testuser@example.com"
    ));

    assertEquals("CSV header parentId is not supported. Use url,description,categoryId", exception.getMessage());
  }

}
