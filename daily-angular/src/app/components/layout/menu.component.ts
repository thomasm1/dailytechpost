import { Component, OnInit, EventEmitter, Output, OnDestroy} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AdminAuthenticationService } from '../../service/auth/admin-authentication.service';
import { JwtAuthService } from '../../service/auth/jwt-auth.service';
import { ActivatedRoute } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers/app.reducer';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit { //}, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();
  variable: string = '';

  // isAdminLoggedIn: boolean = false;
  // isAuth = false;
  isAuth$: Observable<boolean>;
  // authSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    public adminAuthService: AdminAuthenticationService,
    private jwtAuthService: JwtAuthService,
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this.variable = this.route.snapshot.params['name'];
    // this.isAdminLoggedIn = this.authService.isAdminLoggedIn();
    // this.authSubscription = this.jwtAuthService.authChange.subscribe(authStatus => {
    //   this.isAuth = authStatus;
    //   return this.isAuth;
    // })
    this.isAuth$ = this.store.select(fromRoot.getIsAuth);

  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  onLogout() {
    this.jwtAuthService.logout();
    this.adminAuthService.logout();

  }

  // ngOnDestroy() {
  //   this.authSubscription.unsubscribe();
  // }
}
