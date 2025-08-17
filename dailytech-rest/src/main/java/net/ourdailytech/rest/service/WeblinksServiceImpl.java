package net.ourdailytech.rest.service;

import net.ourdailytech.rest.exception.ResourceNotFoundException;
import net.ourdailytech.rest.mapper.PostEntityMapper;
import net.ourdailytech.rest.mapper.WeblinkMapper;
import net.ourdailytech.rest.models.PostEntity;
import net.ourdailytech.rest.models.Weblink;
import net.ourdailytech.rest.models.dto.PostEntityDto;
import net.ourdailytech.rest.models.dto.WeblinkDto;
import net.ourdailytech.rest.repositories.WeblinksRepository;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;

import java.util.List;

@Primary
@Service
@RequiredArgsConstructor
public class WeblinksServiceImpl implements WeblinksService {

    private final PostService postService;
    private final WeblinkMapper weblinkMapper;
    private final WeblinksRepository weblinksRepository;
    private final PostEntityMapper postMapper;

    @Override
    public WeblinkDto createWeblinks(WeblinkDto bkmk) {
        Weblink weblink = weblinksRepository.save(weblinkMapper.toEntity(bkmk));
        return weblinkMapper.toDto(weblink);
    }

    @Override
    public WeblinkDto addWeblinkToPost(Long postId, WeblinkDto bkmk) {
        PostEntityDto postDto = postService.getPostById(postId)
            .orElseThrow(() -> new ResourceNotFoundException("Post", "id", String.valueOf(postId)));
        PostEntity post = postMapper.toEntity(postDto);

        Weblink weblink = weblinkMapper.toEntity(bkmk);
        weblink.setPostEntity(post);

        weblink = weblinksRepository.save(weblink);
        return weblinkMapper.toDto(weblink);
    }

    @Override
    public WeblinkDto getWeblink(long id) {
        return weblinksRepository.findById(id)
            .map(weblinkMapper::toDto)
            .orElse(new WeblinkDto());
    }

    @Override
    public List<WeblinkDto> getAllWeblinks() {
        List<Weblink> weblinks = weblinksRepository.findAll();
        return weblinks.stream().map(weblinkMapper::toDto).toList();
    }

    @Override
    public WeblinkDto updateWeblink(Long weblinkId, WeblinkDto change) {
        Weblink existingWeblink = weblinksRepository.findById(weblinkId)
            .orElseThrow(() -> new ResourceNotFoundException("Weblink", "id: ", String.valueOf(weblinkId)));
        // Update fields
        existingWeblink.setTitle(change.getTitle());
        existingWeblink.setUrl(change.getUrl());
        existingWeblink.setHost(change.getHost());

        Weblink weblink = weblinksRepository.save(existingWeblink);
        return weblinkMapper.toDto(weblink);
    }

    @Override
    public boolean deleteWeblinks(long id) {
        try {
            weblinksRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}