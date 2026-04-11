import { Component, OnInit } from '@angular/core';
 
import { FirebaseAuthService } from './service/auth/firebase-auth.service';
import { KeysService } from './service/keys.service';
import { LoggingService } from './service/logging.service';
import { PwaUpdateService } from './service/pwa-update.service';


@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Dailytech Modal';

  constructor(
    private authService: FirebaseAuthService,
    private keysService: KeysService, 
    private loggingService: LoggingService,
    private pwaUpdateService: PwaUpdateService,
    ) {}

  ngOnInit() {
    this.authService.initAuthListener();
    this.keysService.getGoogleApi(); 
    this.pwaUpdateService.initialize();
    this.loggingService.printLog('AppComponent ngOnInit'); 
  }
}
