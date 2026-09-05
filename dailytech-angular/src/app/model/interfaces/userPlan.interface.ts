 
export interface UserPlan {
  userId: number;
  plan: UserPlanName;
  status: UserPlanStatus;
  effectiveFrom?: string | null;
  effectiveTo?: string | null;
  trialEnd?: string | null;
  graceEnd?: string | null;
  cancelAtPeriodEnd?: boolean | null;
}

export type UserPlanName = typeof UserPlanName[keyof typeof UserPlanName];
export const UserPlanName = {
  FREE: 'FREE',
  WHALE_WATCHER: 'WHALE_WATCHER',
  TOKEN_STALKER: 'TOKEN_STALKER',
  PREMIUM: 'PREMIUM',
} as const;


export type UserPlanStatus = typeof UserPlanStatus[keyof typeof UserPlanStatus];
export const UserPlanStatus = {
  ACTIVE: 'ACTIVE',
  TRIALING: 'TRIALING',
  PAST_DUE: 'PAST_DUE',
  PAUSED: 'PAUSED',
  CANCELED: 'CANCELED',
} as const;

export const USER_PLAN_ORDER: UserPlanName[] = [
  UserPlanName.FREE,
  UserPlanName.WHALE_WATCHER,
  UserPlanName.TOKEN_STALKER,
  UserPlanName.PREMIUM,
];

export function isPlanAtLeast(current: UserPlanName, required: UserPlanName): boolean {
  return USER_PLAN_ORDER.indexOf(current) >= USER_PLAN_ORDER.indexOf(required);
}

export function isUsablePlanStatus(status?: UserPlanStatus | null): boolean {
  return status === UserPlanStatus.ACTIVE || status === UserPlanStatus.TRIALING;
}

export function effectivePlanName(plan?: UserPlanName | UserPlan | null): UserPlanName {
  if (!plan) {
    return UserPlanName.FREE;
  }

  if (typeof plan === 'string') {
    return plan;
  }

  return isUsablePlanStatus(plan.status) ? plan.plan : UserPlanName.FREE;
}