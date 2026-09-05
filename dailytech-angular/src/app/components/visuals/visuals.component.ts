import { Component, inject } from "@angular/core";
import { AsyncPipe, NgFor, NgIf } from "@angular/common";
import { Observable, Subscription, combineLatest, shareReplay, tap } from "rxjs";
import { Chart1Component } from "./chart1.component";
import { Chart2Component } from "./chart2.component";
import { Chart3Component } from "./chart3.component";
import { Chart4Component } from "./chart4.component";
import { Chart5Component } from "./chart5.component";
import { Chart6Component } from "./chart6.component";
import { Chart7Component } from "./chart7.component";
import { Chart8Component } from "./chart8.component";
import { Chart9Component } from "./chart9.component";
import { Chart10Component } from "./chart10.component";
import { Chart12Component } from "./chart12.component";
import { Chart11Component } from "./chart11.component";
import { Chart16Component } from "./chart16.component";

import { Chart15Component } from "./chart15.component";
import { Chart13Component } from "./chart13.component";
import { Chart14Component } from "./chart14.component";
import { ApiService } from "./api.service";
import { PieHelper } from "../../utility/functions/pie.helper";
import { MapHelper } from "../../utility/functions/map.helper";
import { StackHelper } from "../../utility/functions/stack.helper";
import { IGroupStackData } from "../../model/interfaces/chart.interfaces";

@Component({
  selector: "visuals",
  standalone: true,
  imports: [
    Chart1Component,
    Chart2Component,
    Chart3Component,
    Chart4Component,
    Chart5Component,
    Chart6Component,
    Chart7Component,
    Chart8Component,
    Chart9Component,
    Chart10Component,
    Chart12Component,
    Chart11Component,
    Chart15Component,
    Chart13Component,
    Chart14Component,
    Chart16Component,
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
      <div class="boxes small-4"><chart4 [data]="data"></chart4></div>
      <div class="boxes small-5"><chart5 [data]="data"></chart5></div>
      <div class="boxes small-6">
        <chart6 [data]="dataCovidJson$ | async"></chart6>
      </div>
      <div class="boxes small-7"><chart7 [data]="data"></chart7></div>
      <div class="boxes small-8"><chart8 [data]="data"></chart8></div>
      <div class="boxes small-9">
        <chart9 [data]="dataCovidJson$ | async"></chart9>
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
          <chart10 [data]="stackedData"></chart10>
        </div>
      </div>
      <div class="boxes small-11">
        <div class="chart">
          <select class="chart-options" (change)="setPieData($event)">
            <option value="now" selected>Now</option>
            <option value="before">Before</option>
          </select>
          <chart11 *ngIf="pieData" [data]="pieData"></chart11>
        </div>
      </div>
      <div class="boxes small-12"><chart12 [data]="dataIrisCsv"></chart12></div>
      <div class="boxes small-13">
        <chart13 [data]="stackedData"
         title="#13: AG Charts: Grouped Stacked Bar Chart"></chart13>
      </div>
      <div class="boxes small-14">
        <chart14 [data]="browserDataArray"></chart14>
      </div> 
      <div class="boxes small-15">
        <chart15 [data]="dataIrisCsv"></chart15>
      </div>
       <div class="boxes small-16">
        <chart16 [geodata]="geoCountries$ | async" [data]="covidMap.data"></chart16>
      </div> 
      <div class="sidebar"></div>
      <div class="content"></div>
      <div class="footer"></div>
    </div>
  `,
  styleUrls: ["./visuals.component.scss"],
})
export class VisualsComponent {
  private apiService = inject(ApiService);

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
  covidByCountryUrl: string = 'assets/data/covid-by-country.json';
  countryCodesUrl: string = 'assets/data/country-codes.json';

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
