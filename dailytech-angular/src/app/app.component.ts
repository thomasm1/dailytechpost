import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { LoggingService } from './service/logging.service';
import { PwaUpdateService } from './service/pwa-update.service';
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
    private loggingService: LoggingService,
    private pwaUpdateService: PwaUpdateService,
    private store: Store<fromRoot.State>
    ) {
      this.isAppLoading$ = this.store.select(fromRoot.getIsLoading);
    }

  ngOnInit() {
    this.store.dispatch(new AuthActions.AuthInitListener());
    this.pwaUpdateService.initialize();
    this.loggingService.printLog('AppComponent ngOnInit'); 
  }

  private getGlobalSpinnerDiameter(): number {
    return Math.min(Math.max(window.innerWidth * 0.20, 80), 140);
  }
}
