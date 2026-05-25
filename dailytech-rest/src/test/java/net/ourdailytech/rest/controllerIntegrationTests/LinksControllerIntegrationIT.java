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
import net.ourdailytech.rest.models.dto.LinkDto;
import net.ourdailytech.rest.service.LinkServiceImpl;
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
//@WebMvcTest(LinksController.class)
@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("h2")
class LinksControllerIntegrationIT {

  @Autowired
  private MockMvc mockMvc;

  // LEGACY: Old approach with @Mock
  // @Mock
  // private LinkServiceImpl LinkServiceImpl;

  // LEGACY: Old approach with @InjectMocks
  // @InjectMocks
  // private LinksController LinksController;

  @MockBean
  private LinkServiceImpl linkServiceImpl;

  @Autowired
  private ObjectMapper objectMapper;

  // LEGACY: Old manual setup approach
  // private LinkDto LinkDto;

  // LEGACY: Old @BeforeEach setup
  // @BeforeEach
  // void setUp() {
  //   mockMvc = MockMvcBuilders.standaloneSetup(LinksController)
  //       .apply(springSecurity())
  //       .build();
  //   objectMapper = new ObjectMapper();
  //   LinkDto = LinkDto.builder()
  //       .id(1L)
  //       .title("Test Link")
  //       .url("http://example.com")
  //       .categoryId(1L)
  //       .build();
  // }

  private LinkDto getLinkDto() {
    return LinkDto.builder()
        .id(1L)
        .title("Test Link")
        .url("http://example.com")
        .categoryId(1L)
        .build();
  }

@Disabled
  @Test
  // LEGACY: @WithMockUser — replaced by .with(user()) for Spring Security 6 compatibility
  void addLink_ShouldReturnCreated() throws Exception {
    LinkDto linkDto = getLinkDto();
    when(linkServiceImpl.createLink(any(LinkDto.class), any(String.class))).thenReturn(linkDto);

    mockMvc.perform(post("/api/links")
            .with(user("testuser").roles("USER"))
            .with(csrf())
            .contentType(MediaType.APPLICATION_JSON)
            .content(objectMapper.writeValueAsString(linkDto)))
        .andExpect(status().isCreated())
        .andExpect(jsonPath("$.id").value(1L))
        .andExpect(jsonPath("$.title").value("Test Link"));
  }

  @Test
  void getLink_ShouldReturnOk() throws Exception {
    LinkDto linkDto = getLinkDto();
    when(linkServiceImpl.getLink(1L)).thenReturn(linkDto);

    mockMvc.perform(get("/api/links/1"))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.id").value(1L))
        .andExpect(jsonPath("$.title").value("Test Link"));
  }

  @Test
  void getLinkList_ShouldReturnOk() throws Exception {
    LinkDto linkDto = getLinkDto();
    when(linkServiceImpl.getAllLinks()).thenReturn(List.of(linkDto));

    mockMvc.perform(get("/api/links"))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$[0].id").value(1L));
  }

  @Disabled
  @Test
  // LEGACY: @WithMockUser(roles = {"ADMIN", "USER"}) — replaced by .with(user()) for Spring Security 6 compatibility
  void updateLink_ShouldReturnOk() throws Exception {
    LinkDto linkDto = getLinkDto();
    when(linkServiceImpl.updateLink(any(LinkDto.class), any(String.class), any(Boolean.class))).thenReturn(linkDto);

    mockMvc.perform(put("/api/links")
            .with(user("testuser").roles("ADMIN", "USER"))
            .with(csrf())
            .param("id", "1")
            .contentType(MediaType.APPLICATION_JSON)
            .content(objectMapper.writeValueAsString(linkDto)))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.id").value(1L));
  }

  @Disabled
  @Test
  // LEGACY: @WithMockUser(roles = {"ADMIN"}) — replaced by .with(user()) for Spring Security 6 compatibility
  void deleteLink_ShouldReturnOk() throws Exception {
    when(linkServiceImpl.deleteLink(1L)).thenReturn(true);

    mockMvc.perform(delete("/api/links/1")
            .with(user("testuser").roles("ADMIN"))
            .with(csrf()))
        .andExpect(status().isOk());
  }

}
