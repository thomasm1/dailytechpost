import { Component, Input, Output, EventEmitter, ElementRef } from "@angular/core";
import * as d3 from "d3";
import { DimensionsService } from "./dimensions.service";
import { IMapConfig, IMapData } from "../../model/interfaces/chart.interfaces";
import ObjectHelper from "../../utility/functions/object.helper";
import * as topojson from 'topojson-client';

@Component({
  selector: "chart16",
  template: `
    <div class="chart16"> 
       <svg>
        <style>
  path.countries {
    fill: #fff;
    stroke: #b4b4b4;
    stroke-width: 0.5px;
  }
</style>

       </svg>
    </div>
  `,
  standalone:true,
  styles: [` 
    .chart16 {
      width: 100%;
      height: 100%; 
    }
  `],
  providers: [DimensionsService]
})
export class Chart16Component {

    host: any;
    svg: any;

    containers: any = {};
    title: any;

    projection: any;
    path: any;
    colors: any;
    features: any; 

    private _geodata: any;
    private _data: IMapData = {} as IMapData;
    private _config: IMapConfig ={} as IMapConfig;
    private _defaultConfig: IMapConfig = {
      margins: {top: 20, right: 20, bottom: 20, left: 20}
    }
    
  @Input() set geodata(values: any) {
    this._geodata = values;
    if (!this.svg) return;
    this.updateChart();
  }  
  @Input() set data(values: any) {
    this._data = values;
    if(!this.svg) return;
    this.updateChart();
  }  
  @Input() set config(values: IMapConfig) {
    this._config = ObjectHelper.UpdateObjectWithPartialValues(this._defaultConfig, values);
  }
  
  @Output() tooltip = new EventEmitter<any>();

  get geodata() {
  return this._geodata;
}
  get data() {
    return this._data;
  }
  get config() {
    return this._config || this._defaultConfig;
  }
 
  constructor(element: ElementRef, private dimensions: DimensionsService) {
    this.host = d3.select(element.nativeElement); 
    console.log(this);
  }
  ngOnInit():void  {
    this.setSvg();
    this.setDimensions();
    this.setElements();
    if (!this.geodata) return;
    this.updateChart();
  }
  
  private setSvg() {
    this.svg = this.host.select("svg").attr('xmlns', 'http://www.w3.org/2000/svg');
  }

  setDimensions() {
    const dimensions = this.svg.node().getBoundingClientRect();
    this.dimensions.setDimensions(dimensions);
      console.log('Dimensions set:', dimensions);
    this.dimensions.setMargins(this.config.margins);
  }

  private setElements() {
    this.containers.countries = this.svg.append("g").attr("class", "countries");
    this.containers.countries.append("path").attr('class', 'countries');
    this.containers.data = this.svg.append("g").attr("class", "data");
    this.containers.titleContainer = this.svg.append("g").attr("class", "title");
    this.title = this.containers.titleContainer.append("text").attr("class", "title");
    this.containers.legend = this.svg.append("g").attr("class", "legend");
  }

  updateChart() { 
    this.positioningElements();
    this.setParams();
    this.setLabels();
    this.setLegend();
    this.draw();
  }

  private positioningElements() {
    this.containers.countries.attr("transform", `translate(${this.dimensions.marginLeft},${this.dimensions.marginTop})`);
    this.containers.data.attr("transform", `translate(${this.dimensions.marginLeft},${this.dimensions.marginTop})`);
    this.containers.titleContainer.attr("transform", `translate(${this.dimensions.midWidth},${this.dimensions.midMarginTop})`);  
    this.containers.legend.attr("transform", `translate(${this.dimensions.midWidth},${this.dimensions.midMarginBottom})`);
  }

  setParams() {
    this.setFeatures();
    this.setProjection();
    this.setPath();
  }

  setProjection() {
    this.projection = d3.geoEquirectangular() // d3.geoOrthographic()
    .fitSize([this.dimensions.width, this.dimensions.height], this.features);
    // .scale(65)
    // .translate([this.dimensions.midWidth, this.dimensions.midHeight])
    ; 
  }

  setPath() {
    this.path = d3.geoPath(this.projection);
  }
  setColors() {
    this.colors = d3.scaleThreshold<number, string>()
      .domain(this.data.thresholds)
      .range(d3.schemeOranges[9]);
  }

  setFeatures() {
    this.features = topojson.feature(this.geodata, this.geodata.objects['CNTR_RG_60M_2020_4326']);
      console.log("this.features ", this.features);
  }
  setLabels() { }
  setLegend() { } 
  drawBaseLayer() {
      this.containers.countries.selectAll("path.countries")
      .data(this.features.features)
      // .join('path')
      // .attr('class', 'base')
      .datum(this.features)
      .attr("d", this.path);
  }
  drawDataLayer() {

  }
  draw() {    
  this.drawBaseLayer();
  this.drawDataLayer();
    }


  // temp
  setScale(scale: number) {
    this.projection.scale(scale);
    this.setPath();
    this.draw();
   }
   setTranslate(x: number, y: number) {
     this.projection.translate([x, y]);
     this.setPath();
     this.draw();
   }
   setCenter(x: number, y: number) {
     this.projection.center([x, y]);
     this.setPath();
     this.draw();
   }
   setRotate(x: number, y: number, z: number) {
     this.projection.rotate([x, y, z]);
     this.setPath();
     this.draw();
   }
   setExtent(width: number, height: number) {
     this.projection.fitSize([width, height], this.features);
     this.setPath();
     this.draw();
   }
   setWidth(width: number) {
     this.projection.fitWidth(width, this.features);
     this.setPath();
     this.draw();
   }
   setHeight(height: number) {
     this.projection.fitHeight(height, this.features);
     this.setPath();
     this.draw();
   }
}
