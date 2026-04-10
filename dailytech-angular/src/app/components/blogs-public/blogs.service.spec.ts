import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BlogsService } from './blogs.service';

describe('BlogsService', () => {
  let service: BlogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(BlogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
