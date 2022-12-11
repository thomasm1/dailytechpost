import { Component, OnInit } from '@angular/core';
import { NasaService } from './components/nasa/nasa.service';

import { JwtAuthService } from './service/auth/jwt-auth.service';
import { KeysService } from './service/keys.service';
import { LoggingService } from './service/logging.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Dailytech Modal';

  constructor(
    private authService: JwtAuthService,
    private keysService: KeysService,
    private nasaKey:NasaService,
    private loggingService: LoggingService,
    ) {}

  ngOnInit() {
    this.authService.initAuthListener();
    this.keysService.getGoogleApi();
    this.nasaKey.getNasaKey();
    this.loggingService.printLog('AppComponent ngOnInit'); 
  }
}
