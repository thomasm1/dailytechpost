import { TestBed } from '@angular/core/testing';

import { DimensionsService } from './dimensions.service';

describe('DimensionsService', () => {
  let service: DimensionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DimensionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
