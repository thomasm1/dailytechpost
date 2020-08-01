import { Component, OnInit } from '@angular/core';
import { HardcodedAuthService } from 'src/app/service/hardcoded-auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [` 
    .monoton {
    font-family: Monoton;
    }
    .daily-title {
      color:rgb(61, 43, 226);
    }
  
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 8px 0;
    }

    p {
      margin: 0;
    }

    .spacer {
      flex: 1;
    }

    .toolbar {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 80px;
      display: flex;
      align-items: center;
      background-color: #1976d2;
      color: white;
      font-weight: 400;
    }

    .toolbar img {
      margin: 0 16px;
    }

    .toolbar #twitter-logo {
      height: 40px;
      margin: 0 16px;
    }

    .toolbar #twitter-logo:hover {
      opacity: 0.8;
    } 
    a,
    a:visited,
    a:hover {
      color: #1976d2;
      text-decoration: none;
    }

    a:hover {
      color: #125699;
    } 
    `]
})
export class MenuComponent implements OnInit {
  // isAdminLoggedIn: boolean = false;

  constructor(public authService:HardcodedAuthService) { }

  ngOnInit() {
    // this.isAdminLoggedIn = this.authService.isAdminLoggedIn();
  }

}
