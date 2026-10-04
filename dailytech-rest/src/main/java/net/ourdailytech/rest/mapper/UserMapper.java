package net.ourdailytech.rest.mapper;

import net.ourdailytech.rest.models.User;
import net.ourdailytech.rest.models.dto.UserDto;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring")
public interface UserMapper {

    @Mapping(target = "userPlan", ignore = true)
    User toEntity(UserDto userDto);

    @Mapping(target = "userPlan", expression = "java(net.ourdailytech.rest.models.UserPlanPolicy.currentPlan(user.getUserPlan()))")
    @Mapping(target = "posts", ignore = true)
    @Mapping(target = "planDetails", expression = "java(net.ourdailytech.rest.models.dto.UserPlanSummaryDto.from(user.getUserPlan()))")
    UserDto toDto(User user);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    @Mapping(target = "userId", ignore = true)
    @Mapping(target = "password", ignore = true)
    @Mapping(target = "userPlan", ignore = true)
    @Mapping(target = "authProvider", ignore = true)
    @Mapping(target = "authSubject", ignore = true)
    @Mapping(target = "posts", ignore = true)
    User partialUpdate(UserDto userDto, @MappingTarget User user);

    default net.ourdailytech.rest.util.enums.Plan currentPlan(net.ourdailytech.rest.models.UserPlan plan) {
        return net.ourdailytech.rest.models.UserPlanPolicy.currentPlan(plan);
    }
}
