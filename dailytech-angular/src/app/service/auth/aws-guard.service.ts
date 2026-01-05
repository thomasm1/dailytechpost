import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';

import { AwsAuthenticationService } from './aws-authentication.service';

@Injectable({
  providedIn: 'root'
})

// ADMIN GUARD SERVICE
export class AwsGuardService implements CanActivate {

  constructor(
    private awsAuthService: AwsAuthenticationService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

      //  ADMIN AUTH
    if (this.awsAuthService.isAdminLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
