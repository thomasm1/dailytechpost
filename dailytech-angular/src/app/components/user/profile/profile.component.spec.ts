import { TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { ProfileComponent, profileGuard, unsavedProfileGuard } from './profile.component';
import { ProfileState, UserProfileService } from '../../../service/user-profile.service';
import { AuthPolicyService } from '../../../service/auth/auth-policy.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('ProfileComponent', () => {
  const profile = { userId: 7, email: 'reader@example.com', firstName: 'Reader', userPlan: 'FREE', roles: [{ id: 2, name: 'ROLE_USER' }] };
  let state: BehaviorSubject<ProfileState>;
  let service: any;
  beforeEach(async () => {
    state = new BehaviorSubject<ProfileState>({ profile, loading: false, error: '' });
    service = { state$: state.asObservable(), update: jasmine.createSpy('update'), refresh: jasmine.createSpy('refresh'), uploadImage: jasmine.createSpy('uploadImage') };
    await TestBed.configureTestingModule({
      imports: [ProfileComponent, NoopAnimationsModule, RouterTestingModule],
      providers: [{ provide: UserProfileService, useValue: service },
        { provide: AuthPolicyService, useValue: { isAuthenticated: () => false } }]
    }).compileComponents();
  });

  it('shows server identity and permits editing only profile fields', () => {
    const fixture = TestBed.createComponent(ProfileComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain(profile.email);
    expect(fixture.componentInstance.form.get('email')).toBeNull();
    expect(fixture.componentInstance.form.get('roles')).toBeNull();
    expect(fixture.componentInstance.form.get('userPlan')).toBeNull();
  });

  it('keeps unsaved values after a failed save and resets to the server values', () => {
    const component = TestBed.createComponent(ProfileComponent).componentInstance;
    component.form.controls.firstName.setValue('Edited');
    component.form.markAsDirty();
    service.update.and.returnValue(throwError(() => new Error('Unavailable')));
    component.save();
    expect(component.form.controls.firstName.value).toBe('Edited');
    expect(component.form.dirty).toBeTrue();
    expect(component.error).toContain('could not be saved');
    component.reset();
    expect(component.form.controls.firstName.value).toBe('Reader');
    expect(component.form.pristine).toBeTrue();
  });

  it('clears dirty state and shows success after saving', () => {
    const component = TestBed.createComponent(ProfileComponent).componentInstance;
    component.form.controls.firstName.setValue('Edited');
    component.form.markAsDirty();
    service.update.and.callFake(() => {
      state.next({ profile: { ...profile, firstName: 'Edited' }, loading: false, error: '' });
      return of({ ...profile, firstName: 'Edited' });
    });
    component.save();
    expect(component.form.pristine).toBeTrue();
    expect(component.success).toBe('Profile updated.');
  });

  it('rejects invalid URLs and guards unsaved changes', () => {
    const component = TestBed.createComponent(ProfileComponent).componentInstance;
    component.form.controls.cusUrl.setValue('javascript:alert(1)');
    component.form.markAsDirty();
    expect(component.form.invalid).toBeTrue();
    spyOn(window, 'confirm').and.returnValue(false);
    expect((unsavedProfileGuard as any)(component)).toBeFalse();
    component.save();
    expect(service.update).not.toHaveBeenCalled();
  });

  it('redirects anonymous visitors to login', () => {
    const result = TestBed.runInInjectionContext(() => (profileGuard as any)());
    expect(TestBed.inject(Router).serializeUrl(result)).toBe('/login');
  });

  it('offers the role and referral values without replacing legacy data', () => {
    const component = TestBed.createComponent(ProfileComponent).componentInstance;
    expect(component.roleOptions.map(option => option.value)).toEqual(['', 'developer', 'student', 'teacher', 'employee']);
    expect(component.contactOptions.map(option => option.value)).toEqual([0, 1, 2, 3]);
    component.form.patchValue({ organizationCode: 'ORG001', contactType: 101 });
    expect(component.legacyRole).toBeTrue();
    expect(component.legacyContact).toBeTrue();
  });

  it('shows the uploaded photo without losing unsaved names', () => {
    const component = TestBed.createComponent(ProfileComponent).componentInstance;
    component.form.controls.firstName.setValue('Unsaved');
    component.form.markAsDirty();
    const updated = { ...profile, cusUrl: 'https://tmm-nov.s3.amazonaws.com/img/_dailytech/users/7/photo.jpg' };
    service.uploadImage.and.callFake(() => {
      state.next({ profile: updated, loading: false, error: '' });
      return of(updated);
    });
    component.uploadImage({ target: { files: [new File(['test'], 'photo.jpg', { type: 'image/jpeg' })], value: '' } } as any);
    expect(component.form.controls.firstName.value).toBe('Unsaved');
    expect(component.form.dirty).toBeTrue();
    expect(component.imageUrl).toBe(updated.cusUrl);
    expect(component.form.controls.cusUrl.value).toBe(updated.cusUrl);
    expect(component.uploading).toBeFalse();
  });

  it('rejects unsupported files before upload', () => {
    const component = TestBed.createComponent(ProfileComponent).componentInstance;
    component.uploadImage({ target: { files: [new File(['svg'], 'image.svg', { type: 'image/svg+xml' })], value: '' } } as any);
    expect(service.uploadImage).not.toHaveBeenCalled();
    expect(component.error).toContain('JPEG or PNG');
  });
});
