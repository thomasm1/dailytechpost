export type AuthProvider = 'aws' | 'firebase' | 'cognito' | 'google';

export interface AuthSession {
  provider: AuthProvider;
  email: string;
  token: string;
  roles: string[];
  issuedAt?: number;
  expiresAt?: number;
  uid?: string;
  userId?: number;
}

export const ACTIVE_AUTH_PROVIDER_KEY = 'dailytech.auth.activeProvider';

export const AUTH_SESSION_KEYS: Record<AuthProvider, string> = {
  aws: 'dailytech.auth.aws',
  firebase: 'dailytech.auth.firebase',
  cognito: 'dailytech.auth.cognito',
  google: 'dailytech.auth.google',
};