package net.ourdailytech.rest.models.dto;

import jakarta.validation.constraints.Size;

import jakarta.validation.constraints.Pattern;

import jakarta.validation.constraints.Min;

import lombok.Data;

// Shared by self-service and ADMIN profile updates; identity, roles and billing are excluded.
@Data
public class UserProfileUpdateDto {
    @Size(max = 255)
    private String firstName;
    @Size(max = 255)
    private String lastName;
    @Size(max = 255)
    private String organizationCode;
    @Min(0)
    private Integer contactType;
    @Size(max = 1024)
    @Pattern(regexp = "(?i)^$|^https?://[^\\s]+$", message = "Image URL must use HTTP or HTTPS")
    private String cusUrl;
}
