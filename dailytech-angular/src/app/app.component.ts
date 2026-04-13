import { Component, OnInit } from '@angular/core';

import { KeysService } from './service/keys.service';
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

  constructor(
    private keysService: KeysService, 
    private loggingService: LoggingService,
    private pwaUpdateService: PwaUpdateService,
    private store: Store<fromRoot.State>
    ) {}

  ngOnInit() {
    this.store.dispatch(new AuthActions.AuthInitListener());
    this.keysService.getGoogleApi(); 
    this.pwaUpdateService.initialize();
    this.loggingService.printLog('AppComponent ngOnInit'); 
  }
}
