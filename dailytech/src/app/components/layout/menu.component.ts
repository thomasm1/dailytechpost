import { Component, OnInit } from '@angular/core';
import { HardcodedAuthService } from 'src/app/service/hardcoded-auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // isAdminLoggedIn: boolean = false;

  constructor(public authService:HardcodedAuthService) { }

  ngOnInit() {
    // this.isAdminLoggedIn = this.authService.isAdminLoggedIn();
  }

}
