import { Component, inject } from "@angular/core";
import { AsyncPipe, NgFor, NgIf } from "@angular/common";
import { Observable, Subscription, combineLatest, shareReplay, tap } from "rxjs";
import { Chart1Component } from "./demos/svg/chart1.component";
import { Chart2Component } from "./demos/svg/chart2.component";
import { Chart3Component } from "./demos/svg/chart3.component";
import { Chart4BarComponent } from "./demos/ag-charts/chart4bar.component";
import { Chart5LineComponent } from "./demos/ag-charts/chart5line.component";
import { Chart6TimelineComponent } from "./demos/ag-charts/chart6timeline.component";
import { Chart7BarComponent } from "./demos/d3/chart7bar.component";
import { Chart8BarComponent } from "./demos/d3/chart8bar.component";
import { Chart9LineComponent } from "./demos/d3/chart9line.component";
import { Chart10StackComponent } from "./demos/d3/chart10stack.component";
import { Chart12ScatterComponent } from "./demos/d3/chart12scatter.component";
import { Chart11PieComponent } from "./demos/d3/chart11pie.component";
import { Chart16MapComponent } from "./demos/d3/chart16map.component";
import { PlaySliderComponent } from "./shared/play-slider.component";

import { Chart15ScatterComponent } from "./demos/ag-charts/chart15scatter.component";
import { Chart13StackComponent } from "./demos/ag-charts/chart13stack.component";
import { Chart14DonutComponent } from "./demos/ag-charts/chart14donut.component";
import { DemoDataService } from "./demos/demo-data.service";
import { PieHelper } from "./shared/pie.helper";
import { MapHelper } from "./shared/map.helper";
import { StackHelper } from "./shared/stack.helper";
import { IGroupStackData } from "./shared/chart.interfaces";

@Component({
  selector: "visuals",
  standalone: true,
  imports: [
    Chart1Component,
    Chart2Component,
    Chart3Component,
    Chart4BarComponent,
    Chart5LineComponent,
    Chart6TimelineComponent,
    Chart7BarComponent,
    Chart8BarComponent,
    Chart9LineComponent,
    Chart10StackComponent,
    Chart12ScatterComponent,
    Chart11PieComponent,
    Chart15ScatterComponent,
    Chart13StackComponent,
    Chart14DonutComponent,
    Chart16MapComponent,
    PlaySliderComponent,
    AsyncPipe,
    NgFor,
    NgIf,
  ],
  template: `
    <div class="visuals">
      <div class="header"></div>
      <div class="boxes small-1"><chart1 [data]="data"></chart1></div>
      <div class="boxes small-2"><chart2 [data]="data"></chart2></div>
      <div class="boxes small-3"><chart3 [data]="data"></chart3></div>
      <div class="boxes small-4"><chart4bar [data]="data"></chart4bar></div>
      <div class="boxes small-5"><chart5line [data]="data"></chart5line></div>
      <div class="boxes small-6">
        <chart6timeline [data]="dataCovidJson$ | async"></chart6timeline>
      </div>
      <div class="boxes small-7"><chart7bar [data]="data"></chart7bar></div>
      <div class="boxes small-8"><chart8bar [data]="data"></chart8bar></div>
      <div class="boxes small-9">
        <chart9line [data]="dataCovidJson$ | async"></chart9line>
      </div>
      <div class="boxes small-10">
        <div class="chart chart-10">
          <select class="chart-10-options" (change)="setStackedData($event)">
            <option
              *ngFor="let option of stackOptions"
              value="{{ option.value }}"
            >
              {{ option.label }}
            </option>
          </select>
          <chart10stack [data]="stackedData"></chart10stack>
        </div>
      </div>
      <div class="boxes small-11">
        <div class="chart-11">
          <select class="chart-11-options" (change)="setPieData($event)">
            <option value="now" selected>Now</option>
            <option value="before">Before</option>
          </select>
          <chart11pie *ngIf="pieData" [data]="pieData"></chart11pie>
        </div>
      </div>
      <div class="boxes small-12"><chart12scatter [data]="dataIrisCsv"></chart12scatter></div>
      <div class="boxes small-13">
        <chart13stack [data]="stackedData"
         title="#13: AG Charts: Grouped Stacked Bar Chart"></chart13stack>
      </div>
      <div class="boxes small-14">
        <chart14donut [data]="browserDataArray"></chart14donut>
      </div> 
      <div class="boxes small-15">
        <chart15scatter [data]="dataIrisCsv"></chart15scatter>
      </div>
       <div class="boxes small-16">
        <chart16map [geodata]="geoCountries$ | async" [data]="covidMap.data"></chart16map>
        <app-play-slider *ngIf="covidMap.fullDataSet.length"
          [min]="covidMap.sliderState.min"
          [max]="covidMap.sliderState.max"
          [step]="covidMap.sliderState.step"
          [speed]="covidMap.sliderState.speed"
          [value]="covidMap.currentDate"
          (changeValue)="covidMap.setMapData($event)">
        </app-play-slider>
      </div> 
      <div class="sidebar"></div>
      <div class="content"></div>
      <div class="footer"></div>
    </div>
  `,
  styleUrls: ["./visuals.component.scss"],
})
export class VisualsComponent {
  private apiService = inject(DemoDataService);

  irisCsvUrl: string =
    "https://raw.githubusercontent.com/d3taviz/dashboardOne/scatterplot-init/src/assets/iris.csv";
 
