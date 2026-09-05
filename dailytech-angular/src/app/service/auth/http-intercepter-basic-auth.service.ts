import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthPolicyService } from './auth-policy.service';

@Injectable({
  providedIn: 'root',
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {
  constructor(private authPolicy: AuthPolicyService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isDailyTechApiRequest(request.url)) {
      return next.handle(request);
    }

    if (request.headers.has('Authorization')) {
      return next.handle(request);
    }

    const token = this.authPolicy.getActiveToken();

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: token,
          Accept: 'application/json',
        },
      });
    }

    return next.handle(request);
  }

  private isDailyTechApiRequest(url: string): boolean {
    return url.startsWith('/api') || url.startsWith(environment.API_URL);
  }
}