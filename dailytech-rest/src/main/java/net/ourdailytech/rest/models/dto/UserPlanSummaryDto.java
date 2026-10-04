package net.ourdailytech.rest.models.dto;

import java.time.LocalDateTime;
import net.ourdailytech.rest.models.UserPlan;
import net.ourdailytech.rest.util.enums.Plan;
import net.ourdailytech.rest.util.enums.PlanStatus;

/** Account-visible billing state; provider identifiers and webhook details stay private. */
public record UserPlanSummaryDto(Plan plan, PlanStatus status, LocalDateTime effectiveFrom,
        LocalDateTime effectiveTo, LocalDateTime trialEnd, boolean cancelAtPeriodEnd) {
    public static UserPlanSummaryDto from(UserPlan plan) {
        if (plan == null) return new UserPlanSummaryDto(Plan.FREE, PlanStatus.ACTIVE, null, null, null, false);
        return new UserPlanSummaryDto(plan.getPlan() == null ? Plan.FREE : plan.getPlan(),
                plan.getStatus(), plan.getEffectiveFrom(), plan.getEffectiveTo(), plan.getTrialEnd(),
                Boolean.TRUE.equals(plan.getCancelAtPeriodEnd()));
    }
}
