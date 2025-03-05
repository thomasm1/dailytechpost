package xyz.cryptomaven.stream.ourdailytech.mappers;

import xyz.cryptomaven.stream.ourdailytech.models.Category;
import xyz.cryptomaven.stream.ourdailytech.models.dto.CategoryDto;
import org.mapstruct.*;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = "spring")
public interface CategoryMapper {
    Category toEntity(CategoryDto categoryDto);

    CategoryDto toDto(Category category);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Category partialUpdate(CategoryDto categoryDto, @MappingTarget Category category);
}