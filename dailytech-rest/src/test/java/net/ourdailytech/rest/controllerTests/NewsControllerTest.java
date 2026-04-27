                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          package net.ourdailytech.rest.controllerTests;

import com.fasterxml.jackson.databind.ObjectMapper;
import net.ourdailytech.rest.controllers.NewsController;
import net.ourdailytech.rest.models.dto.NewsDto;
import net.ourdailytech.rest.service.NewsServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
class NewsControllerTest {

  private MockMvc mockMvc;
  private ObjectMapper objectMapper;

  @Mock
  private NewsServiceImpl newsServiceImpl;

  @InjectMocks
  private NewsController newsController;

  @BeforeEach
  void setUp() {
    mockMvc = MockMvcBuilders.standaloneSetup(newsController).build();
    objectMapper = new ObjectMapper();
  }

  private NewsDto getNewsDto() {
    return NewsDto.builder()
        .id(1L)
        .title("Test News")
        .url("http://example.com")
        .categoryId(1L)
        .build();
  }

  @Test
  void testAddNews_ShouldReturnCreated() throws Exception {
    NewsDto newsDto = getNewsDto();
    when(newsServiceImpl.createNews(any(NewsDto.class), any(String.class))).thenReturn(newsDto);

    UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(
        "testuser",
        "N/A",
        List.of(new SimpleGrantedAuthority("ROLE_USER"))
    );

    mockMvc.perform(post("/api/news")
            .principal(auth)
            .contentType(MediaType.APPLICATION_JSON)
            .content(objectMapper.writeValueAsString(newsDto)))
        .andExpect(status().isCreated())
        .andExpect(jsonPath("$.id").value(1L))
        .andExpect(jsonPath("$.title").value("Test News"));
  }

  @Test
  void testGetNews_ShouldReturnOk() throws Exception {
    NewsDto newsDto = getNewsDto();
    when(newsServiceImpl.getNews(1L)).thenReturn(newsDto);

    mockMvc.perform(get("/api/news/1"))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.id").value(1L))
        .andExpect(jsonPath("$.title").value("Test News"));
  }

  @Test
  void testGetNewsList_ShouldReturnOk() throws Exception {
    NewsDto newsDto = getNewsDto();
    when(newsServiceImpl.getAllNews()).thenReturn(List.of(newsDto));

    mockMvc.perform(get("/api/news"))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$[0].id").value(1L));
  }

  @Test
  void testGetPublicNewsByCategory_ShouldReturnOk() throws Exception {
    NewsDto newsDto = getNewsDto();
    when(newsServiceImpl.getAllPublicNewsByCategory(1L)).thenReturn(List.of(newsDto));

    mockMvc.perform(get("/api/news/category/public/1"))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$[0].id").value(1L));
  }

  @Test
  void testUpdateNews_ShouldReturnOk() throws Exception {
    NewsDto newsDto = getNewsDto();
    when(newsServiceImpl.updateNews(any(NewsDto.class), any(String.class), any(Boolean.class))).thenReturn(newsDto);

    UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(
        "testuser",
        "N/A",
        List.of(
            new SimpleGrantedAuthority("ROLE_ADMIN"),
            new SimpleGrantedAuthority("ROLE_USER")
        )
    );

    mockMvc.perform(put("/api/news")
            .principal(auth)
            .param("id", "1")
            .contentType(MediaType.APPLICATION_JSON)
            .content(objectMapper.writeValueAsString(newsDto)))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.id").value(1L));
  }

  @Test
  void testDeleteNews_ShouldReturnOk() throws Exception {
    when(newsServiceImpl.deleteNews(1L)).thenReturn(true);

    mockMvc.perform(delete("/api/news/1"))
        .andExpect(status().isOk());
  }
}

