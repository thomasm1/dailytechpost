import { Component, OnInit } from '@angular/core';
import { JwtAuthService } from './service/auth/jwt-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Dailytech Modal';

  constructor(private authService: JwtAuthService) {}

  ngOnInit() {
    this.authService.initAuthListener();
    this.authService.getGoogleApi();

  }
}
