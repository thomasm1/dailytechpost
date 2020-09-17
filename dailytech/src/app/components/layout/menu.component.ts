import { Component, OnInit, EventEmitter, Output, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminAuthenticationService } from '../../service/auth/admin-authentication.service';
import { JwtAuthService } from '../../service/auth/jwt-auth.service';
import { ActivatedRoute } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy { 
  @Output() sidenavToggle = new EventEmitter<void>();
  variable: string = '';

  // isAdminLoggedIn: boolean = false;
  isAuth = false;
  authSubscription: Subscription;

  constructor(private route: ActivatedRoute,
    public adminAuthService: AdminAuthenticationService,
    private jwtAuthService: JwtAuthService
  ) { }

  ngOnInit() {
    this.variable = this.route.snapshot.params['name'];
    // this.isAdminLoggedIn = this.authService.isAdminLoggedIn();
    this.authSubscription = this.jwtAuthService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    })
  }


  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  onLogout() {
    this.adminAuthService.logout();

    // BUG FIX TEMPORARY
    this.isAuth = false;
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
