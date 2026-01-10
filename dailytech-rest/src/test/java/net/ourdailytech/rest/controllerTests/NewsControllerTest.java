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
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.*;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@ExtendWith(MockitoExtension.class)
class NewsControllerTest {

  private MockMvc mockMvc;

  @Mock
  private NewsServiceImpl newsServiceImpl;

  @InjectMocks
  private NewsController newsController;

  private ObjectMapper objectMapper;
  private NewsDto newsDto;

  @BeforeEach
  void setUp() {
    mockMvc = MockMvcBuilders.standaloneSetup(newsController).build();
    objectMapper = new ObjectMapper();
    newsDto = NewsDto.builder()
        .id(1L)
        .title("Test News")
        .url("http://example.com")
        .categoryId(1L)
        .build();
  }

  @Test
  @WithMockUser
  void addNews_ShouldReturnCreated() throws Exception {
    when(newsServiceImpl.createNews(any(NewsDto.class))).thenReturn(newsDto);

    mockMvc.perform(post("/api/news")
            .contentType(MediaType.APPLICATION_JSON)
            .content(objectMapper.writeValueAsString(newsDto)))
        .andExpect(status().isCreated())
        .andExpect(jsonPath("$.id").value(1L))
        .andExpect(jsonPath("$.title").value("Test News"));
  }

  @Test
  void getNews_ShouldReturnOk() throws Exception {
    when(newsServiceImpl.getNews(1L)).thenReturn(newsDto);

    mockMvc.perform(get("/api/news/1"))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.id").value(1L))
        .andExpect(jsonPath("$.title").value("Test News"));
  }

  @Test
  void getNewsList_ShouldReturnOk() throws Exception {
    when(newsServiceImpl.getAllNews()).thenReturn(List.of(newsDto));

    mockMvc.perform(get("/api/news"))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$[0].id").value(1L));
  }

  @Test
  @WithMockUser(roles = {"ADMIN", "USER"})
  void updateNews_ShouldReturnOk() throws Exception {
    when(newsServiceImpl.updateNews(any(NewsDto.class))).thenReturn(newsDto);

    mockMvc.perform(put("/api/news")
            .param("id", "1")
            .contentType(MediaType.APPLICATION_JSON)
            .content(objectMapper.writeValueAsString(newsDto)))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.id").value(1L));
  }

  @Test
  @WithMockUser(roles = {"ADMIN"})
  void deleteNews_ShouldReturnOk() throws Exception {
    when(newsServiceImpl.deleteNews(1L)).thenReturn(true);

    mockMvc.perform(delete("/api/news/1"))
        .andExpect(status().isOk());
  }

}