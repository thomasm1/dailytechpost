import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AwsAuthenticationService } from './aws-authentication.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(
    private awsAuthenticationService: AwsAuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isDailyTechApiRequest(request.url)) {
      return next.handle(request);
    }

    if (request.headers.has('Authorization')) {
      return next.handle(request);
    }

    const adminAuthHeaderString = this.awsAuthenticationService.getAuthenticatedToken();
    const username = this.awsAuthenticationService.getAuthenticatedUser();

    if (adminAuthHeaderString && username) {
      request = request.clone({
        setHeaders: {
          Authorization: adminAuthHeaderString,
          Accept: 'application/json',
        }
      });
    }

    return next.handle(request);
  }

  private isDailyTechApiRequest(url: string): boolean {
    return url.startsWith('/api') || url.startsWith(environment.API_URL);
  }
}