  covidJsonUrl: any = "https://api.covidtracking.com/v1/us/daily.json";
  browsersUrl: any = "assets/data/data-browsers.json";

  data: number[] = [];
  dataCsv: any = [];
  dataIrisCsv: any = [];
  dataCovidJson$: Observable<any> | undefined;
  browsers$: Observable<any> | undefined;
  browser: any = { title: "Browser market share", data: [] };
  browserDataArray: any[] = [];
  pieData: any;
  // pieMode14: "now" | "before" = "now";
  // pieData14: any;

  population$: Observable<any> = new Observable();
  population: any;

  stackedData: IGroupStackData = {
    title: "",
    yLabel: "",
    unit: "",
    data: [],
    stackOrder: [],
  };

  stackOptions = [
    {
      label: "Year (grouped)",
      value: "year/gender/age_group/",
    },
    {
      label: "Year (no group - stacked)",
      value: "year//age_group/",
    },
    {
      label: "Year (grouped - no stack)",
      value: "year/age_group//",
    },
    {
      label: "Year (no group - no stack)",
      value: "year///",
    },
    {
      label: "Countries 2012",
      value: "country/gender/age_group/2012",
    },
    {
      label: "Country 2006",
      value: "country/gender/age_group/2006",
    },
    {
      label: "Country (no group - stacked)",
      value: "country//age_group/2012",
    },
  ];
  
  // MAP 
  subscriptions: Subscription[] = [];
  geoCountries$: Observable<any> | undefined;  
  geoCountriesUrl: string = 'assets/data/CNTR_RG_60M_2020_4326.json';
  covidByCountryUrl: string = 'assets/data/megafile--deaths.json';
  countryCodesUrl: string = 'assets/data/mapcountries.json';

  mapCovidByCountry$: Observable<any> | undefined;
  mapCountryCodes$: Observable<any> | undefined;
 
  covidMap = new MapHelper();
  constructor() {

  }

  ngOnInit() {
    let subs: Subscription;
    this.apiService.getDataArray().subscribe((data) => {
      this.data = data;
    }); 

    this.apiService
      .getD3CsvParseFromUrl("assets/data-csv/data-token-wallets.csv")
      .subscribe((data) => {
        this.dataCsv = data;
        console.log("csv data:", this.dataCsv);
      });

    this.apiService.getD3CsvParseFromUrl(this.irisCsvUrl).subscribe((data) => {
      this.dataIrisCsv = data;
      console.log("iris data:", this.dataIrisCsv);
    });

    // this.apiService.getD3JsonDataFromUrl().subscribe((data) => {
    //   this.dataCovidJson$ = data;
    //   console.log('covid json data_API_:', this.dataCovidJson$);
    // });
    this.dataCovidJson$ = this.apiService
      .getJsonDataFromUrl(this.covidJsonUrl)
      .pipe(
        tap((data) => console.log("covid json data_API_:", data)),
        shareReplay(1),
      );

    this.browsers$ = this.apiService.getJsonDataFromUrl(this.browsersUrl);

    this.browsers$.subscribe((data) => {
      this.browserDataArray = Array.isArray(data) ? data : [];
      console.log("data______-browser_____", this.browserDataArray);
      this.setPieData("now");
      // this.setPieDataAgChart14("now");
    });

    this.population$ = this.apiService.getD3CsvParseFromUrl(
      "assets/data-csv/population.csv",
    );

    this.population$.subscribe((data) => {
      this.population = data;
      this.setStackedData("year/gender/age_group/");
    });

      /// MAP SUBSCRIPTION
  this.geoCountries$ = this.apiService.getCountriesGeoData(this.geoCountriesUrl); 
  this.mapCovidByCountry$ = this.apiService.getCovidByCountry(this.covidByCountryUrl); 
   this.mapCountryCodes$ = this.apiService.getCountryCodes(this.countryCodesUrl);

   subs = combineLatest([this.mapCovidByCountry$, this.mapCountryCodes$])
     .subscribe(([data, codes]) => {
       this.covidMap.setData(data, codes);
       console.log("Combined map data:", { covidData: data, countryCodes: codes });
      });

   this.subscriptions.push(subs);

    //END NGINIT
  }
  ngOnDestroy() {
    this.subscriptions.map(sub => sub.unsubscribe());
  }

  setPieData(event: string | Event) {
    const valueAttr =
      typeof event === "string"
        ? event
        : (event.target as HTMLInputElement).value;
    this.pieData = PieHelper.convert(
      this.browserDataArray,
      "#11: D3 Pie Chart",
      valueAttr,
      "name",
      "name",
    );
  }

  setStackedData(event: string | Event) {
    const valueAttr =
      typeof event === "string"
        ? event
        : (event.target as HTMLInputElement).value;

    const [domain, group, stack, year] = valueAttr.split("/");

    const population =
      year == ""
        ? this.population
        : this.population.filter((d:any) => d.year === year);

    const data = StackHelper.SetStacks(
      population,
      domain,
      group,
      stack,
      "value",
      (val) => val / 1e6,
    );

    this.stackedData = {
      title: "#10: D3 Population by year, gender and age group",
      yLabel: "Population (millions)",
      unit: "million",
      data,
      stackOrder: [
        "Under 3 years",
        "4 years",
        "5-9 years",
        "10-14 years",
        "15-19 years",
        "20-24 years",
        "25-29 years",
        "30-34 years",
        "35-39 years",
        "40 years and over",
      ],
    };
  }


}
