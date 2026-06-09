package net.ourdailytech.rest.controllers;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import java.io.IOException;
import java.util.List;
import net.ourdailytech.rest.models.dto.FirebaseAdminUserDto;
import net.ourdailytech.rest.service.FirebaseAdminUsersService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin")
public class AdminUsersController {

  private final FirebaseAdminUsersService firebaseAdminUsersService;

  public AdminUsersController(FirebaseAdminUsersService firebaseAdminUsersService) {
    this.firebaseAdminUsersService = firebaseAdminUsersService;
  }

  @SecurityRequirement(name = "Bearer Authentication")
  @PreAuthorize("hasRole('ADMIN')")
  @GetMapping("/firebase-users")
  public ResponseEntity<List<FirebaseAdminUserDto>> listFirebaseUsers() throws Exception {
    return ResponseEntity.ok(firebaseAdminUsersService.listUsers());
  }
}
