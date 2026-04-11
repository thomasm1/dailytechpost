import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { take, map } from 'rxjs/operators';

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
    return this.store.select(fromRoot.getIsAuth).pipe(
      take(1),
      map((isAuth) => {
        if (isAuth || this.awsAuthService.isAdminLoggedIn()) {
          return true;
        }
        return this.router.createUrlTree(['/login']);
      })
    );
  }
  canLoad(route: Route) {
    return this.store.select(fromRoot.getIsAuth).pipe(
      take(1),
      map((isAuth) => {
        if (isAuth || this.awsAuthService.isAdminLoggedIn()) {
          return true;
        }
        return this.router.createUrlTree(['/login']);
      })
    );
  }
}
