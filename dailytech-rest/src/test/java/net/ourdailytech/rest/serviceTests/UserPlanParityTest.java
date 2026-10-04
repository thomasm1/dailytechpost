package net.ourdailytech.rest.serviceTests;

import static org.junit.jupiter.api.Assertions.*;
import java.time.LocalDateTime;
import net.ourdailytech.rest.models.*;
import net.ourdailytech.rest.models.dto.UserPlanSummaryDto;
import net.ourdailytech.rest.mapper.UserMapper;
import net.ourdailytech.rest.util.enums.*;
import org.junit.jupiter.api.Test;
import org.mapstruct.factory.Mappers;

class UserPlanParityTest {
    private final LocalDateTime now = LocalDateTime.of(2026, 10, 3, 12, 0);
    @Test void missingPlansAreFreeAndAllSuspendedStatusesDenyAccess() {
        assertEquals(Plan.FREE, UserPlanPolicy.currentPlan(null, now));
        for (var status : new PlanStatus[]{PlanStatus.PAST_DUE, PlanStatus.PAUSED, PlanStatus.CANCELED}) {
            assertEquals(Plan.FREE, UserPlanPolicy.currentPlan(UserPlan.builder().plan(Plan.PREMIUM).status(status).build(), now));
        }
    }
    @Test void exactTrialAndPeriodBoundariesDenyAccessWithoutChangingHistory() {
        var plan = UserPlan.builder().plan(Plan.PREMIUM).status(PlanStatus.TRIALING).trialEnd(now).build();
        assertEquals(Plan.FREE, UserPlanPolicy.currentPlan(plan, now));
        assertEquals(Plan.PREMIUM, plan.getPlan());
        assertEquals(PlanStatus.TRIALING, plan.getStatus());
        plan.setTrialEnd(now.plusSeconds(1));
        assertEquals(Plan.PREMIUM, UserPlanPolicy.currentPlan(plan, now));
        plan.setStatus(PlanStatus.ACTIVE); plan.setBillingProvider(BillingProvider.STRIPE);
        assertEquals(Plan.FREE, UserPlanPolicy.currentPlan(plan, now));
        plan.setEffectiveTo(now);
        assertEquals(Plan.FREE, UserPlanPolicy.currentPlan(plan, now));
        plan.setEffectiveTo(now.plusSeconds(1)); plan.setCancelAtPeriodEnd(true);
        assertEquals(Plan.PREMIUM, UserPlanPolicy.currentPlan(plan, now));
        plan.setEffectiveFrom(now.plusSeconds(1));
        assertEquals(Plan.FREE, UserPlanPolicy.currentPlan(plan, now));
    }
    @Test void accountPayloadShowsEffectivePlanAndPreservesSanitizedStatus() throws Exception {
        var plan = UserPlan.builder().plan(Plan.PREMIUM).status(PlanStatus.PAST_DUE)
                .providerCustomerId("private-customer").providerSubscriptionId("private-subscription").build();
        var result = Mappers.getMapper(UserMapper.class).toDto(User.builder().userPlan(plan).build());
        assertEquals(Plan.FREE, result.getUserPlan());
        assertEquals(PlanStatus.PAST_DUE, result.getPlanDetails().status());
        var json = new com.fasterxml.jackson.databind.ObjectMapper().writeValueAsString(result.getPlanDetails());
        assertFalse(json.contains("provider"));
        assertFalse(json.contains("private-"));
    }
}
