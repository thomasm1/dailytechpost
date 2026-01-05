import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AwsAuthenticationService } from './aws-authentication.service';

@Injectable({
  providedIn: 'root'
})

export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(
    private awsAuthenticationService: AwsAuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let adminAuthHeaderString = this.awsAuthenticationService.getAuthenticatedToken();
    let username = this.awsAuthenticationService.getAuthenticatedUser()

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
