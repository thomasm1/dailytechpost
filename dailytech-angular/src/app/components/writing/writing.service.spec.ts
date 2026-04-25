import { TestBed } from '@angular/core/testing';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { WritingService } from './writing.service';
import { UiService } from '../../service/ui.service';
import { environment } from '../../../environments/environment';
import { AwsAuthenticationService } from '../../service/auth/aws-authentication.service';

describe('WritingService', () => {
  let service: WritingService;
  let httpMock: HttpTestingController;
  let authService: jasmine.SpyObj<AwsAuthenticationService>;
  const categoryState = {
    currentCategoryMods: [
      { cat3: 'Web Dev Affairs', categoryId: '10', durationGoal: 15 }
    ],
    updatedCategoryMods: []
  };

  beforeEach(() => {
    authService = jasmine.createSpyObj<AwsAuthenticationService>('AwsAuthenticationService', [
      'getAuthenticatedToken'
    ]);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: AngularFirestore,
          useValue: jasmine.createSpyObj<AngularFirestore>('AngularFirestore', ['collection']),
        },
        {
          provide: AngularFireAuth,
          useValue: { currentUser: Promise.resolve(null) },
        },
        {
          provide: UiService,
          useValue: {
            loadingStateChanged: { next: jasmine.createSpy('next') },
            showSnackBar: jasmine.createSpy('showSnackBar'),
          },
        },
        {
          provide: MatSnackBar,
          useValue: jasmine.createSpyObj<MatSnackBar>('MatSnackBar', ['open']),
        },
        {
          provide: AwsAuthenticationService,
          useValue: authService,
        },
        provideMockStore({ initialState: { category: categoryState } }),
      ],
    });
    service = TestBed.inject(WritingService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load saved research urls for a category', () => {
    const mockResponse = [
      { id: '50', title: 'Example', url: 'https://example.com', categoryId: 10 }
    ];
    let actualResponse: unknown;

    service.getResearchNewsByCategory(10).subscribe((response) => {
      actualResponse = response;
    });

    const request = httpMock.expectOne(`${environment.API_URL}/news/category/10`);
    expect(request.request.method).toBe('GET');
    request.flush(mockResponse);

    expect(actualResponse).toEqual(mockResponse);
  });

  it('should load private saved research urls for a category', () => {
    const mockResponse = [
      { id: '51', title: 'Mine', url: 'https://example.com/mine', categoryId: 10 }
    ];
    let actualResponse: unknown;

    service.getMyResearchNewsByCategory(10).subscribe((response) => {
      actualResponse = response;
    });

    const request = httpMock.expectOne(`${environment.API_URL}/news/me/category/10`);
    expect(request.request.method).toBe('GET');
    request.flush(mockResponse);

    expect(actualResponse).toEqual(mockResponse);
  });

  it('should save research urls with the session bearer token', async () => {
    authService.getAuthenticatedToken.and.returnValue('Bearer session-token');

    const savePromise = service.addResearchNews('Web Dev Affairs', 'Example', 'https://example.com');
    await new Promise((resolve) => setTimeout(resolve, 0));

    const request = httpMock.expectOne(`${environment.API_URL}/news`);
    expect(request.request.method).toBe('POST');
    expect(request.request.headers.get('Authorization')).toBe('Bearer session-token');
    expect(request.request.body).toEqual({
      title: 'Example',
      url: 'https://example.com',
      categoryId: 10
    });
    request.flush({ id: '52', title: 'Example', url: 'https://example.com', categoryId: 10 });

    await expectAsync(savePromise).toBeResolved();
  });

  it('should save research urls directly for a selected category', async () => {
    authService.getAuthenticatedToken.and.returnValue('Bearer session-token');

    const savePromise = service.addResearchNewsForCategory(
      { cat3: 'Quantum Data', categoryId: '11', durationGoal: 15 },
      'Quantum',
      'https://example.com/quantum'
    );
    await new Promise((resolve) => setTimeout(resolve, 0));

    const request = httpMock.expectOne(`${environment.API_URL}/news`);
    expect(request.request.method).toBe('POST');
    expect(request.request.headers.get('Authorization')).toBe('Bearer session-token');
    expect(request.request.body).toEqual({
      title: 'Quantum',
      url: 'https://example.com/quantum',
      categoryId: 11
    });
    request.flush({ id: '53', title: 'Quantum', url: 'https://example.com/quantum', categoryId: 11 });

    await expectAsync(savePromise).toBeResolved();
  });
});
