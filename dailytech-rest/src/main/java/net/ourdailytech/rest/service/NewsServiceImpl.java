package net.ourdailytech.rest.service;

import java.util.Optional;
import net.ourdailytech.rest.exception.PostApiException;
import net.ourdailytech.rest.exception.ResourceNotFoundException;
import net.ourdailytech.rest.mapper.NewsMapper;
import net.ourdailytech.rest.models.Category;
import net.ourdailytech.rest.models.News;
import net.ourdailytech.rest.models.dto.NewsDto;
import net.ourdailytech.rest.repositories.CategoryRepository;
import net.ourdailytech.rest.repositories.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class NewsServiceImpl implements NewsService {

  private final NewsRepository newsRepository;
  private final NewsMapper newsMapper;
  private final CategoryRepository categoryRepository;

  public NewsServiceImpl(NewsRepository newsRepository, NewsMapper newsMapper,
      CategoryRepository categoryRepository) {
    this.newsRepository = newsRepository;
    this.newsMapper = newsMapper;
    this.categoryRepository = categoryRepository;
  }


  @Override
  public NewsDto createNews(NewsDto newsDto) {
    News newsEntity = newsMapper.toEntity(newsDto);
    if (newsDto.getCategoryId() != null) {
      Optional<Category> categoryOpt = categoryRepository.findById(newsDto.getCategoryId());
      if (categoryOpt.isPresent()) {
        newsEntity.setCategory(categoryOpt.get());
      } else {
        throw new ResourceNotFoundException("Category", "id", String.valueOf(newsDto.getCategoryId()));
      }
    }
    News saved = newsRepository.save(newsEntity);
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
    Optional<News> existing = newsRepository.findById(newsDto.getId());

    if (existing.isPresent()) {
      News news = newsMapper.partialUpdate(newsDto, existing.get());
      if (newsDto.getCategoryId() != null) {
        Optional<Category> category = categoryRepository.findById(newsDto.getCategoryId());
        category.ifPresent(news::setCategory);
      }
      News updated = newsRepository.save(news);
      return newsMapper.toDto(updated);
    }
    return null;
  }

  @Override
  public boolean deleteNews(Long newsId) {
    News existing = newsRepository.findById(newsId)
        .orElseThrow(() -> new ResourceNotFoundException("News", "id", String.valueOf(newsId)));
    newsRepository.delete(existing);
    return true;
  }
}