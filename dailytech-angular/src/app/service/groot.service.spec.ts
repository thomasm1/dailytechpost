import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { GrootService } from './groot.service';

describe('GrootService', () => {
  let service: GrootService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(GrootService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
