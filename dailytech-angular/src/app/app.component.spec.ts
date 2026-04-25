import { TestBed, waitForAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { FirebaseAuthService } from './service/auth/firebase-auth.service';
import { KeysService } from './service/keys.service';
import { LoggingService } from './service/logging.service';
import { PwaUpdateService } from './service/pwa-update.service';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        {
          provide: FirebaseAuthService,
          useValue: jasmine.createSpyObj<FirebaseAuthService>('FirebaseAuthService', ['authState$']),
        },
        {
          provide: KeysService,
          useValue: jasmine.createSpyObj<KeysService>('KeysService', ['getGoogleApi']),
        },
        {
          provide: LoggingService,
          useValue: jasmine.createSpyObj<LoggingService>('LoggingService', ['printLog']),
        },
        {
          provide: PwaUpdateService,
          useValue: jasmine.createSpyObj<PwaUpdateService>('PwaUpdateService', ['initialize']),
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the current title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Dailytech Modal');
  });

  it('should render the application shell', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('router-outlet')).not.toBeNull();
  });
});
