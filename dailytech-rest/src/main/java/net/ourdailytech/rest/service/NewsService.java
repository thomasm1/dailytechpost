package net.ourdailytech.rest.service;

import net.ourdailytech.rest.models.dto.NewsDto;

import java.util.List;

public interface NewsService {
  NewsDto createNews(NewsDto newsDto, String userEmail);

  NewsDto getNews(Long newsId);

  List<NewsDto> getAllNews();

  NewsDto updateNews(NewsDto newsDto, String userEmail, boolean isAdmin);

  boolean deleteNews(Long newsId);

  List<NewsDto> getAllNewsByCategory(Long categoryId);

  List<NewsDto> getAllPublicNewsByCategory(Long categoryId);

  List<NewsDto> getAllNewsByUser(String userEmail);

  List<NewsDto> getAllNewsByCategoryAndUser(Long categoryId, String userEmail);
}
