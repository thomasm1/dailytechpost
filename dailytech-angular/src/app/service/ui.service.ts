import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';

@Injectable()
export class UiService {

  loadingStateChanged = new BehaviorSubject<boolean>(false);
  private activeLoads = 0;
  private loadingStartedAt = 0;
  private stopTimerId: ReturnType<typeof setTimeout> | null = null;
  private readonly minimumVisibleMs = 400;
  
  constructor(private snackBar: MatSnackBar) {}

  startLoading(): void {
    if (this.stopTimerId) {
      clearTimeout(this.stopTimerId);
      this.stopTimerId = null;
    }

    this.activeLoads++;
    if (!this.loadingStateChanged.value) {
      this.loadingStartedAt = Date.now();
    }
    this.loadingStateChanged.next(true);
  }

  stopLoading(): void {
    this.activeLoads = Math.max(0, this.activeLoads - 1);
    if (this.activeLoads > 0) {
      this.loadingStateChanged.next(true);
      return;
    }

    const visibleForMs = Date.now() - this.loadingStartedAt;
    const remainingMs = Math.max(0, this.minimumVisibleMs - visibleForMs);

    if (remainingMs === 0) {
      this.loadingStateChanged.next(false);
      return;
    }

    this.stopTimerId = setTimeout(() => {
      this.stopTimerId = null;
      if (this.activeLoads === 0) {
        this.loadingStateChanged.next(false);
      }
    }, remainingMs);
  }

  setLoading(isLoading: boolean): void {
    if (isLoading) {
      if (this.activeLoads === 0) {
        this.startLoading();
        return;
      }

      this.loadingStateChanged.next(true);
      return;
    }

    this.activeLoads = Math.max(1, this.activeLoads);
    this.stopLoading();
  }

  showSnackBar(message, action, duration) {
    this.snackBar.open(message, action, {
      duration: duration
    });
  }
}
