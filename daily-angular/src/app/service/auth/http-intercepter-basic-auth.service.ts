import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AdminAuthenticationService } from './admin-authentication.service';

@Injectable({
  providedIn: 'root'
})

export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(
    private adminAuthenticationService: AdminAuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let adminAuthHeaderString = this.adminAuthenticationService.getAuthenticatedToken();
    let username = this.adminAuthenticationService.getAuthenticatedUser()

    if (adminAuthHeaderString && username) {
      request = request.clone({
        setHeaders: {
          Authorization: adminAuthHeaderString,
          Accept: 'application/json',
        }
      })
    }

      return next.handle(request);

    }
  }
