import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { take, map } from 'rxjs/operators';

import { AuthPolicyService } from './auth-policy.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers/app.reducer';

@Injectable({
  providedIn: 'root'
})
export class FirebaseGuardService  {
constructor(
  private store: Store<fromRoot.State>,
  private authPolicy: AuthPolicyService,
  private router: Router
) {}

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  return this.store.select(fromRoot.getIsAuth).pipe(
    take(1),
    map((isAuth) => {
      if (isAuth && this.authPolicy.canAccessMember()) {
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
      if (isAuth && this.authPolicy.canAccessMember()) {
        return true;
      }

      return this.router.createUrlTree(['/login']);
    })
  );
}
}
