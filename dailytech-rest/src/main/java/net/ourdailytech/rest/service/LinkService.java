package net.ourdailytech.rest.service;

import net.ourdailytech.rest.models.dto.LinkDto;

import java.io.InputStream;
import java.util.List;

public interface LinkService {
  LinkDto createLink(LinkDto linkDto, String userEmail);

  List<LinkDto> createLinksFromCsv(InputStream csvInputStream, String userEmail);

  LinkDto getLink(Long linkId);

  List<LinkDto> getAllLinks();

  LinkDto updateLink(LinkDto linkDto, String userEmail, boolean isAdmin);

  boolean deleteLink(Long linkId);

  List<LinkDto> getAllLinksByCategory(Long categoryId);

  List<LinkDto> getAllPublicLinksByCategory(Long categoryId);

  List<LinkDto> getAllLinksByUser(String userEmail);

  List<LinkDto> getAllLinksByCategoryAndUser(Long categoryId, String userEmail);
}
