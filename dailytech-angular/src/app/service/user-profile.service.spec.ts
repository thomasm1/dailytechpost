import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserProfileService } from './user-profile.service';
import { AuthSessionStorageService } from './auth/auth-session-storage.service';
import { environment } from '../../environments/environment';

describe('UserProfileService', () => {
  let service: UserProfileService;
  let http: HttpTestingController;
  let storage: AuthSessionStorageService;
  const url = `${environment.API_URL}/users/me`;
  const profile = { userId: 7, email: 'reader@example.com', firstName: 'Reader', userPlan: 'FREE', roles: [] };

  beforeEach(() => {
    sessionStorage.clear();
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    http = TestBed.inject(HttpTestingController);
    storage = TestBed.inject(AuthSessionStorageService);
    service = TestBed.inject(UserProfileService);
  });
  afterEach(() => { http.verify(); sessionStorage.clear(); });

  it('does not request a profile for anonymous visitors', () => {
    http.expectNone(url);
    service.state$.subscribe(state => expect(state.profile).toBeNull());
  });

  for (const provider of ['aws', 'firebase'] as const) {
    it(`loads the same local profile for ${provider} and clears it on logout`, () => {
      storage.setActiveSession({ provider, email: profile.email, token: 'Bearer test', roles: ['ROLE_USER'] });
      http.expectOne(url).flush(profile);
      let current: any;
      service.state$.subscribe(state => current = state.profile);
      expect(current).toEqual(profile);
      storage.clearAll();
      expect(current).toBeNull();
      http.expectNone(url);
    });
  }

  it('cancels a pending account read when the active provider changes', () => {
    storage.setActiveSession({ provider: 'aws', email: profile.email, token: 'Bearer first', roles: [] });
    const first = http.expectOne(url);
    storage.setActiveSession({ provider: 'firebase', email: 'other@example.com', token: 'Bearer second', roles: [] });
    expect(first.cancelled).toBeTrue();
    http.expectOne(url).flush({ ...profile, email: 'other@example.com' });
  });

  it('sends only editable fields and updates the shared summary after saving', () => {
    storage.setActiveSession({ provider: 'aws', email: profile.email, token: 'Bearer test', roles: [] });
    http.expectOne(url).flush(profile);
    service.update({ firstName: 'Updated', lastName: '', organizationCode: '', contactType: 1, cusUrl: '',
      email: 'attacker@example.com', roles: ['ROLE_ADMIN'], userPlan: 'PREMIUM' } as any).subscribe();
    const patch = http.expectOne(`${url}/profile`);
    expect(patch.request.method).toBe('PATCH');
    expect(patch.request.body).toEqual({ firstName: 'Updated', lastName: '', organizationCode: '', contactType: 1, cusUrl: '' });
    patch.flush({ ...profile, firstName: 'Updated' });
    service.state$.subscribe(state => expect(state.profile?.firstName).toBe('Updated'));
  });

  it('can retry a failed read without changing sessions', () => {
    storage.setActiveSession({ provider: 'firebase', email: profile.email, token: 'Bearer test', roles: [] });
    http.expectOne(url).flush({}, { status: 503, statusText: 'Unavailable' });
    service.refresh();
    http.expectOne(url).flush(profile);
    service.state$.subscribe(state => expect(state.error).toBe(''));
  });

  it('uploads multipart data without supplying another account or a content-type boundary', () => {
    storage.setActiveSession({ provider: 'firebase', email: profile.email, token: 'Bearer test', roles: [] });
    http.expectOne(url).flush(profile);
    const file = new File(['image'], 'photo.png', { type: 'image/png' });
    service.uploadImage(file).subscribe();
    const upload = http.expectOne(`${url}/profile/image`);
    expect(upload.request.method).toBe('POST');
    expect(upload.request.body.get('file')).toBe(file);
    expect(upload.request.body.has('email')).toBeFalse();
    expect(upload.request.headers.has('Content-Type')).toBeFalse();
    upload.flush({ ...profile, cusUrl: 'https://example.com/photo.png' });
    service.state$.subscribe(state => expect(state.profile?.cusUrl).toBe('https://example.com/photo.png'));
  });
});
