package net.ourdailytech.rest.service;

import net.ourdailytech.rest.models.dto.NewsDto;

import java.util.List;

public interface NewsService {
  NewsDto createNews(NewsDto newsDto);

  NewsDto getNews(Long newsId);

  List<NewsDto> getAllNews();

  NewsDto updateNews(NewsDto newsDto);

  boolean deleteNews(Long newsId);
}