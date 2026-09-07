package net.ourdailytech.rest.serviceTests;

import java.util.Optional;
import net.ourdailytech.rest.mapper.UserMapper;
import net.ourdailytech.rest.models.User;
import net.ourdailytech.rest.repositories.UsersRepository;
import net.ourdailytech.rest.service.ProfileImageStorageService;
import net.ourdailytech.rest.service.UserProfileImageService;
import org.junit.jupiter.api.Test;
import org.springframework.mock.web.MockMultipartFile;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class UserProfileImageTest {
    @Test
    void savesStorageUrlForResolvedAccountAndKeepsItOnUploadFailure() {
        var users = mock(UsersRepository.class);
        var storage = mock(ProfileImageStorageService.class);
        var service = new UserProfileImageService(users, storage, mock(UserMapper.class));
        var user = new User();
        user.setUserId(7L);
        user.setCusUrl("https://example.com/old.jpg");
        when(users.findByEmail("reader@example.com")).thenReturn(Optional.of(user));
        when(users.save(user)).thenReturn(user);
        var file = new MockMultipartFile("file", new byte[]{1});
        String url = "https://tmm-nov.s3.amazonaws.com/img/_dailytech/users/7/new.jpg";
        when(storage.upload(7L, file)).thenReturn(url);
        service.upload("reader@example.com", file);
        assertEquals(url, user.getCusUrl());
        verify(users).save(user);
        when(storage.upload(7L, file)).thenThrow(new IllegalStateException("storage unavailable"));
        assertThrows(IllegalStateException.class, () -> service.upload("reader@example.com", file));
        assertEquals(url, user.getCusUrl());
        verify(users, times(1)).save(user);
    }
}
