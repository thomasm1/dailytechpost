package net.ourdailytech.rest.service;

import lombok.RequiredArgsConstructor;
import net.ourdailytech.rest.exception.ResourceNotFoundException;
import net.ourdailytech.rest.mapper.UserMapper;
import net.ourdailytech.rest.models.dto.UserDto;
import net.ourdailytech.rest.repositories.UsersRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

@Service
@RequiredArgsConstructor
public class UserProfileImageService {
    private final UsersRepository users;
    private final ProfileImageStorageService storage;
    private final UserMapper mapper;

    @Transactional
    public UserDto upload(String authenticatedEmail, MultipartFile file) {
        var user = users.findByEmail(authenticatedEmail).orElseThrow(
                () -> new ResourceNotFoundException("User", "email", authenticatedEmail));
        String url = storage.upload(user.getUserId(), file);
        user.setCusUrl(url);
        return mapper.toDto(users.save(user));
    }
}
