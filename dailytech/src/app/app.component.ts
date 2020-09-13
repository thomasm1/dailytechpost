import { Component, OnInit } from '@angular/core';
import { JwtAuthService } from './service/auth/jwt-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: JwtAuthService) {}

  title = 'Dailytech Modal';
 
  ngOnInit() {
    this.authService.initAuthListener();
  }
}