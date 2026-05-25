package net.ourdailytech.rest.controllers;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import net.ourdailytech.rest.models.dto.LinkDto;
import net.ourdailytech.rest.service.LinkServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping({LinksController.API_LINKS, LinksController.LEGACY_API_NEWS})
public class LinksController {

  public static final String API_LINKS = "/api/links";
  public static final String LEGACY_API_NEWS = "/api/news";
  private final LinkServiceImpl linkService;

  public LinksController(LinkServiceImpl linkService) {
    this.linkService = linkService;
  }

  @Operation(summary = "Get a Link item by id")
  @ApiResponse(responseCode = "200", description = "Link found")
  @GetMapping("/{id}")
  public ResponseEntity<LinkDto> getLink(@PathVariable("id") Long linkId) {
    LinkDto dto = linkService.getLink(linkId);
    return ResponseEntity.ok(dto);
  }

  @Operation(summary = "Get all Link items")
  @ApiResponse(responseCode = "200", description = "Link items found")
  @GetMapping
  public ResponseEntity<List<LinkDto>> getLinkList() {
    return ResponseEntity.ok(linkService.getAllLinks());
  }

  @Operation(summary = "Get Link items by category id")
  @ApiResponse(responseCode = "200", description = "Link items found")
  @GetMapping("/category/{categoryId}")
  public ResponseEntity<List<LinkDto>> getLinkListByCategory(@PathVariable ("categoryId") Long categoryId) {
    return ResponseEntity.ok(linkService.getAllLinksByCategory(categoryId));
  }

  @Operation(summary = "Get public Link items by category id")
  @ApiResponse(responseCode = "200", description = "Public Link items found")
  @GetMapping("/category/public/{categoryId}")
  public ResponseEntity<List<LinkDto>> getPublicLinkListByCategory(@PathVariable("categoryId") Long categoryId) {
    return ResponseEntity.ok(linkService.getAllPublicLinksByCategory(categoryId));
  }

  @Operation(summary = "Get Link items for the current user")
  @ApiResponse(responseCode = "200", description = "Current user Link items found")
  @SecurityRequirement(name = "Bearer Authentication")
  @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
  @GetMapping("/me")
  public ResponseEntity<List<LinkDto>> getCurrentUserLinks(Authentication authentication) {
    return ResponseEntity.ok(linkService.getAllLinksByUser(authentication.getName()));
  }

  @Operation(summary = "Get current user Link items by category id")
  @ApiResponse(responseCode = "200", description = "Current user Link items found")
  @SecurityRequirement(name = "Bearer Authentication")
  @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
  @GetMapping("/me/category/{categoryId}")
  public ResponseEntity<List<LinkDto>> getCurrentUserLinksByCategory(
      @PathVariable("categoryId") Long categoryId,
      Authentication authentication) {
    return ResponseEntity.ok(linkService.getAllLinksByCategoryAndUser(categoryId, authentication.getName()));
  }


  @Operation(summary = "Add a new Link item")
  @ApiResponse(responseCode = "201", description = "Link created")
  @SecurityRequirement(name = "Bearer Authentication")
  @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
  @PostMapping({"", "/"})
  public ResponseEntity<LinkDto> addLink(@RequestBody LinkDto linkDto, Authentication authentication) {
    LinkDto saved = linkService.createLink(linkDto, authentication.getName());
    return new ResponseEntity<>(saved, HttpStatus.CREATED);
  }

//  curl -X POST http://localhost:8082/api/links/bulk/csv \
//      -H "Authorization: Bearer eyJsMjro9hep" \
//      -F "file=@src/main/resources/data/newslink-webdev-developer-seed.csv"

  @Operation(summary = "Bulk add Link items from CSV")
  @ApiResponse(responseCode = "201", description = "Link items created")
  @SecurityRequirement(name = "Bearer Authentication")
  @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
  @PostMapping(value = "/bulk/csv", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
  public ResponseEntity<List<LinkDto>> addLinksFromCsv(
      @RequestParam("file") MultipartFile file,
      Authentication authentication) throws IOException {
    List<LinkDto> saved = linkService.createLinksFromCsv(file.getInputStream(), authentication.getName());
    return new ResponseEntity<>(saved, HttpStatus.CREATED);
  }


  @Operation(summary = "Update a Link item")
  @ApiResponse(responseCode = "200", description = "Link updated")
  @SecurityRequirement(name = "Bearer Authentication")
  @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
//  @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
  @PutMapping({"", "/"})
  public ResponseEntity<LinkDto> updateLink(
      @RequestParam(value = "id", required = false) Long linkId,
      @RequestBody LinkDto linkDto,
      Authentication authentication) {
    Long effectiveId = (linkId != null) ? linkId : linkDto.getId();
    if (effectiveId == null) {
      return ResponseEntity.badRequest().build();
    }
    linkDto.setId(effectiveId); // ensure consistency if id provided as param
    boolean isAdmin = authentication.getAuthorities().stream()
        .anyMatch(authority -> "ROLE_ADMIN".equals(authority.getAuthority()));
    return ResponseEntity.ok(linkService.updateLink(linkDto, authentication.getName(), isAdmin));
  }

  @Operation(summary = "Delete a Link item")
  @ApiResponse(responseCode = "200", description = "Link deleted")
  @SecurityRequirement(name = "Bearer Authentication")
  @PreAuthorize("hasRole('ADMIN')")
  @DeleteMapping("{id}")
  public ResponseEntity<Boolean> deleteLink(@PathVariable("id") Long linkId) {
    try {
      linkService.deleteLink(linkId);
      return ResponseEntity.ok(true);
    } catch (Exception e) {
      return ResponseEntity.notFound().build();
    }
  }
}
