package net.ourdailytech.rest.controllerIntegrationTests;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.user;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.List;
import net.ourdailytech.rest.models.dto.NewsDto;
import net.ourdailytech.rest.service.NewsServiceImpl;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;


//@ExtendWith(MockitoExtension.class)
//@WebMvcTest(NewsController.class)
@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("h2")
class NewsControllerIntegrationIT {

  @Autowired
  private MockMvc mockMvc;

  // LEGACY: Old approach with @Mock
  // @Mock
  // private NewsServiceImpl newsServiceImpl;

  // LEGACY: Old approach with @InjectMocks
  // @InjectMocks
  // private NewsController newsController;

  @MockBean
  private NewsServiceImpl newsServiceImpl;

  @Autowired
  private ObjectMapper objectMapper;

  // LEGACY: Old manual setup approach
  // private NewsDto newsDto;

  // LEGACY: Old @BeforeEach setup
  // @BeforeEach
  // void setUp() {
  //   mockMvc = MockMvcBuilders.standaloneSetup(newsController)
  //       .apply(springSecurity())
  //       .build();
  //   objectMapper = new ObjectMapper();
  //   newsDto = NewsDto.builder()
  //       .id(1L)
  //       .title("Test News")
  //       .url("http://example.com")
  //       .categoryId(1L)
  //       .build();
  // }

  private NewsDto getNewsDto() {
    return NewsDto.builder()
        .id(1L)
        .title("Test News")
        .url("http://example.com")
        .categoryId(1L)
        .build();
  }

@Disabled
  @Test
  // LEGACY: @WithMockUser — replaced by .with(user()) for Spring Security 6 compatibility
  void addNews_ShouldReturnCreated() throws Exception {
    NewsDto newsDto = getNewsDto();
    when(newsServiceImpl.createNews(any(NewsDto.class), any(String.class))).thenReturn(newsDto);

    mockMvc.perform(post("/api/news")
            .with(user("testuser").roles("USER"))
            .with(csrf())
            .contentType(MediaType.APPLICATION_JSON)
            .content(objectMapper.writeValueAsString(newsDto)))
        .andExpect(status().isCreated())
        .andExpect(jsonPath("$.id").value(1L))
        .andExpect(jsonPath("$.title").value("Test News"));
  }

  @Test
  void getNews_ShouldReturnOk() throws Exception {
    NewsDto newsDto = getNewsDto();
    when(newsServiceImpl.getNews(1L)).thenReturn(newsDto);

    mockMvc.perform(get("/api/news/1"))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.id").value(1L))
        .andExpect(jsonPath("$.title").value("Test News"));
  }

  @Test
  void getNewsList_ShouldReturnOk() throws Exception {
    NewsDto newsDto = getNewsDto();
    when(newsServiceImpl.getAllNews()).thenReturn(List.of(newsDto));

    mockMvc.perform(get("/api/news"))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$[0].id").value(1L));
  }

  @Disabled
  @Test
  // LEGACY: @WithMockUser(roles = {"ADMIN", "USER"}) — replaced by .with(user()) for Spring Security 6 compatibility
  void updateNews_ShouldReturnOk() throws Exception {
    NewsDto newsDto = getNewsDto();
    when(newsServiceImpl.updateNews(any(NewsDto.class), any(String.class), any(Boolean.class))).thenReturn(newsDto);

    mockMvc.perform(put("/api/news")
            .with(user("testuser").roles("ADMIN", "USER"))
            .with(csrf())
            .param("id", "1")
            .contentType(MediaType.APPLICATION_JSON)
            .content(objectMapper.writeValueAsString(newsDto)))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.id").value(1L));
  }

  @Disabled
  @Test
  // LEGACY: @WithMockUser(roles = {"ADMIN"}) — replaced by .with(user()) for Spring Security 6 compatibility
  void deleteNews_ShouldReturnOk() throws Exception {
    when(newsServiceImpl.deleteNews(1L)).thenReturn(true);

    mockMvc.perform(delete("/api/news/1")
            .with(user("testuser").roles("ADMIN"))
            .with(csrf()))
        .andExpect(status().isOk());
  }

}