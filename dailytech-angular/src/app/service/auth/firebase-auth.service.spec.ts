import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';

import { environment } from '../../../environments/environment';
import { AUTHENTICATED_USER, AUTH_STORAGE_KEY, TOKEN } from './aws-authentication.service';
import { FIREBASE_USER_INFO_STORAGE_KEY, FirebaseAuthService } from './firebase-auth.service';
import { WritingService } from '../../components/writing/writing.service';
import { UiService } from '../ui.service';

describe('FirebaseAuthService', () => {
  let service: FirebaseAuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: Router,
          useValue: jasmine.createSpyObj<Router>('Router', ['navigate']),
        },
        {
          provide: AngularFireAuth,
          useValue: jasmine.createSpyObj<AngularFireAuth>('AngularFireAuth', [
            'createUserWithEmailAndPassword',
            'signInWithEmailAndPassword',
            'signOut',
          ], {
            authState: of(null),
          }),
        },
        {
          provide: WritingService,
          useValue: jasmine.createSpyObj<WritingService>('WritingService', ['cancelSubscriptions']),
        },
        {
          provide: UiService,
          useValue: jasmine.createSpyObj<UiService>('UiService', ['showSnackBar']),
        },
        provideMockStore({ initialState: {} }),
      ],
    });
    service = TestBed.inject(FirebaseAuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    service.clearFirebaseSession();
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should persist Firebase session details and sync the local REST user', async () => {
    const firebaseUser = {
      email: 'writer@example.com',
      uid: 'firebase-uid-1',
      getIdTokenResult: () => Promise.resolve({
        token: 'firebase-jwt',
        claims: {
          email: 'writer@example.com',
          admin: false
        },
        expirationTime: 'Sat, 25 Apr 2026 23:00:00 GMT',
        issuedAtTime: 'Sat, 25 Apr 2026 22:00:00 GMT',
        signInProvider: 'password',
        signInSecondFactor: null
      })
    };

    const persistPromise = service.persistFirebaseSession(firebaseUser);

    await Promise.resolve();
    const req = httpMock.expectOne(`${environment.API_URL}/users/me`);
    expect(req.request.method).toBe('GET');
    expect(req.request.headers.get('Authorization')).toBe('Bearer firebase-jwt');
    req.flush({ email: 'writer@example.com', userId: 10 });

    await persistPromise;

    const userInfo = JSON.parse(sessionStorage.getItem(FIREBASE_USER_INFO_STORAGE_KEY) || '{}');
    expect(sessionStorage.getItem(AUTH_STORAGE_KEY)).toBe('true');
    expect(sessionStorage.getItem(AUTHENTICATED_USER)).toBe('writer@example.com');
    expect(sessionStorage.getItem(TOKEN)).toBe('Bearer firebase-jwt');
    expect(userInfo.email).toBe('writer@example.com');
    expect(userInfo.permissions.admin).toBeFalse();
    expect(service.getFirebaseUserInfo()?.email).toBe('writer@example.com');
  });
});


