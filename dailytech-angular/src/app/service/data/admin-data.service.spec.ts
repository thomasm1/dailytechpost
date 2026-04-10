import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AdminDataService } from './admin-data.service';

describe('AdminDataService', () => {
  let service: AdminDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AdminDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
