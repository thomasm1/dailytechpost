package net.ourdailytech.rest.service;


import net.ourdailytech.rest.models.dto.WeblinkDto;

import java.util.List;

public interface WeblinksService {
    public WeblinkDto createWeblinks(WeblinkDto bkmk);

    public WeblinkDto addWeblinkToPost(Long postId, WeblinkDto bkmk);

    public WeblinkDto getWeblink(long id);

    public List<WeblinkDto> getAllWeblinks();

    public WeblinkDto updateWeblink(Long id, WeblinkDto change);

    public boolean deleteWeblinks(long id);

}
