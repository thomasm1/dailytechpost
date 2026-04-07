package net.ourdailytech.rest.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;
import org.jspecify.annotations.Nullable;
import net.ourdailytech.rest.util.enums.Plan;
import net.ourdailytech.rest.util.enums.PlanStatus;
import net.ourdailytech.rest.util.enums.BillingProvider;

import jakarta.persistence.JoinColumn; 
import jakarta.persistence.OneToOne;
import jakarta.persistence.MapsId; 
 


@Entity
@Getter
@Setter
@AllArgsConstructor
@RequiredArgsConstructor
@SuperBuilder
@Table(
    name = "user_plan"
//    ,schema = "dailytech",
//    uniqueConstraints = {@UniqueConstraint(columnNames = {"userid"})}
)
public class UserPlan extends AbstractDomainClass {

    @Id
    @Column(name = "userid", nullable = false, unique = true)
    private Long userId;

    @Enumerated(EnumType.STRING)
    @Column(name = "plan")
    private Plan plan;

    @Enumerated(EnumType.STRING)
    private PlanStatus status;

    private java.time.LocalDateTime effectiveFrom;

    private java.time.LocalDateTime effectiveTo;

    private Boolean cancelAtPeriodEnd;

    @Enumerated(EnumType.STRING)
    private BillingProvider billingProvider;

    @Nullable
    private String providerCustomerId;

    @Nullable
    private String providerSubscriptionId;

    private String providerPriceId;

    private java.time.LocalDateTime lastEventAt; // last webhook processed-time from billing provider

    private java.time.LocalDateTime trialEnd;

    private java.time.LocalDateTime graceEnd;

    @OneToOne
    @MapsId
    @JoinColumn(name = "userid", referencedColumnName = "userid")
    private User user;

}  
// TODO // INDEX on status providerSubscriptionId, providerCustomerId for lookups
