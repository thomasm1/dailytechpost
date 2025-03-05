package xyz.cryptomaven.stream.ourdailytech.mappers;

import xyz.cryptomaven.stream.ourdailytech.models.News;
import xyz.cryptomaven.stream.ourdailytech.models.dto.NewsDto;
import org.mapstruct.*;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = MappingConstants.ComponentModel.SPRING, uses = {CategoryMapper.class})
public interface NewsMapper {
    News toEntity(NewsDto newsDto);

    NewsDto toDto(News news);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    News partialUpdate(NewsDto newsDto, @MappingTarget News news);
}