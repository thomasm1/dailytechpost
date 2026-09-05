import { TestBed } from '@angular/core/testing';
import { HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';
import { of } from 'rxjs';

import { HttpIntercepterBasicAuthService } from './http-intercepter-basic-auth.service';
import { AuthPolicyService } from './auth-policy.service';
import { environment } from '../../../environments/environment';

describe('HttpIntercepterBasicAuthService', () => {
  let service: HttpIntercepterBasicAuthService;
  let authPolicy: jasmine.SpyObj<AuthPolicyService>;

  beforeEach(() => {
    authPolicy = jasmine.createSpyObj<AuthPolicyService>('AuthPolicyService', [
      'getActiveToken',
    ]);

    TestBed.configureTestingModule({
      providers: [
        {
          provide: AuthPolicyService,
          useValue: authPolicy,
        },
      ],
    });
    service = TestBed.inject(HttpIntercepterBasicAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should attach the bearer token when a user session exists', () => {
    authPolicy.getActiveToken.and.returnValue('Bearer firebase-token');
    const request = new HttpRequest('GET', '/api/links/me/category/10');
    const next = jasmine.createSpyObj<HttpHandler>('HttpHandler', ['handle']);
    next.handle.and.returnValue(of({} as any));

    service.intercept(request, next);

    const handledRequest = next.handle.calls.mostRecent().args[0] as HttpRequest<any>;
    expect(handledRequest.headers.get('Authorization')).toBe('Bearer firebase-token');
    expect(handledRequest.headers.get('Accept')).toBe('application/json');
  });

  it('should attach the bearer token to the configured DailyTech API URL', () => {
    authPolicy.getActiveToken.and.returnValue('Bearer firebase-token');
    const request = new HttpRequest('GET', `${environment.API_URL}/links/me/category/10`);
    const next = jasmine.createSpyObj<HttpHandler>('HttpHandler', ['handle']);
    next.handle.and.returnValue(of({} as any));

    service.intercept(request, next);

    const handledRequest = next.handle.calls.mostRecent().args[0] as HttpRequest<any>;
    expect(handledRequest.headers.get('Authorization')).toBe('Bearer firebase-token');
  });

  it('should not attach auth headers to NYT API requests', () => {
    authPolicy.getActiveToken.and.returnValue('Bearer firebase-token');
    const request = new HttpRequest('GET', `${environment.apiUrlNYT}/topstories/v2/technology.json`);
    const next = jasmine.createSpyObj<HttpHandler>('HttpHandler', ['handle']);
    next.handle.and.returnValue(of({} as any));

    service.intercept(request, next);

    const handledRequest = next.handle.calls.mostRecent().args[0] as HttpRequest<any>;
    expect(handledRequest.headers.get('Authorization')).toBeNull();
    expect(handledRequest.headers.get('Accept')).toBeNull();
  });

  it('should not overwrite an existing authorization header', () => {
    authPolicy.getActiveToken.and.returnValue('Bearer stale-session-token');
    const request = new HttpRequest('POST', '/api/links', {}, {
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

