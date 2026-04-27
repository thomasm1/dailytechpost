package net.ourdailytech.rest.service;

import java.util.Optional;
import net.ourdailytech.rest.exception.PostApiException;
import net.ourdailytech.rest.exception.ResourceNotFoundException;
import net.ourdailytech.rest.mapper.NewsMapper;
import net.ourdailytech.rest.models.Category;
import net.ourdailytech.rest.models.News;
import net.ourdailytech.rest.models.User;
import net.ourdailytech.rest.models.dto.NewsDto;
import net.ourdailytech.rest.repositories.CategoryRepository;
import net.ourdailytech.rest.repositories.NewsRepository;
import net.ourdailytech.rest.repositories.UsersRepository;
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
  private final UsersRepository usersRepository;

  public NewsServiceImpl(NewsRepository newsRepository, NewsMapper newsMapper,
      CategoryRepository categoryRepository, UsersRepository usersRepository) {
    this.newsRepository = newsRepository;
    this.newsMapper = newsMapper;
    this.categoryRepository = categoryRepository;
    this.usersRepository = usersRepository;
  }


  @Override
  public NewsDto createNews(NewsDto newsDto, String userEmail) {
    News newsEntity = newsMapper.toEntity(newsDto);
    newsEntity.setUser(getRequiredUser(userEmail));
    if (newsEntity.getPublicLink() == null) {
      newsEntity.setPublicLink(true);
    }
    if (newsDto.getCategoryId() != null) {
      newsEntity.setCategory(getRequiredCategory(newsDto.getCategoryId()));
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

  /**
   * @param categoryId
   * @return
   */
  @Override
  public List<NewsDto> getAllNewsByCategory(Long categoryId) {
    return newsRepository.findByCategoryId(categoryId)
        .stream()
        .map(newsMapper::toDto)
        .collect(Collectors.toList()); 
  }

  @Override
  public List<NewsDto> getAllPublicNewsByCategory(Long categoryId) {
    return newsRepository.findByCategoryIdAndPublicLinkTrueOrCategoryIdAndPublicLinkIsNull(categoryId, categoryId)
        .stream()
        .map(newsMapper::toDto)
        .collect(Collectors.toList()); 
  }

  @Override
  public List<NewsDto> getAllNewsByUser(String userEmail) {
    return newsRepository.findByUserEmail(userEmail)
        .stream()
        .map(newsMapper::toDto)
        .collect(Collectors.toList());
  }

  @Override
  public List<NewsDto> getAllNewsByCategoryAndUser(Long categoryId, String userEmail) {
    return newsRepository.findByCategoryIdAndUserEmail(categoryId, userEmail)
        .stream()
        .map(newsMapper::toDto)
        .collect(Collectors.toList());
  }

  @Override
  public NewsDto updateNews(NewsDto newsDto, String userEmail, boolean isAdmin) {
    if (newsDto.getId() == null) {
      throw new PostApiException(HttpStatus.BAD_REQUEST, "The given id must not be null");
    }
    Optional<News> existing = newsRepository.findById(newsDto.getId());

    if (existing.isPresent()) {
      if (!isAdmin && !isOwnedBy(existing.get(), userEmail)) {
        throw new PostApiException(HttpStatus.FORBIDDEN, "You are not allowed to update this news item");
      }
      News news = newsMapper.partialUpdate(newsDto, existing.get());
      if (newsDto.getCategoryId() != null) {
        news.setCategory(getRequiredCategory(newsDto.getCategoryId()));
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

  private Category getRequiredCategory(Long categoryId) {
    return categoryRepository.findById(categoryId)
        .orElseThrow(() -> new ResourceNotFoundException("Category", "id", String.valueOf(categoryId)));
  }

  private User getRequiredUser(String userEmail) {
    return usersRepository.findByEmail(userEmail)
        .orElseThrow(() -> new ResourceNotFoundException("User", "email", userEmail));
  }

  private boolean isOwnedBy(News news, String userEmail) {
    return news.getUser() != null
        && news.getUser().getEmail() != null
        && news.getUser().getEmail().equalsIgnoreCase(userEmail);
  }

}
