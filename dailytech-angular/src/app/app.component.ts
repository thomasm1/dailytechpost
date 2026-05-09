import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { KeysService } from './service/keys.service';
import { LoggingService } from './service/logging.service';
import { PwaUpdateService } from './service/pwa-update.service';
import { UiService } from './service/ui.service';
import { Store } from '@ngrx/store';
import * as fromRoot from './reducers/app.reducer';
import * as AuthActions from './reducers/auth.actions';


@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Dailytech Modal';
  isAppLoading$: Observable<boolean>;
  globalSpinnerDiameter = this.getGlobalSpinnerDiameter();

  constructor(
    private keysService: KeysService, 
    private loggingService: LoggingService,
    private pwaUpdateService: PwaUpdateService,
    private store: Store<fromRoot.State>,
    private uiService: UiService
    ) {
      this.isAppLoading$ = combineLatest([
        this.store.select(fromRoot.getIsLoading),
        this.uiService.loadingStateChanged
      ]).pipe(
        map(([storeLoading, serviceLoading]) => storeLoading || serviceLoading)
      );
    }

  ngOnInit() {
    this.store.dispatch(new AuthActions.AuthInitListener());
    this.keysService.getGoogleApi(); 
    this.pwaUpdateService.initialize();
    this.loggingService.printLog('AppComponent ngOnInit'); 
  }

  private getGlobalSpinnerDiameter(): number {
    return Math.min(Math.max(window.innerWidth * 0.20, 80), 140);
  }
}
