import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PostEntityService } from './post-entity.service';

describe('PostEntityService', () => {
  let service: PostEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PostEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
