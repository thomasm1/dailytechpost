import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { pipe } from 'rxjs';
import { take } from 'rxjs/operators';

import { FirebaseAuthService } from './firebase-auth.service';
import { AwsAuthenticationService } from './aws-authentication.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers/app.reducer';

@Injectable({
  providedIn: 'root'
})
export class FirebaseGuardService  {
  constructor(
    private awsAuthService: AwsAuthenticationService,
    // private authService: FirebaseAuthService,
    private store: Store<fromRoot.State>,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // USER AUTH  ----------------------   ADMIN AUTH
    // if (this.authService.isAuth() || this.adminAuthService.isAdminLoggedIn()) {

    if (
      this.store.select(fromRoot.getIsAuth).pipe(take(1)) ||
      this.awsAuthService.isAdminLoggedIn()
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
