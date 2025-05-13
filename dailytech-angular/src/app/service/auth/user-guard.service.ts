import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanLoad,
  Route,
} from '@angular/router';
import { pipe } from 'rxjs';
import { take } from 'rxjs/operators';

import { JwtAuthService } from './jwt-auth.service';
import { AdminAuthenticationService } from './admin-authentication.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers/app.reducer';

@Injectable()
export class UserGuardService implements CanActivate, CanLoad {
  constructor(
    private adminAuthService: AdminAuthenticationService,
    // private authService: JwtAuthService,
    private store: Store<fromRoot.State>,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // USER AUTH  ----------------------   ADMIN AUTH
    // if (this.authService.isAuth() || this.adminAuthService.isAdminLoggedIn()) {

    if (
      this.store.select(fromRoot.getIsAuth).pipe(take(1)) ||
      this.adminAuthService.isAdminLoggedIn()
    ) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }
  canLoad(route: Route) {
    // if (this.authService.isAuth()) {
    //   return true;
    // } else {
    //   this.router.navigate(['/login']);
    // }
    if (this.store.select(fromRoot.getIsAuth).pipe(take(1))) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }
}
