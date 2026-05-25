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
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.Optional;
import net.ourdailytech.rest.exception.PostApiException;
import net.ourdailytech.rest.exception.ResourceNotFoundException;
import net.ourdailytech.rest.mapper.LinkMapper;
import net.ourdailytech.rest.models.Category;
import net.ourdailytech.rest.models.Link;
import net.ourdailytech.rest.models.User;
import net.ourdailytech.rest.models.dto.LinkDto;
import net.ourdailytech.rest.repositories.CategoryRepository;
import net.ourdailytech.rest.repositories.LinkRepository;
import net.ourdailytech.rest.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class LinkServiceImpl implements LinkService {

  private final LinkRepository linkRepository;
  private final LinkMapper linkMapper;
  private final CategoryRepository categoryRepository;
  private final UsersRepository usersRepository;
  private final LinkClassificationService linkClassificationService;

  public LinkServiceImpl(LinkRepository linkRepository, LinkMapper linkMapper,
      CategoryRepository categoryRepository, UsersRepository usersRepository,
      LinkClassificationService linkClassificationService) {
    this.linkRepository = linkRepository;
    this.linkMapper = linkMapper;
    this.categoryRepository = categoryRepository;
    this.usersRepository = usersRepository;
    this.linkClassificationService = linkClassificationService;
  }


  @Override
  public LinkDto createLink(LinkDto linkDto, String userEmail) {
    Link linkEntity = linkMapper.toEntity(linkDto);
    linkEntity.setUser(getRequiredUser(userEmail));
    applyNormalizedUrl(linkEntity);
    if (linkEntity.getPublicLink() == null) {
      linkEntity.setPublicLink(true);
    }
    if (linkDto.getCategoryId() != null) {
      linkEntity.setCategory(getRequiredCategory(linkDto.getCategoryId()));
    }
    Link saved = linkRepository.save(linkEntity);
    return linkMapper.toDto(saved);
  }

  @Override
  public List<LinkDto> createLinksFromCsv(InputStream csvInputStream, String userEmail) {
    User user = getRequiredUser(userEmail);
    List<LinkDto> created = new ArrayList<>();
    Map<String, Integer> headerIndexes = null;

    try (BufferedReader reader = new BufferedReader(new InputStreamReader(csvInputStream, StandardCharsets.UTF_8))) {
      String line;
      int lineNumber = 0;
      while ((line = reader.readLine()) != null) {
        lineNumber++;
        if (line.isBlank()) {
          continue;
        }

        List<String> columns = parseCsvLine(line);
        if (headerIndexes == null && isCsvHeader(columns)) {
          headerIndexes = getHeaderIndexes(columns);
          if (!headerIndexes.containsKey("url")) {
            throw new PostApiException(HttpStatus.BAD_REQUEST, "CSV header must include url");
          }
          continue;
        }

        Link link = new Link();
        String url = getCsvValue(columns, headerIndexes, "url", lineNumber);
        if (url == null || url.isBlank()) {
          throw new PostApiException(HttpStatus.BAD_REQUEST, "CSV line " + lineNumber + " must include url");
        }

        String description = getCsvValue(columns, headerIndexes, "description", lineNumber);
        if (description == null) {
          description = getCsvValue(columns, headerIndexes, "title", lineNumber);
        }

        link.setUrl(url.trim());
        link.setTitle(resolveCsvDescription(description, link.getUrl()));
        link.setCategory(resolveCsvCategory(columns, headerIndexes, lineNumber, link.getUrl(), link.getTitle()));
        link.setUser(user);
        link.setPublicLink(true);
        applyNormalizedUrl(link);

        created.add(linkMapper.toDto(linkRepository.save(link)));
      }
    } catch (IOException e) {
      throw new UncheckedIOException("Unable to read Link CSV upload", e);
    }

    return created;
  }

  private String resolveCsvDescription(String description, String url) {
    if (description != null && !description.isBlank()) {
      return description.trim();
    }

    return getUrlWithoutScheme(url);
  }

  private Category resolveCsvCategory(
      List<String> columns,
      Map<String, Integer> headerIndexes,
      int lineNumber,
      String url,
      String title
  ) {
    String categoryId = getCsvValue(columns, headerIndexes, "categoryid", lineNumber);
    Long effectiveCategoryId;
    if (categoryId == null || categoryId.isBlank()) {
      effectiveCategoryId = linkClassificationService.suggestCategory(url, title).categoryId();
    } else {
      effectiveCategoryId = parseRequiredLong(categoryId, "categoryId", lineNumber);
    }

    return getRequiredCategory(effectiveCategoryId);
  }

  @Override
  public LinkDto getLink(Long linkId) {
    Link link = linkRepository.findById(linkId)
        .orElseThrow(() -> new ResourceNotFoundException("Link", "id", String.valueOf(linkId)));
    return linkMapper.toDto(link);
  }

  @Override
  public List<LinkDto> getAllLinks() {
    return linkRepository.findAll()
        .stream()
        .map(linkMapper::toDto)
        .collect(Collectors.toList());
  }

  /**
   * @param categoryId
   * @return
   */
  @Override
  public List<LinkDto> getAllLinksByCategory(Long categoryId) {
    return linkRepository.findByCategoryId(categoryId)
        .stream()
        .map(linkMapper::toDto)
        .collect(Collectors.toList()); 
  }

  @Override
  public List<LinkDto> getAllPublicLinksByCategory(Long categoryId) {
    return linkRepository.findByCategoryIdAndPublicLinkTrueOrCategoryIdAndPublicLinkIsNull(categoryId, categoryId)
        .stream()
        .map(linkMapper::toDto)
        .collect(Collectors.toList()); 
  }

  @Override
  public List<LinkDto> getAllLinksByUser(String userEmail) {
    return linkRepository.findByUserEmail(userEmail)
        .stream()
        .map(linkMapper::toDto)
        .collect(Collectors.toList());
  }

  @Override
  public List<LinkDto> getAllLinksByCategoryAndUser(Long categoryId, String userEmail) {
    return linkRepository.findByCategoryIdAndUserEmail(categoryId, userEmail)
        .stream()
        .map(linkMapper::toDto)
        .collect(Collectors.toList());
  }

  @Override
  public LinkDto updateLink(LinkDto linkDto, String userEmail, boolean isAdmin) {
    if (linkDto.getId() == null) {
      throw new PostApiException(HttpStatus.BAD_REQUEST, "The given id must not be null");
    }
    Optional<Link> existing = linkRepository.findById(linkDto.getId());

    if (existing.isPresent()) {
      if (!isAdmin && !isOwnedBy(existing.get(), userEmail)) {
        throw new PostApiException(HttpStatus.FORBIDDEN, "You are not allowed to update this Link item");
      }
      Link link = linkMapper.partialUpdate(linkDto, existing.get());
      if (linkDto.getUrl() != null) {
        applyNormalizedUrl(link);
      }
      if (linkDto.getCategoryId() != null) {
        link.setCategory(getRequiredCategory(linkDto.getCategoryId()));
      }
      Link updated = linkRepository.save(link);
      return linkMapper.toDto(updated);
    }
    return null;
  }

  @Override
  public boolean deleteLink(Long linkId) {
    Link existing = linkRepository.findById(linkId)
        .orElseThrow(() -> new ResourceNotFoundException("Link", "id", String.valueOf(linkId)));
    linkRepository.delete(existing);
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

  private boolean isCsvHeader(List<String> columns) {
    return columns.stream()
        .map(this::normalizeHeader)
        .anyMatch(column -> column.equals("url") || column.equals("categoryid") || column.equals("description"));
  }

  private Map<String, Integer> getHeaderIndexes(List<String> columns) {
    Map<String, Integer> headerIndexes = new HashMap<>();
    for (int i = 0; i < columns.size(); i++) {
      String header = normalizeHeader(columns.get(i));
      if (!header.isBlank()) {
        if (!isSupportedCsvHeader(header)) {
          throw new PostApiException(HttpStatus.BAD_REQUEST,
              "CSV header " + columns.get(i).trim() + " is not supported. Use url,description,categoryId");
        }
        headerIndexes.put(header, i);
      }
    }
    return headerIndexes;
  }

  private boolean isSupportedCsvHeader(String header) {
    return header.equals("url") || header.equals("description") || header.equals("title") || header.equals("categoryid");
  }

  private String normalizeHeader(String header) {
    return header.trim().toLowerCase(Locale.ROOT).replace("_", "");
  }

  private String getCsvValue(List<String> columns, Map<String, Integer> headerIndexes, String columnName, int lineNumber) {
    if (headerIndexes != null) {
      Integer index = headerIndexes.get(columnName);
      if (index == null) {
        return null;
      }
      return index < columns.size() ? columns.get(index) : null;
    }

    return getPositionalCsvValue(columns, columnName, lineNumber);
  }

  private String getPositionalCsvValue(List<String> columns, String columnName, int lineNumber) {
    if (columns.size() == 1) {
      return columnName.equals("url") ? columns.get(0) : null;
    }
    if (columns.size() == 2) {
      if (columnName.equals("description")) {
        return columns.get(1);
      }
      return columnName.equals("url") ? columns.get(0) : null;
    }
    if (columns.size() == 3) {
      if (columnName.equals("categoryid")) {
        return columns.get(2);
      }
      if (columnName.equals("description")) {
        return columns.get(1);
      }
      return columnName.equals("url") ? columns.get(0) : null;
    }
    throw new PostApiException(HttpStatus.BAD_REQUEST,
        "CSV line " + lineNumber + " must use url,description,categoryId");
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

  private boolean isOwnedBy(Link link, String userEmail) {
    return link.getUser() != null
        && link.getUser().getEmail() != null
        && link.getUser().getEmail().equalsIgnoreCase(userEmail);
  }

  private void applyNormalizedUrl(Link link) {
    String normalizedUrl = normalizeUrl(link.getUrl());
    link.setNormalizedUrl(normalizedUrl);
    link.setNormalizedUrlHash(hashUrl(normalizedUrl));
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

  private String getUrlWithoutScheme(String url) {
    if (url == null) {
      return null;
    }

    return url.trim().replaceFirst("(?i)^https?://", "");
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
