package net.ourdailytech.rest.mapper;

import net.ourdailytech.rest.models.Weblink;
import net.ourdailytech.rest.models.dto.WeblinkDto;
import org.mapstruct.*;

import java.util.Optional;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = "spring")
public interface WeblinkMapper {
    Weblink toEntity(WeblinkDto weblinkDto);
    WeblinkDto toDto(Optional<Weblink> weblink);
    WeblinkDto toDto(Weblink weblink); // <-- Add this
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Weblink partialUpdate(WeblinkDto weblinkDto, @MappingTarget Weblink weblink);
}