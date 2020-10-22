import { Component, OnInit } from '@angular/core';
import { JwtAuthService } from './service/auth/jwt-auth.service';
import { KeysService } from './service/keys.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Dailytech Modal';

  constructor(
    private authService: JwtAuthService,
    private keysService: KeysService
    ) {}

  ngOnInit() {
    this.authService.initAuthListener();
    this.keysService.getGoogleApi();

  }
}
