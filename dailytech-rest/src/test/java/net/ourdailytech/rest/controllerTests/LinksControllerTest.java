                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          package net.ourdailytech.rest.controllerTests;

import com.fasterxml.jackson.databind.ObjectMapper;
import net.ourdailytech.rest.controllers.LinksController;
import net.ourdailytech.rest.models.dto.LinkDto;
import net.ourdailytech.rest.service.LinkServiceImpl;
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
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.multipart;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
class LinksControllerTest {

  private MockMvc mockMvc;
  private ObjectMapper objectMapper;

  @Mock
  private LinkServiceImpl linkServiceImpl;

  @InjectMocks
  private LinksController linksController;

  @BeforeEach
  void setUp() {
    mockMvc = MockMvcBuilders.standaloneSetup(linksController).build();
    objectMapper = new ObjectMapper();
  }

  private LinkDto getLinkDto() {
    return LinkDto.builder()
        .id(1L)
        .title("Test Link")
        .url("http://example.com")
        .categoryId(1L)
        .build();
  }

  @Test
  void testaddLink_ShouldReturnCreated() throws Exception {
    LinkDto linkDto = getLinkDto();
    when(linkServiceImpl.createLink(any(LinkDto.class), any(String.class))).thenReturn(linkDto);

    UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(
        "testuser",
        "N/A",
        List.of(new SimpleGrantedAuthority("ROLE_USER"))
    );

    mockMvc.perform(post("/api/links")
            .principal(auth)
            .contentType(MediaType.APPLICATION_JSON)
            .content(objectMapper.writeValueAsString(linkDto)))
        .andExpect(status().isCreated())
        .andExpect(jsonPath("$.id").value(1L))
        .andExpect(jsonPath("$.title").value("Test Link"));
  }

  @Test
  void testaddLinksFromCsv_ShouldReturnCreatedItems() throws Exception {
    LinkDto linkDto = getLinkDto();
    when(linkServiceImpl.createLinksFromCsv(any(), any(String.class))).thenReturn(List.of(linkDto));

    UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(
        "testuser",
        "N/A",
        List.of(new SimpleGrantedAuthority("ROLE_USER"))
    );

    mockMvc.perform(multipart("/api/links/bulk/csv")
            .file("file", "url,description,categoryId\nhttps://example.com,\"LESS,LESS CDN\",1101".getBytes())
            .principal(auth))
        .andExpect(status().isCreated())
        .andExpect(jsonPath("$[0].id").value(1L))
        .andExpect(jsonPath("$[0].title").value("Test Link"));
  }

  @Test
  void testgetLink_ShouldReturnOk() throws Exception {
    LinkDto linkDto = getLinkDto();
    when(linkServiceImpl.getLink(1L)).thenReturn(linkDto);

    mockMvc.perform(get("/api/links/1"))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.id").value(1L))
        .andExpect(jsonPath("$.title").value("Test Link"));
  }

  @Test
  void testgetLinkList_ShouldReturnOk() throws Exception {
    LinkDto linkDto = getLinkDto();
    when(linkServiceImpl.getAllLinks()).thenReturn(List.of(linkDto));

    mockMvc.perform(get("/api/links"))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$[0].id").value(1L));
  }

  @Test
  void testLegacyNewsPathStillReturnsLinks() throws Exception {
    LinkDto linkDto = getLinkDto();
    when(linkServiceImpl.getAllLinks()).thenReturn(List.of(linkDto));

    mockMvc.perform(get("/api/news"))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$[0].id").value(1L));
  }

  @Test
  void testGetPublicLinksByCategory_ShouldReturnOk() throws Exception {
    LinkDto linkDto = getLinkDto();
    when(linkServiceImpl.getAllPublicLinksByCategory(1L)).thenReturn(List.of(linkDto));

    mockMvc.perform(get("/api/links/category/public/1"))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$[0].id").value(1L));
  }

  @Test
  void testupdateLink_ShouldReturnOk() throws Exception {
    LinkDto linkDto = getLinkDto();
    when(linkServiceImpl.updateLink(any(LinkDto.class), any(String.class), any(Boolean.class))).thenReturn(linkDto);

    UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(
        "testuser",
        "N/A",
        List.of(
            new SimpleGrantedAuthority("ROLE_ADMIN"),
            new SimpleGrantedAuthority("ROLE_USER")
        )
    );

    mockMvc.perform(put("/api/links")
            .principal(auth)
            .param("id", "1")
            .contentType(MediaType.APPLICATION_JSON)
            .content(objectMapper.writeValueAsString(linkDto)))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.id").value(1L));
  }

  @Test
  void testdeleteLink_ShouldReturnOk() throws Exception {
    when(linkServiceImpl.deleteLink(1L)).thenReturn(true);

    mockMvc.perform(delete("/api/links/1"))
        .andExpect(status().isOk());
  }
}
