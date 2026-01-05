import { TestBed } from '@angular/core/testing';

import { FirebaseGuardService } from './firebase-guard.service';

describe('FirebaseGuardService', () => {
  let service: FirebaseGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
 