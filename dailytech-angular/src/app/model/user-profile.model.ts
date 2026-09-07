export interface UserProfile {
  userId: number;
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  organizationCode?: string | null;
  contactType?: number | null;
  cusUrl?: string | null;
  userPlan: string;
  roles: { id: number; name: string }[];
}

export interface ProfileUpdate {
  firstName: string;
  lastName: string;
  organizationCode: string;
  contactType: number | null;
  cusUrl: string;
}
