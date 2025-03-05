package xyz.cryptomaven.stream.ourdailytech.models.dto;

import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link xyz.cryptomaven.stream.ourdailytech.models.Role}
 */
@Value
public class RoleDto implements Serializable {
    int id;
    String name;
    UserDto user;
}