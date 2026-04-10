import { TestBed } from '@angular/core/testing';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { provideMockStore } from '@ngrx/store/testing';

import { WritingService } from './writing.service';
import { UiService } from '../../service/ui.service';

describe('WritingService', () => {
  let service: WritingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AngularFirestore,
          useValue: jasmine.createSpyObj<AngularFirestore>('AngularFirestore', ['collection']),
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
        provideMockStore({ initialState: {} }),
      ],
    });
    service = TestBed.inject(WritingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
