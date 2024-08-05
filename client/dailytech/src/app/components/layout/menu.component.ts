import { Component, OnInit } from '@angular/core';
import { HardcodedAuthService } from 'src/app/service/hardcoded-auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // isAdminLoggedIn: boolean = false;

  variable: string = '';
  constructor(private route: ActivatedRoute, 
  public authService:HardcodedAuthService) { }

  ngOnInit() {
    this.variable = this.route.snapshot.params['name'];
    // this.isAdminLoggedIn = this.authService.isAdminLoggedIn();
  }

}
