package net.ourdailytech.rest.mapper;

import net.ourdailytech.rest.models.Book;
import net.ourdailytech.rest.models.dto.BookDto;
import org.mapstruct.*;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = "spring")
public interface BookMapper {
    Book toEntity(BookDto bookDto);

    BookDto toDto(Book book);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Book partialUpdate(BookDto bookDto, @MappingTarget Book book);
}