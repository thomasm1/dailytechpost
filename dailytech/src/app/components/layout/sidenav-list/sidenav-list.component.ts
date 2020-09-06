import { Component, OnInit, Output, OnDestroy, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { HardcodedAuthService } from 'src/app/service/auth/hardcoded-auth.service';
import { JwtAuthService } from '../../../service/auth/jwt-auth.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  @Output() closeSidenav = new EventEmitter<void>();
  variable: string = '';

  // isAdminLoggedIn: boolean = false;
  isAuth: boolean = false;
  authSubscription: Subscription;

  constructor(private route: ActivatedRoute,
    public authService: HardcodedAuthService,
    private jwtAuthService: JwtAuthService) { }

  ngOnInit() {
    this.variable = this.route.snapshot.params['name'];
    // this.isAdminLoggedIn = this.authService.isAdminLoggedIn();
    this.authSubscription = this.jwtAuthService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    })
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  onClose() {
    this.closeSidenav.emit();
  }
  
  onLogout() {
    this.onClose();
    this.authService.logout();

    // BUG FIX TEMPORARY
    this.isAuth = false;
  }
}
