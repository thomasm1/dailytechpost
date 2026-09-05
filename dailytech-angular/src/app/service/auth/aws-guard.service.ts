import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthPolicyService } from './auth-policy.service';
@Injectable({
  providedIn: 'root'
})

// ADMIN GUARD SERVICE
export class AwsGuardService  {

constructor(
  private authPolicy: AuthPolicyService,
  private router: Router
) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

      //  ADMIN AUTH
  if (this.authPolicy.canAccessAdmin()) {
    return true;
  }

  this.router.navigate(['/login']);
  return false;
  }
}
