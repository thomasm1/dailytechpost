import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';

import { AdminAuthenticationService } from './admin-authentication.service';

@Injectable({
  providedIn: 'root'
})

// ADMIN GUARD SERVICE
export class AdminGuardService implements CanActivate {

  constructor(
    private adminAuthService: AdminAuthenticationService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

      //  ADMIN AUTH
    if (this.adminAuthService.isAdminLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
