import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';

import { FirebaseAuthService } from './firebase-auth.service';
import { WritingService } from '../../components/writing/writing.service';
import { UiService } from '../ui.service';

describe('FirebaseAuthService', () => {
  let service: FirebaseAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
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
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
