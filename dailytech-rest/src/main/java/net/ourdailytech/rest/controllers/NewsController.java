package net.ourdailytech.rest.controllers;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import net.ourdailytech.rest.models.dto.NewsDto;
import net.ourdailytech.rest.service.NewsServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(NewsController.API_NEWS)
public class NewsController {

  public static final String API_NEWS = "/api/news";
  private final NewsServiceImpl newsServiceImpl;

  public NewsController(NewsServiceImpl newsServiceImpl) {
    this.newsServiceImpl = newsServiceImpl;
  }

  @Operation(summary = "Add a new news item")
  @ApiResponse(responseCode = "201", description = "News created")
  @SecurityRequirement(name = "Bearer Authentication")
  // @PreAuthorize("hasRole({'ADMIN', 'USER'})")
  @PostMapping({"", "/"})
  public ResponseEntity<NewsDto> addNews(@RequestBody NewsDto newsDto) {
    NewsDto saved = newsServiceImpl.createNews(newsDto);
    return new ResponseEntity<>(saved, HttpStatus.CREATED);
  }

  @Operation(summary = "Get a news item by id")
  @ApiResponse(responseCode = "200", description = "News found")
  @GetMapping("/{id}")
  public ResponseEntity<NewsDto> getNews(@PathVariable("id") Long newsId) {
    NewsDto dto = newsServiceImpl.getNews(newsId);
    return ResponseEntity.ok(dto);
  }

  @Operation(summary = "Get all news items")
  @ApiResponse(responseCode = "200", description = "News items found")
  @GetMapping
  public ResponseEntity<List<NewsDto>> getNewsList() {
    return ResponseEntity.ok(newsServiceImpl.getAllNews());
  }

  @Operation(summary = "Update a news item")
  @ApiResponse(responseCode = "200", description = "News updated")
  @SecurityRequirement(name = "Bearer Authentication")
  @PreAuthorize("hasRole({'ADMIN', 'USER'})")
  @PutMapping({"", "/"})
  public ResponseEntity<NewsDto> updateNews(
      @RequestParam(value = "id", required = false) Long newsId,
      @RequestBody NewsDto newsDto) {
    Long effectiveId = (newsId != null) ? newsId : newsDto.getId();
    if (effectiveId == null) {
      return ResponseEntity.badRequest().build();
    }
    newsDto.setId(effectiveId); // ensure consistency if id provided as param
    return ResponseEntity.ok(newsServiceImpl.updateNews(newsDto));
  }

  @Operation(summary = "Delete a news item")
  @ApiResponse(responseCode = "200", description = "News deleted")
  @SecurityRequirement(name = "Bearer Authentication")
  @PreAuthorize("hasRole('ADMIN')")
  @DeleteMapping("{id}")
  public ResponseEntity<Boolean> deleteNews(@PathVariable("id") Long newsId) {
    try {
      newsServiceImpl.deleteNews(newsId);
      return ResponseEntity.ok(true);
    } catch (Exception e) {
      return ResponseEntity.notFound().build();
    }
  }
}