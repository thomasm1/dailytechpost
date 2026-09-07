import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { UserProfileService } from '../../../service/user-profile.service';

@Component({
  selector: 'app-profile-summary',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  template: `
    <ng-container *ngIf="profiles.state$ | async as state">
      <a *ngIf="state.loading || state.error" routerLink="/profile"><mat-icon>account_circle</mat-icon>Profile</a>
      <a *ngIf="state.profile as profile" routerLink="/profile" aria-label="View and edit profile">
        <img *ngIf="imageUrl(profile.cusUrl) as photo; else avatar" [src]="photo" alt="" referrerpolicy="no-referrer" (error)="failedImage = photo">
        <ng-template #avatar><mat-icon aria-hidden="true">account_circle</mat-icon></ng-template>
        <span class="name">{{ profile.firstName || profile.email }} {{ profile.lastName || '' }}</span>
        <span class="email" *ngIf="profile.firstName">{{ profile.email }}</span>
        <span>{{ profile.userPlan }} plan</span>
        <span *ngFor="let role of profile.roles">{{ role.name.replace('ROLE_', '') }}</span>
        <mat-icon aria-hidden="true">chevron_right</mat-icon>
      </a>
    </ng-container>
  `,
  styles: [`
    :host { display: block; }
    a { display: flex; flex-wrap: wrap; align-items: center; gap: 8px 16px; padding: 8px 20px;
      background: #e9f0f2; color: #243d48; font-size: 13px; text-decoration: none; border-bottom: 1px solid #cad8df; }
    a:hover, a:focus-visible { background: #dcebf0; }
    .name { font-weight: 600; }
    span { overflow-wrap: anywhere; min-width: 0; }
    mat-icon { flex: 0 0 24px; }
    img { width: 24px; height: 24px; flex: 0 0 24px; object-fit: cover; border-radius: 4px; }
    @media (max-width: 600px) { .email { display: none; } a { gap: 6px 10px; padding: 8px 16px; } }
  `]
})
export class ProfileSummaryComponent {
  readonly profiles = inject(UserProfileService);
  failedImage = '';
  imageUrl(url?: string | null): string | null {
    return url && url !== this.failedImage && /^https?:\/\//i.test(url) ? url : null;
  }
}
