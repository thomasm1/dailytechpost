package net.ourdailytech.rest.models.dto;

import lombok.Data;

// Shared by self-service and ADMIN profile updates; identity, roles and billing are excluded.
@Data
public class UserProfileUpdateDto {
    private String firstName;
    private String lastName;
    private String organizationCode;
    private Integer contactType;
    private String cusUrl;
}
