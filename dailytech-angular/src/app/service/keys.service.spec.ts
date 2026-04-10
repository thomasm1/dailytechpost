import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { KeysService } from './keys.service';

describe('KeysService', () => {
  let service: KeysService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(KeysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
