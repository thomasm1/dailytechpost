package net.ourdailytech.rest.models;

import java.time.LocalDateTime;
import java.time.ZoneOffset;
import net.ourdailytech.rest.util.enums.BillingProvider;
import net.ourdailytech.rest.util.enums.Plan;
import net.ourdailytech.rest.util.enums.PlanStatus;

/** Pure entitlement calculation. Reading an account never rewrites billing history. */
public final class UserPlanPolicy {
    private UserPlanPolicy() {}
    public static Plan currentPlan(UserPlan plan) {
        LocalDateTime now = plan != null && plan.getBillingProvider() == BillingProvider.STRIPE
                ? LocalDateTime.now(ZoneOffset.UTC) : LocalDateTime.now();
        return currentPlan(plan, now);
    }
    public static Plan currentPlan(UserPlan plan, LocalDateTime now) {
        if (plan == null || plan.getPlan() == null) return Plan.FREE;
        if (plan.getEffectiveFrom() != null && plan.getEffectiveFrom().isAfter(now)) return Plan.FREE;
        if (plan.getEffectiveTo() != null && !plan.getEffectiveTo().isAfter(now)) return Plan.FREE;
        if (plan.getStatus() == PlanStatus.ACTIVE) {
            if (plan.getBillingProvider() == BillingProvider.STRIPE && plan.getEffectiveTo() == null) return Plan.FREE;
            return plan.getPlan();
        }
        if (plan.getStatus() == PlanStatus.TRIALING && plan.getTrialEnd() != null
                && plan.getTrialEnd().isAfter(now)) return plan.getPlan();
        return Plan.FREE;
    }
    public static void initializeFreePlan(User user) {
        if (user.getUserPlan() != null) return;
        UserPlan plan = new UserPlan();
        plan.setUser(user);
        plan.setPlan(Plan.FREE);
        plan.setStatus(PlanStatus.ACTIVE);
        plan.setEffectiveFrom(LocalDateTime.now());
        plan.setCancelAtPeriodEnd(false);
        user.setUserPlan(plan);
    }
}
