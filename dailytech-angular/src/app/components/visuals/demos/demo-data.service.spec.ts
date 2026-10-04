import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DemoDataService} from './demo-data.service';

describe('DemoDataService', () => {
  let service: DemoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(DemoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
