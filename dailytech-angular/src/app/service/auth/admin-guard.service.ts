import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthPolicyService } from './auth-policy.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuardService {
  constructor(
    private authPolicy: AuthPolicyService,
    private router: Router,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authPolicy.canAccessAdmin()) {
      return true;
    }

    return this.router.createUrlTree(['/login']);
  }
}