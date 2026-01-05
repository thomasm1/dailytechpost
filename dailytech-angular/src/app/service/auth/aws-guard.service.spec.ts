import { TestBed } from '@angular/core/testing';

import { AwsGuardService } from './aws-guard.service';

describe('AwsGuardService', () => {
  let service: AwsGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwsGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
