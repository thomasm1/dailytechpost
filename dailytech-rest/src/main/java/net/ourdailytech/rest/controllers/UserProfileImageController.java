package net.ourdailytech.rest.controllers;

import lombok.RequiredArgsConstructor;
import net.ourdailytech.rest.models.dto.UserDto;
import net.ourdailytech.rest.service.UserProfileImageService;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequiredArgsConstructor
public class UserProfileImageController {
    private final UserProfileImageService profiles;

    @PreAuthorize("isAuthenticated()")
    @PostMapping(value = "/api/users/me/profile/image", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public UserDto upload(Authentication authentication, @RequestParam("file") MultipartFile file) {
        return profiles.upload(authentication.getName(), file);
    }
}
