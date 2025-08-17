package net.ourdailytech.rest.serviceTests;

import net.ourdailytech.rest.mapper.WeblinkMapper;
import net.ourdailytech.rest.models.PostEntity;
import net.ourdailytech.rest.models.Weblink;
import net.ourdailytech.rest.models.dto.WeblinkDto;
import net.ourdailytech.rest.repositories.PostRepository;
import net.ourdailytech.rest.repositories.WeblinksRepository;
import net.ourdailytech.rest.service.WeblinksServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class WeblinksServiceTest {

    @Mock
    private WeblinksRepository weblinksRepository;

    @Mock
    private PostRepository postRepository;

    @Mock
    private WeblinkMapper weblinkMapper;

    @InjectMocks
    private WeblinksServiceImpl weblinksService;

    private WeblinkDto testWeblinkDto;
    private Weblink testWeblink;
    private PostEntity testPost;

    @BeforeEach
    void setUp() {
        testWeblinkDto = new WeblinkDto();
        testWeblinkDto.setId(1L);
        testWeblinkDto.setTitle("Test Article");
        testWeblinkDto.setUrl("https://example.com/article");
        testWeblinkDto.setHost("example.com");

        testWeblink = new Weblink();
        testWeblink.setId(1L);
        testWeblink.setTitle("Test Article");
        testWeblink.setUrl("https://example.com/article");
        testWeblink.setHost("example.com");

        testPost = new PostEntity();
        testPost.setId(1L);
        testPost.setTitle("Test Post");
        testPost.setWeblinks(new HashSet<>());
    }

    @Test
    void testCreateWeblinks() {
        when(weblinkMapper.toEntity(testWeblinkDto)).thenReturn(testWeblink);
        when(weblinksRepository.save(any(Weblink.class))).thenReturn(testWeblink);
        when(weblinkMapper.toDto(testWeblink)).thenReturn(testWeblinkDto);

        WeblinkDto result = weblinksService.createWeblinks(testWeblinkDto);

        assertNotNull(result);
        assertEquals(testWeblinkDto.getTitle(), result.getTitle());
        assertEquals(testWeblinkDto.getUrl(), result.getUrl());
        verify(weblinksRepository).save(any(Weblink.class));
    }

    @Test
    void testGetWeblinks() {
        when(weblinksRepository.findById(1L)).thenReturn(Optional.of(testWeblink));
        when(weblinkMapper.toDto(testWeblink)).thenReturn(testWeblinkDto);

        WeblinkDto result = weblinksService.getWeblink(1L);

        assertNotNull(result);
        assertEquals(testWeblinkDto.getId(), result.getId());
        verify(weblinksRepository).findById(1L);
    }

    @Test
    void testGetAllWeblinks() {
        List<Weblink> weblinks = Arrays.asList(testWeblink);

        when(weblinksRepository.findAll()).thenReturn(weblinks);
        when(weblinkMapper.toDto(testWeblink)).thenReturn(testWeblinkDto);

        List<WeblinkDto> result = weblinksService.getAllWeblinks();

        assertNotNull(result);
        assertEquals(1, result.size());
        verify(weblinksRepository).findAll();
    }

//    @Test
//    void testDeleteWeblinks() {
//        doNothing().when(weblinksRepository).deleteById(1L);
//
//        boolean result = weblinksService.deleteWeblinks(1L);
//        assertTrue(result);
//        verify(weblinksRepository).deleteById(1L);
//    }
}