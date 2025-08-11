package net.ourdailytech.rest.service;

import lombok.RequiredArgsConstructor;
import net.ourdailytech.rest.mapper.WeblinkMapper;
import net.ourdailytech.rest.models.Weblink;
import net.ourdailytech.rest.models.dto.WeblinkDto;
import net.ourdailytech.rest.repositories.WeblinksRepository;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


//@Profile(value={"dev","prod"})
@Primary
@Service
@RequiredArgsConstructor
public class WeblinksServiceImpl implements WeblinksService {
 
    private final WeblinkMapper weblinkMapper;
    private final WeblinksRepository weblinksRepository;

    /**
     * @param bkmk;
     * @return WeblinkDto
     */
    @Override
    public WeblinkDto createWeblinks(WeblinkDto bkmk) {
        Weblink weblink = weblinksRepository.save(weblinkMapper.toEntity(bkmk));
        return weblinkMapper.toDto(weblink);
    }

    /**
     * @param id
     * @return
     */
    @Override
    public WeblinkDto getWeblinks(long id) {
        try {
            return weblinkMapper.toDto(weblinksRepository.findById(id));
        } catch (Exception e) {
            return new WeblinkDto();
        }
    }
    /**
     * @return  List<WeblinkDto>
     */
    @Override
    public List<WeblinkDto> getAllWeblinks() {
        List<WeblinkDto> wdto = null;
        List<Weblink> weblinks =  weblinksRepository.findAll();
        wdto = weblinks.stream().map(weblinkMapper::toDto).toList();
        return wdto;

    }
    /**
     * @param change;
     * @return  WeblinkDto
     */
    @Override
    public WeblinkDto updateWeblinks(WeblinkDto change) {
        Weblink weblink = weblinksRepository.save(weblinkMapper.toEntity(change));
        return  weblinkMapper.toDto(weblink);
    }
    /**
     * @param id;
     * @return boolean
     */
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

