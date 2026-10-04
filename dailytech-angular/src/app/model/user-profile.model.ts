export type UserPlanName = 'FREE' | 'WHALE_WATCHER' | 'TOKEN_STALKER' | 'PREMIUM';
export type UserPlanStatus = 'ACTIVE' | 'TRIALING' | 'PAST_DUE' | 'PAUSED' | 'CANCELED';
export interface UserPlanSummary {
  plan: UserPlanName;
  status: UserPlanStatus | null;
  effectiveFrom?: string | null;
  effectiveTo?: string | null;
  trialEnd?: string | null;
  cancelAtPeriodEnd: boolean;
}

export interface UserProfile {
  userId: number;
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  organizationCode?: string | null;
  contactType?: number | null;
  cusUrl?: string | null;
  userPlan: UserPlanName;
  planDetails?: UserPlanSummary | null;
  isActive?: number;
  authProvider?: string;
  authSubject?: string;
  roles: { id: number; name: string }[];
}

export interface ProfileUpdate {
  firstName: string;
  lastName: string;
  organizationCode: string;
  contactType: number | null;
  cusUrl: string;
}
