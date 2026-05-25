package net.ourdailytech.rest.mapper;

import net.ourdailytech.rest.models.Link;
import net.ourdailytech.rest.models.dto.LinkDto;
import org.mapstruct.*;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = MappingConstants.ComponentModel.SPRING, uses = {CategoryMapper.class})
public interface LinkMapper {
    Link toEntity(LinkDto linkDto);

    @Mapping(target = "categoryId", expression = "java(link.getCategory() != null ? link.getCategory().getId() : null)")
    LinkDto toDto(Link link);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Link partialUpdate(LinkDto linkDto, @MappingTarget Link link);
}
