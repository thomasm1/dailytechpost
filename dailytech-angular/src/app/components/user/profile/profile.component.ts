import { Component, DestroyRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CanActivateFn, CanDeactivateFn, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { UserProfile } from '../../../model/user-profile.model';
import { UserProfileService } from '../../../service/user-profile.service';
import { AuthPolicyService } from '../../../service/auth/auth-policy.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  readonly profiles = inject(UserProfileService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly fb = inject(FormBuilder);
  readonly form = this.fb.group({
    firstName: this.fb.nonNullable.control('', Validators.maxLength(255)),
    lastName: this.fb.nonNullable.control('', Validators.maxLength(255)),
    organizationCode: this.fb.nonNullable.control('', Validators.maxLength(255)),
    contactType: this.fb.control<number | null>(null, [Validators.min(0), Validators.max(2147483647), Validators.pattern(/^\d+$/)]),
    cusUrl: this.fb.nonNullable.control('', [Validators.maxLength(1024), Validators.pattern(/^https?:\/\/\S+$/i)])
  });
  profile: UserProfile | null = null;
  saving = false;
  uploading = false;
  // Profile survey answers are independent of the account's authorization roles.
  readonly roleOptions = [
    { value: '', label: 'Prefer not to say' }, { value: 'developer', label: 'Developer' },
    { value: 'student', label: 'Student' }, { value: 'teacher', label: 'Teacher' },
    { value: 'employee', label: 'Employee' }
  ];
  readonly contactOptions = [
    { value: 0, label: 'Prefer not to say' }, { value: 1, label: 'Web search' },
    { value: 2, label: 'Referred by friend' }, { value: 3, label: 'Other' }
  ];
  error = '';
  success = '';
  imageFailed = false;

  constructor() {
    this.profiles.state$.pipe(takeUntilDestroyed()).subscribe(state => {
      const changedUser = this.profile?.userId !== state.profile?.userId;
      this.profile = state.profile;
      if (changedUser || (!this.form.dirty && !this.saving)) this.reset();
    });
    this.form.valueChanges.pipe(takeUntilDestroyed()).subscribe(() => { this.success = ''; });
  }

  reset(): void {
    this.form.reset({
      firstName: this.profile?.firstName || '', lastName: this.profile?.lastName || '',
      organizationCode: this.profile?.organizationCode || '', contactType: this.profile?.contactType ?? 0,
      cusUrl: this.profile?.cusUrl || ''
    });
    this.error = '';
    this.success = '';
    this.imageFailed = false;
  }

  save(): void {
    if (!this.profile || this.form.invalid || this.saving || this.uploading || !this.form.dirty) return;
    this.saving = true;
    this.form.disable({ emitEvent: false });
    this.error = '';
    this.success = '';
    this.profiles.update(this.form.getRawValue()).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => {
        this.saving = false;
        this.form.enable({ emitEvent: false });
        this.reset();
        this.success = 'Profile updated.';
      },
      error: () => {
        this.saving = false;
        this.form.enable({ emitEvent: false });
        this.error = 'Profile could not be saved. Your changes are still here.';
      }
    });
  }

  get imageUrl(): string | null {
    const url = this.profile?.cusUrl || '';
    return !this.imageFailed && /^https?:\/\//i.test(url) ? url : null;
  }

  get legacyRole(): boolean {
    return !this.roleOptions.some(option => option.value === this.form.controls.organizationCode.value);
  }
  get legacyContact(): boolean {
    const value = this.form.controls.contactType.value;
    return value !== null && !this.contactOptions.some(option => option.value === value);
  }

  uploadImage(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file || this.saving || this.uploading) return;
    this.error = '';
    this.success = '';
    if (!['image/jpeg', 'image/png'].includes(file.type) || file.size > 5 * 1024 * 1024 || file.size === 0) {
      this.error = 'Choose a JPEG or PNG image, up to 5 MB.';
      input.value = '';
      return;
    }
    this.uploading = true;
    this.form.disable({ emitEvent: false });
    this.profiles.uploadImage(file).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: profile => {
        this.uploading = false;
        this.form.enable({ emitEvent: false });
        // The image is already saved; preserve any other unsaved profile fields.
        this.form.controls.cusUrl.setValue(profile.cusUrl || '');
        this.imageFailed = false;
        this.success = 'Profile image uploaded.';
        input.value = '';
      },
      error: error => {
        this.uploading = false;
        this.form.enable({ emitEvent: false });
        this.error = error.status === 413 ? 'Images must be 5 MB or smaller.'
          : error.status === 400 ? (error.error?.message || 'Choose a valid JPEG or PNG image.')
          : 'Image upload could not be confirmed.';
        input.value = '';
      }
    });
  }
}

export const profileGuard: CanActivateFn = () => inject(AuthPolicyService).isAuthenticated()
  ? true : inject(Router).createUrlTree(['/login']);

export const unsavedProfileGuard: CanDeactivateFn<ProfileComponent> = component =>
  !component.saving && !component.uploading && (!component.form.dirty || window.confirm('Discard unsaved profile changes?'));
