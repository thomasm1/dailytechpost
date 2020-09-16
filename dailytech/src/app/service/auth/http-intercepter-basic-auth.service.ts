import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AdminAuthenticationService } from './admin-authentication.service';

@Injectable({
  providedIn: 'root'
})

export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(
    private basicAuthenticationService: AdminAuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) { 
    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser()

    if (basicAuthHeaderString && username) {
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      })
    }

      return next.handle(request);

    }
  }
