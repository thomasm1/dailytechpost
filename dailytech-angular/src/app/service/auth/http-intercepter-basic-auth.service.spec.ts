import { TestBed } from '@angular/core/testing';
import { HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';
import { of } from 'rxjs';

import { HttpIntercepterBasicAuthService } from './http-intercepter-basic-auth.service';
import { AwsAuthenticationService } from './aws-authentication.service';

describe('HttpIntercepterBasicAuthService', () => {
  let service: HttpIntercepterBasicAuthService;
  let awsAuthService: jasmine.SpyObj<AwsAuthenticationService>;

  beforeEach(() => {
    awsAuthService = jasmine.createSpyObj<AwsAuthenticationService>('AwsAuthenticationService', [
      'getAuthenticatedToken',
      'getAuthenticatedUser',
    ]);

    TestBed.configureTestingModule({
      providers: [
        {
          provide: AwsAuthenticationService,
          useValue: awsAuthService,
        },
      ],
    });
    service = TestBed.inject(HttpIntercepterBasicAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should attach the bearer token when a user session exists', () => {
    awsAuthService.getAuthenticatedToken.and.returnValue('Bearer firebase-token');
    awsAuthService.getAuthenticatedUser.and.returnValue('writer@example.com');
    const request = new HttpRequest('GET', '/api/news/me/category/10');
    const next = jasmine.createSpyObj<HttpHandler>('HttpHandler', ['handle']);
    next.handle.and.returnValue(of({} as any));

    service.intercept(request, next);

    const handledRequest = next.handle.calls.mostRecent().args[0] as HttpRequest<any>;
    expect(handledRequest.headers.get('Authorization')).toBe('Bearer firebase-token');
    expect(handledRequest.headers.get('Accept')).toBe('application/json');
  });

  it('should not overwrite an existing authorization header', () => {
    awsAuthService.getAuthenticatedToken.and.returnValue('Bearer stale-session-token');
    awsAuthService.getAuthenticatedUser.and.returnValue('writer@example.com');
    const request = new HttpRequest('POST', '/api/news', {}, {
      headers: new HttpHeaders({
        Authorization: 'Bearer fresh-firebase-token'
      })
    });
    const next = jasmine.createSpyObj<HttpHandler>('HttpHandler', ['handle']);
    next.handle.and.returnValue(of({} as any));

    service.intercept(request, next);

    const handledRequest = next.handle.calls.mostRecent().args[0] as HttpRequest<any>;
    expect(handledRequest.headers.get('Authorization')).toBe('Bearer fresh-firebase-token');
    expect(handledRequest.headers.get('Accept')).toBeNull();
  });
});
