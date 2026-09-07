import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, combineLatest, map, of, switchMap, tap, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { ProfileUpdate, UserProfile } from '../model/user-profile.model';
import { AuthPolicyService } from './auth/auth-policy.service';
import { AuthSessionStorageService } from './auth/auth-session-storage.service';

export interface ProfileState {
  profile: UserProfile | null;
  loading: boolean;
  error: string;
}

@Injectable({ providedIn: 'root' })
export class UserProfileService {
  private readonly state = new BehaviorSubject<ProfileState>({ profile: null, loading: false, error: '' });
  readonly state$ = this.state.asObservable();
  private readonly reload = new BehaviorSubject<void>(undefined);
  private readonly url = `${environment.API_URL}/users/me`;

  constructor(private http: HttpClient, private auth: AuthPolicyService, storage: AuthSessionStorageService) {
    // Switch accounts atomically and cancel pending reads on logout or provider changes.
    combineLatest([storage.changes$, this.reload]).pipe(
      switchMap(() => {
        if (!this.auth.isAuthenticated()) {
          return of<ProfileState>({ profile: null, loading: false, error: '' });
        }
        this.state.next({ profile: null, loading: true, error: '' });
        return this.http.get<UserProfile>(this.url).pipe(
          map(profile => ({ profile, loading: false, error: '' })),
          catchError(() => of<ProfileState>({ profile: null, loading: false, error: 'Unable to load your profile.' }))
        );
      })
    ).subscribe(state => this.state.next(state));
  }

  refresh(): void { this.reload.next(); }

  uploadImage(file: File) {
    const token = this.auth.getActiveToken();
    if (!token) return throwError(() => new Error('Please sign in again.'));
    const body = new FormData();
    body.append('file', file);
    // The browser sets the multipart boundary; the existing interceptor supplies authentication.
    return this.http.post<UserProfile>(`${this.url}/profile/image`, body).pipe(tap(profile => {
      if (token === this.auth.getActiveToken()) this.state.next({ profile, loading: false, error: '' });
    }));
  }

  update(change: ProfileUpdate) {
    const token = this.auth.getActiveToken();
    if (!token) return throwError(() => new Error('Please sign in again.'));
    // Only editable fields leave the browser. Identity, roles and billing stay server-owned.
    const { firstName, lastName, organizationCode, contactType, cusUrl } = change;
    return this.http.patch<UserProfile>(`${this.url}/profile`, {
      firstName, lastName, organizationCode, contactType, cusUrl
    }).pipe(tap(profile => {
      if (token === this.auth.getActiveToken()) {
        this.state.next({ profile, loading: false, error: '' });
      }
    }));
  }
}
