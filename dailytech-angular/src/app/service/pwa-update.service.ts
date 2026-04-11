import { Injectable } from '@angular/core';
import {
  SwUpdate,
  VersionDetectedEvent,
  VersionReadyEvent,
} from '@angular/service-worker';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { filter, interval } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PwaUpdateService {
  constructor(
    private readonly updates: SwUpdate,
    private readonly snackBar: MatSnackBar
  ) {}

  initialize(): void {
    if (!this.updates.isEnabled) {
      return;
    }

    this.updates.versionUpdates
      .pipe(
        filter(
          (event): event is VersionDetectedEvent | VersionReadyEvent =>
            event.type === 'VERSION_DETECTED' || event.type === 'VERSION_READY'
        )
      )
      .subscribe((event) => {
        if (event.type === 'VERSION_DETECTED') {
          console.info('Downloading new app version in the background.');
          return;
        }

        const snackBarRef = this.snackBar.open(
          'A new version is ready.',
          'Reload',
          {
            duration: 10000,
          }
        );

        snackBarRef.onAction().subscribe(() => {
          void this.updates.activateUpdate().then(() => document.location.reload());
        });
      });

    void this.updates.checkForUpdate();

    interval(6 * 60 * 60 * 1000).subscribe(() => {
      void this.updates.checkForUpdate();
    });
  }
}
