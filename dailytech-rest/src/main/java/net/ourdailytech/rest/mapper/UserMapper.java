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

    @Mapping(target = "userPlan", expression = "java(currentPlan(user.getUserPlan()))")
    @Mapping(target = "posts", ignore = true)
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
        // Match CryptoMaven's entitlement rules without modifying billing rows during mapping.
        if (plan == null || plan.getPlan() == null) return net.ourdailytech.rest.util.enums.Plan.FREE;
        if (plan.getStatus() == net.ourdailytech.rest.util.enums.PlanStatus.ACTIVE) return plan.getPlan();
        if (plan.getStatus() == net.ourdailytech.rest.util.enums.PlanStatus.TRIALING
                && plan.getTrialEnd() != null && plan.getTrialEnd().isAfter(java.time.LocalDateTime.now())) {
            return plan.getPlan();
        }
        return net.ourdailytech.rest.util.enums.Plan.FREE;
    }
}
