package net.ourdailytech.rest.service;

import java.io.ByteArrayInputStream;
// import java.io.ByteArrayOutputStream; // Used by the previous encoding implementation below.
import java.io.IOException;
import java.util.Locale;
import java.util.UUID;
import javax.imageio.ImageIO;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import software.amazon.awssdk.core.exception.SdkException;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;
import software.amazon.awssdk.services.s3.model.ServerSideEncryption;
import net.ourdailytech.rest.config.ProfileImageS3Config.Properties;
import net.ourdailytech.rest.exception.ProfileImageException;

@Service
public class ProfileImageStorageService {
    private static final long MAX_BYTES = 5 * 1024 * 1024;
    private final S3Client s3;
    private final Properties properties;
    public ProfileImageStorageService(S3Client s3, Properties properties) {
        this.s3 = s3;
        this.properties = properties;
    }

    public String upload(Long userId, MultipartFile file) {
        if (file == null || file.isEmpty()) throw invalid("Choose a JPEG or PNG image.");
        if (file.getSize() > MAX_BYTES) throw new ProfileImageException(HttpStatus.PAYLOAD_TOO_LARGE, "Images must be 5 MB or smaller.");
        byte[] content;
        String format;
        // Keep the original bytes, including EXIF orientation. Inspect the format without decoding pixels.
        try {
            content = file.getBytes();
            try (var input = ImageIO.createImageInputStream(new ByteArrayInputStream(content))) {
                var readers = ImageIO.getImageReaders(input);
                if (!readers.hasNext()) throw invalid("Choose a JPEG or PNG image.");
                var reader = readers.next();
                try {
                    format = reader.getFormatName().toLowerCase(Locale.ROOT);
                    if (!format.equals("jpeg") && !format.equals("png")) throw invalid("Only JPEG and PNG images are supported.");
                } finally { reader.dispose(); }
            }
        } catch (IOException exception) {
            throw invalid("Unable to read this image.");
        }

        /* Previous encoding implementation retained for reference.
         * It discarded EXIF orientation without rotating the stored pixels.
        // Decode and re-encode pixels; do not trust filenames, MIME headers or embedded metadata.
        try (var input = ImageIO.createImageInputStream(new ByteArrayInputStream(file.getBytes()))) {
            var readers = ImageIO.getImageReaders(input);
            if (!readers.hasNext()) throw invalid("Choose a valid JPEG or PNG image.");
            var reader = readers.next();
            try {
                reader.setInput(input);
                format = reader.getFormatName().toLowerCase(Locale.ROOT);
                if (!format.equals("jpeg") && !format.equals("png")) throw invalid("Only JPEG and PNG images are supported.");
                if ((long) reader.getWidth(0) * reader.getHeight(0) > 16_000_000) throw invalid("Images must be 16 megapixels or smaller.");
                var output = new ByteArrayOutputStream();
                if (!ImageIO.write(reader.read(0), format, output)) throw invalid("Unable to process this image.");
                content = output.toByteArray();
                if (content.length > MAX_BYTES) throw invalid("The processed image is too large. Choose a smaller image.");
            } finally { reader.dispose(); }
        } catch (IOException exception) {
            throw invalid("Unable to read this image.");
        }
        */
        String base = properties.getPublicBaseUrl().replaceAll("/+$", "");
        if (properties.getProfileImageBucket().isBlank() || !base.startsWith("https://")) {
            throw new ProfileImageException(HttpStatus.SERVICE_UNAVAILABLE, "Profile image storage is not configured.");
        }
        String prefix = properties.getProfileImagePrefix().replaceAll("/+$", "");
        if (!prefix.matches("[A-Za-z0-9/_-]+")) throw new ProfileImageException(HttpStatus.SERVICE_UNAVAILABLE, "Profile image storage is not configured.");
        String extension = format.equals("jpeg") ? "jpg" : "png";
        String key = prefix + "/users/" + userId + "/" + UUID.randomUUID() + "." + extension;
        // CloudFront prepends its Origin path. Strip it from the viewer URL, never the S3 key.
        String originPath = properties.getPublicOriginPath().replaceAll("^/+|/+$", "");
        if (!originPath.isEmpty() && !key.startsWith(originPath + "/")) {
            throw new ProfileImageException(HttpStatus.SERVICE_UNAVAILABLE, "Profile image origin path does not match the storage prefix.");
        }
        String viewerKey = originPath.isEmpty() ? key : key.substring(originPath.length() + 1);
        String url = base + "/" + viewerKey;
        if (url.length() > 1024) throw new ProfileImageException(HttpStatus.SERVICE_UNAVAILABLE, "Profile image URL configuration is too long.");
        try {
            s3.putObject(PutObjectRequest.builder().bucket(properties.getProfileImageBucket()).key(key)
                    .contentType("image/" + format).cacheControl("public, max-age=31536000")
                    .serverSideEncryption(ServerSideEncryption.AES256).build(), RequestBody.fromBytes(content));
        } catch (SdkException exception) {
            throw new ProfileImageException(HttpStatus.SERVICE_UNAVAILABLE, "Image storage is temporarily unavailable.");
        }
        return url;
    }

    private ProfileImageException invalid(String message) { return new ProfileImageException(HttpStatus.BAD_REQUEST, message); }
}
