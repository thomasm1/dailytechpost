import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { VisualsComponent } from './visuals.component';
import { DemoDataService } from './demos/demo-data.service';

describe('VisualsComponent', () => {
  let component: VisualsComponent;
  let fixture: ComponentFixture<VisualsComponent>;

  beforeEach(async () => {
    const apiService = jasmine.createSpyObj<DemoDataService>('DemoDataService', [
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
        { provide: DemoDataService, useValue: apiService },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render an empty map without a playback slider when no data is returned', () => {
    expect(component).toBeTruthy();
    expect(component.covidMap.fullDataSet).toEqual([]);
    expect(component.covidMap.datesRange).toEqual([0, 0]);
    expect(fixture.nativeElement.querySelector('app-play-slider')).toBeNull();
  });

  it('should clear old map data and slider dates when an empty response follows populated data', () => {
    component.covidMap.setData({
      location: ['United States'],
      date: ['2020-04-01'],
      new_deaths_smoothed_per_million: [1]
    }, [{ location: 'United States', iso3: 'USA' }]);
    expect(component.covidMap.fullDataSet.length).toBe(1);
    expect(component.covidMap.currentDate).toBe(Date.parse('2020-04-01'));

    component.covidMap.setData([], []);
    fixture.detectChanges();

    expect(component.covidMap.fullDataSet).toEqual([]);
    expect(component.covidMap.data.data).toEqual([]);
    expect(component.covidMap.data.title).toBe('Covid-19 new death cases');
    expect(component.covidMap.sliderState.min).toBe(0);
    expect(component.covidMap.sliderState.max).toBe(0);
    expect(fixture.nativeElement.querySelector('app-play-slider')).toBeNull();
  });
});
