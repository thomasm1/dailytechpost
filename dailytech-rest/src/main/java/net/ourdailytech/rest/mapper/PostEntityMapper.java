package net.ourdailytech.rest.mapper;

import net.ourdailytech.rest.models.PostEntity;
import net.ourdailytech.rest.models.dto.PostEntityDto;
import net.ourdailytech.rest.models.dto.PostRequestDto;
import org.mapstruct.*;

import java.util.List;

@Mapper(
    unmappedTargetPolicy = ReportingPolicy.IGNORE,
    componentModel = "spring",
    nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE
)
public interface PostEntityMapper {

    @Mapping(target = "category", ignore = true) // handle separately if needed
    @Mapping(target = "user", ignore = true)     // handle separately
    @Mapping(target = "comments", ignore = true) // managed separately
    @Mapping(target = "weblinks", ignore = true) // managed separately
    PostEntity toEntity(PostEntityDto dto);

    @Mapping(target = "user", ignore = true)     // handle separately
    @Mapping(target = "comments", ignore = true) // managed separately
    @Mapping(target = "weblinks", ignore = true) // managed separately
    PostEntity requestToEntity(PostRequestDto dto);

    PostEntityDto toDto(PostEntity postEntity);

    @Mapping(target = "category", ignore = true) // PATCH does not change category
    @Mapping(target = "user", ignore = true)     // PATCH does not change user
    @Mapping(target = "comments", ignore = true) // PATCH does not change child comments
    @Mapping(target = "weblinks", ignore = true) // PATCH does not change child weblinks
    void partialUpdate(PostEntityDto dto, @MappingTarget PostEntity entity);
}