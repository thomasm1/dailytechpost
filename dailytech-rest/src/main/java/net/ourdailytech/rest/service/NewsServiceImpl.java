package net.ourdailytech.rest.service;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UncheckedIOException;
import java.util.ArrayList;
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
    applyNormalizedUrl(newsEntity);
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
  public List<NewsDto> createNewsFromCsv(InputStream csvInputStream, String userEmail) {
    User user = getRequiredUser(userEmail);
    List<NewsDto> created = new ArrayList<>();

    try (BufferedReader reader = new BufferedReader(new InputStreamReader(csvInputStream, StandardCharsets.UTF_8))) {
      String line;
      int lineNumber = 0;
      while ((line = reader.readLine()) != null) {
        lineNumber++;
        if (lineNumber == 1 && isCsvHeader(line)) {
          continue;
        }
        if (line.isBlank()) {
          continue;
        }

        List<String> columns = parseCsvLine(line);
        if (columns.size() != 4) {
          throw new PostApiException(HttpStatus.BAD_REQUEST,
              "CSV line " + lineNumber + " must have categoryId,parentId,description,url");
        }

        News news = new News();
        news.setCategory(getRequiredCategory(parseRequiredLong(columns.get(0), "categoryId", lineNumber)));
        news.setTitle(columns.get(2).trim());
        news.setUrl(columns.get(3).trim());
        news.setUser(user);
        news.setPublicLink(true);
        applyNormalizedUrl(news);

        created.add(newsMapper.toDto(newsRepository.save(news)));
      }
    } catch (IOException e) {
      throw new UncheckedIOException("Unable to read news CSV upload", e);
    }

    return created;
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
      if (newsDto.getUrl() != null) {
        applyNormalizedUrl(news);
      }
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

  private boolean isCsvHeader(String line) {
    return line.stripLeading().toLowerCase().startsWith("categoryid,parentid,description,url");
  }

  private Long parseRequiredLong(String value, String columnName, int lineNumber) {
    try {
      return Long.parseLong(value.trim());
    } catch (NumberFormatException e) {
      throw new PostApiException(HttpStatus.BAD_REQUEST,
          "CSV line " + lineNumber + " has invalid " + columnName + ": " + value);
    }
  }

  private List<String> parseCsvLine(String line) {
    List<String> columns = new ArrayList<>();
    StringBuilder current = new StringBuilder();
    boolean inQuotes = false;

    for (int i = 0; i < line.length(); i++) {
      char ch = line.charAt(i);
      if (ch == '"') {
        if (inQuotes && i + 1 < line.length() && line.charAt(i + 1) == '"') {
          current.append('"');
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (ch == ',' && !inQuotes) {
        columns.add(current.toString());
        current.setLength(0);
      } else {
        current.append(ch);
      }
    }
    columns.add(current.toString());

    return columns;
  }

  private boolean isOwnedBy(News news, String userEmail) {
    return news.getUser() != null
        && news.getUser().getEmail() != null
        && news.getUser().getEmail().equalsIgnoreCase(userEmail);
  }

  private void applyNormalizedUrl(News news) {
    String normalizedUrl = normalizeUrl(news.getUrl());
    news.setNormalizedUrl(normalizedUrl);
    news.setNormalizedUrlHash(hashUrl(normalizedUrl));
  }

  private String normalizeUrl(String url) {
    if (url == null) {
      return null;
    }

    String normalized = url.trim().toLowerCase();
    normalized = normalized.replaceFirst("^https?://", "");
    normalized = normalized.replaceFirst("^www\\.", "");

    while (normalized.endsWith("/")) {
      normalized = normalized.substring(0, normalized.length() - 1);
    }

    return normalized;
  }

  private String hashUrl(String normalizedUrl) {
    if (normalizedUrl == null || normalizedUrl.isBlank()) {
      return null;
    }

    try {
      MessageDigest digest = MessageDigest.getInstance("SHA-256");
      byte[] hash = digest.digest(normalizedUrl.getBytes(StandardCharsets.UTF_8));
      StringBuilder hex = new StringBuilder(hash.length * 2);
      for (byte b : hash) {
        hex.append(String.format("%02x", b));
      }
      return hex.toString();
    } catch (NoSuchAlgorithmException e) {
      throw new IllegalStateException("SHA-256 is not available", e);
    }
  }

}
