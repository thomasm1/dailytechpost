import { Component, OnInit, EventEmitter , Output, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminAuthenticationService } from '../../../service/auth/admin-authentication.service';
import { JwtAuthService } from '../../../service/auth/jwt-auth.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  @Output() closeSidenav = new EventEmitter<void>();
  variable: string = '';

  // isAdminLoggedIn: boolean = false;
  isAuth: boolean = false;
  authSubscription: Subscription;

  constructor(private route: ActivatedRoute,
    public adminAuthService: AdminAuthenticationService,
    private jwtAuthService: JwtAuthService) { }

  ngOnInit() {
    this.variable = this.route.snapshot.params['name'];
    // this.isAdminLoggedIn = this.authService.isAdminLoggedIn();
    this.authSubscription = this.jwtAuthService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    })
  }


  onClose() {
    this.closeSidenav.emit();
  }
  
  onLogout() {
    this.onClose();
    this.adminAuthService.logout();

    // BUG FIX TEMPORARY
    this.isAuth = false;
  }
  
  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
