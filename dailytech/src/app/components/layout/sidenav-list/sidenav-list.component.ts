import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HardcodedAuthService } from 'src/app/service/hardcoded-auth.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();


  variable: string = '';
  constructor(private route: ActivatedRoute, 
  public authService:HardcodedAuthService) { }

  ngOnInit()  {
     this.variable = this.route.snapshot.params['name'];
    // this.isAdminLoggedIn = this.authService.isAdminLoggedIn();
  }
  onClose() {
    this.closeSidenav.emit();
  }
}
