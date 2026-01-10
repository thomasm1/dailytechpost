package net.ourdailytech.rest.service;

import net.ourdailytech.rest.exception.PostApiException;
import net.ourdailytech.rest.exception.ResourceNotFoundException;
import net.ourdailytech.rest.mapper.NewsMapper;
import net.ourdailytech.rest.models.News;
import net.ourdailytech.rest.models.dto.NewsDto;
import net.ourdailytech.rest.repositories.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class NewsServiceImpl implements NewsService {

  @Autowired
  private NewsRepository newsRepository;

  @Autowired
  private NewsMapper newsMapper;

  @Override
  public NewsDto createNews(NewsDto newsDto) {
    News entity = newsMapper.toEntity(newsDto);
    News saved = newsRepository.save(entity);
    return newsMapper.toDto(saved);
  }

  @Override
  public NewsDto getNews(Long newsId) {
    News news = newsRepository.findById(newsId)
        .orElseThrow(() -> new ResourceNotFoundException("News", "id", String.valueOf(newsId)));
    return newsMapper.toDto(news);
  }

  @Override
  public List<NewsDto> getAllNews() {
    return newsRepository.findAll()
        .stream()
        .map(newsMapper::toDto)
        .collect(Collectors.toList());
  }

  @Override
  public NewsDto updateNews(NewsDto newsDto) {
    if (newsDto.getId() == null) {
      throw new PostApiException(HttpStatus.BAD_REQUEST, "The given id must not be null");
    }
    News existing = newsRepository.findById(newsDto.getId())
        .orElseThrow(() -> new ResourceNotFoundException("News", "id", String.valueOf(newsDto.getId())));
    // mapper should support partialUpdate similar to CommentMapper; otherwise map fields manually
    newsMapper.partialUpdate(newsDto, existing);
    News updated = newsRepository.save(existing);
    return newsMapper.toDto(updated);
  }

  @Override
  public boolean deleteNews(Long newsId) {
    News existing = newsRepository.findById(newsId)
        .orElseThrow(() -> new ResourceNotFoundException("News", "id", String.valueOf(newsId)));
    newsRepository.delete(existing);
    return true;
  }
}