import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';

import { JwtAuthService } from './jwt-auth.service';
import { AdminAuthenticationService } from './admin-authentication.service';

@Injectable()
export class UserGuardService implements CanActivate {

  constructor(
    private adminAuthService: AdminAuthenticationService,
    private authService: JwtAuthService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
        // USER AUTH  ----------------------   ADMIN AUTH 
    if (this.authService.isAuth() || this.adminAuthService.isAdminLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }
}
