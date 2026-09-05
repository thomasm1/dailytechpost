import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { VisualsComponent } from './visuals.component';
import { ApiService } from './api.service';

describe('VisualsComponent', () => {
  let component: VisualsComponent;
  let fixture: ComponentFixture<VisualsComponent>;

  beforeEach(async () => {
    const apiService = jasmine.createSpyObj<ApiService>('ApiService', [
  'getDataArray',
  'getD3CsvParseFromUrl',
  'getJsonDataFromUrl',
  'getCountriesGeoData',
  'getCovidByCountry',
  'getCountryCodes',
    ]);

  apiService.getDataArray.and.returnValue(of([1, 2, 3]));
  apiService.getD3CsvParseFromUrl.and.returnValue(of([]));
  apiService.getJsonDataFromUrl.and.returnValue(of([]));
  apiService.getCountriesGeoData.and.returnValue(of({
  type: 'Topology',
  objects: {
    CNTR_RG_60M_2020_4326: {
      type: 'GeometryCollection',
      geometries: [],
    },
  },
  arcs: [],
}));
apiService.getCovidByCountry.and.returnValue(of([]));
apiService.getCountryCodes.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      imports: [VisualsComponent],
      providers: [
        { provide: ApiService, useValue: apiService },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
