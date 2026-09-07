package net.ourdailytech.rest.serviceTests;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import javax.imageio.ImageIO;
import net.ourdailytech.rest.config.ProfileImageS3Config.Properties;
import net.ourdailytech.rest.exception.ProfileImageException;
import net.ourdailytech.rest.service.ProfileImageStorageService;
import org.junit.jupiter.api.Test;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.web.multipart.MultipartFile;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class ProfileImageStorageTest {
    private final S3Client s3 = mock(S3Client.class);
    private final Properties properties = new Properties();
    private final ProfileImageStorageService storage = new ProfileImageStorageService(s3, properties);

    @org.junit.jupiter.params.ParameterizedTest
    @org.junit.jupiter.params.provider.ValueSource(strings = {"", "/dailytech", "/dailytech/"})
    void storesOriginalBytesWithServerGeneratedPath(String originPath) throws Exception {
        properties.setProfileImageBucket("tmm-nov");
        properties.setPublicBaseUrl("https://d2cn5yubgz8yjt.cloudfront.net");
        properties.setPublicOriginPath(originPath);
        var bytes = new ByteArrayOutputStream();
        var picture = new BufferedImage(2, 2, BufferedImage.TYPE_INT_RGB);
        var writer = ImageIO.getImageWritersByFormatName("jpeg").next();
        try (var output = ImageIO.createImageOutputStream(bytes)) {
            writer.setOutput(output);
            var metadata = writer.getDefaultImageMetadata(javax.imageio.ImageTypeSpecifier.createFromRenderedImage(picture), null);
            var tree = (javax.imageio.metadata.IIOMetadataNode) metadata.getAsTree("javax_imageio_jpeg_image_1.0");
            var comment = new javax.imageio.metadata.IIOMetadataNode("com");
            comment.setAttribute("comment", "Original metadata must survive upload");
            tree.getElementsByTagName("markerSequence").item(0).appendChild(comment);
            metadata.setFromTree("javax_imageio_jpeg_image_1.0", tree);
            writer.write(new javax.imageio.IIOImage(picture, null, metadata));
        } finally { writer.dispose(); }
        String url = storage.upload(7L, new MockMultipartFile("file", "../../evil.svg", "text/plain", bytes.toByteArray()));
        String viewerPrefix = originPath.isEmpty() ? "dailytech/img" : "img";
        assertTrue(url.matches("https://d2cn5yubgz8yjt.cloudfront.net/" + viewerPrefix + "/users/7/[a-f0-9-]+\\.jpg"));
        var body = org.mockito.ArgumentCaptor.forClass(RequestBody.class);
        verify(s3).putObject(argThat((PutObjectRequest request) -> request.bucket().equals("tmm-nov")
                && request.key().startsWith("dailytech/img/users/7/") && request.contentType().equals("image/jpeg")
                && request.acl() == null), body.capture());
        try (var uploaded = body.getValue().contentStreamProvider().newStream()) {
            assertArrayEquals(bytes.toByteArray(), uploaded.readAllBytes());
        }
    }

    @Test
    void mismatchedOriginStopsBeforeWritingAnObject() throws Exception {
        properties.setProfileImageBucket("tmm-nov");
        properties.setPublicBaseUrl("https://d2cn5yubgz8yjt.cloudfront.net");
        properties.setPublicOriginPath("/daily");
        var bytes = new ByteArrayOutputStream();
        ImageIO.write(new BufferedImage(2, 2, BufferedImage.TYPE_INT_RGB), "png", bytes);
        assertThrows(ProfileImageException.class, () -> storage.upload(7L,
                new MockMultipartFile("file", bytes.toByteArray())));
        verifyNoInteractions(s3);
    }

    @Test
    void rejectsInvalidAndOversizedFilesBeforeCallingS3() {
        assertThrows(ProfileImageException.class, () -> storage.upload(7L,
                new MockMultipartFile("file", "image.jpg", "image/jpeg", "not an image".getBytes())));
        MultipartFile large = mock(MultipartFile.class);
        when(large.getSize()).thenReturn(6L * 1024 * 1024);
        assertEquals(413, assertThrows(ProfileImageException.class, () -> storage.upload(7L, large)).getStatus().value());
        verifyNoInteractions(s3);
    }
}
