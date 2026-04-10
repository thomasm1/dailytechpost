import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { NasaService } from './nasa.service';
import { KeysService } from 'src/app/service/keys.service';
import { environment } from '../../../environments/environment';

describe('NasaService', () => {
  let service: NasaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: KeysService,
          useValue: jasmine.createSpyObj<KeysService>('KeysService', ['getNasaApi']),
        },
      ],
    });
    service = TestBed.inject(NasaService);
    httpMock = TestBed.inject(HttpTestingController);
    httpMock.expectOne(environment.nasa_url).flush([]);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
