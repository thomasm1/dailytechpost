import { TestBed } from '@angular/core/testing';

import { WritingService } from './writing.service';

describe('WritingService', () => {
  let service: WritingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WritingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
