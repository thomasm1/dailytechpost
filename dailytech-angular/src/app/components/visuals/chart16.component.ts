import { Component, Input, Output, EventEmitter, ElementRef } from "@angular/core";
import { debounceTime, fromEvent, map, Subscription } from 'rxjs';

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
  .chart16 path.countries {
    fill: {{config.features.base.fill}};
    stroke: {{config.features.base.stroke}};
    stroke-width: 0.5px;
  }
  .chart16 path.data {
    stroke: {{config.features.data.stroke}};
  }
  .chart16 text.title {
    text-anchor: middle;
    font-size: {{config.title.fontSize}}px;
    font-weight: {{config.title.fontWeight}};
    dominant-baseline: middle;
  }
  .chart16 .highlighted rect, .chart16 path.data.highlighted {
    stroke: {{config.features.highlighted.stroke}};
  }
  .chart16 .faded {
    opacity: {{config.faded.opacity}};
  }
</style>

       </svg>
    </div>
  `,
  standalone:true,
  styles: [` 
    .chart16, .chart16 svg {
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
    dataFeatures: any[] = [];    

    private _geodata: any;
    private _data: IMapData = {} as IMapData;
    private _config?: IMapConfig;
    private _defaultConfig: IMapConfig = {
      margins: {
        top:40, 
        left: 20,
        right: 20,
         bottom: 40, 
        },
      title: {
        fontWeight: 'bold',
        fontSize: 12
      },
      features: {
      base: {
        stroke: '#aaa',
        fill: '#fff'
      },
      data: {
        stroke: 'none'
      },
      highlighted: {
        stroke: '#000'
      }
    },
    faded: {
      opacity: 0.3
    },
    nodata: {
      color: '#b4b4b4',
      label: 'no data'
    },
    legend: {
      width: 30,
      height: 10,
      fontSize: 10,
      nodataSeparator: 10
    },
    colors: [...d3.schemeOranges[9]]
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
 
  subscriptions: Subscription[] = [];

  constructor(element: ElementRef, private dimensions: DimensionsService) {
    this.host = d3.select(element.nativeElement); 
    console.log(this);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
  ngOnInit():void  {
    
    const resize$ = fromEvent(window, 'resize');

    const subs = resize$
    .pipe(
      debounceTime(500)
    )
    .subscribe(() => this.resizeChart());

    this.subscriptions.push(subs);


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
    if (!this.svg || !this.geodata || !this.data?.data || !this.data?.thresholds) return;
    this.positioningElements();
    this.setParams();
    this.setDataFeatures();
    this.setLabels();
    this.setLegend();  
    this.draw();
  }

  resizeChart() {
    this.setDimensions();
    this.updateChart();
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
    this.setColors();
  }

  setProjection() {
    this.projection = d3.geoEquirectangular() // d3.geoOrthographic()
    .fitSize([this.dimensions.innerWidth, this.dimensions.innerHeight], this.features);
    // .scale(65)
    // .translate([this.dimensions.midWidth, this.dimensions.midHeight])
    ; 
  }

  setPath() {
    this.path = d3.geoPath(this.projection);
  }
  setColors() {
    this.colors = d3.scaleThreshold<number, string>()
      // The first two legend entries are "no data" and the lowest bin (0).
      .domain(this.data.thresholds.slice(2).filter((value): value is number => value !== null))
      .range(this.config.colors);
  }
  color(value: number | null): string {
    if (value===null) {
      return this.config.nodata.color;
    }
    return this.colors(value as number);
  }
  
  getFeatureId(feature: any): string {
    return feature.properties.ISO3_CODE;
  }

  setFeatures() {
    this.features = topojson.feature(this.geodata, this.geodata.objects['CNTR_RG_60M_2020_4326']);
      console.log("this.features ", this.features);
  }
  setDataFeatures() {
    const ids = new Set(this.data.data.map((d:any) => d.id));
    this.dataFeatures = this.features.features.filter((feature:any) => ids.has(feature.properties.ISO3_CODE ))|| [] ;
  }
  setLabels() {
    this.title.text(this.data.title);
   }

   
  
 /* borrowed from chart10 */
        setLegend() {
          const data = this.data.thresholds;

          const width = this.config.legend.width;
          const height = this.config.legend.height;
          const fontSize = this.config.legend.fontSize;
          const nodataSeparator = this.config.legend.nodataSeparator;
          const nodataLabel = this.config.nodata.label;

          const generateLegendItem = (selection:any) => {
            selection.append('rect')
            .attr('class', 'legend-icon')
            .attr('width', width)
            .attr('height', height)
            .style('fill', (d:any) => this.color(d));

            selection.append('text')
              .attr('class', 'legend-label')
              .attr('x', (d:any) => d === null ? 0.5 * width : 0)
              .attr('y', height + fontSize + 1)
              .style('font-size', fontSize + 'px')
              .style('text-anchor', 'middle')
              .text((d:any) => d === null ? nodataLabel : d);
          }

          const updateLegendItem = (selection:any) => {
            selection.selectAll('rect.legend-icon')
            .style('fill', (d:any) => this.color(d));

            selection.select('text.legend-label')
            .text((d:any) => d === null ? nodataLabel : d);
          }

          // set legend items
          this.containers.legend.selectAll('g.legend-item')
            .data(data)
            .join(
              (enter:any) => enter.append('g')
              .call(generateLegendItem),
            (update:any) => update
              .call(updateLegendItem)
            )
            .attr('class', 'legend-item')
            .attr('transform', (d:any, i:any) => `translate(${i * width + (i && nodataSeparator || 0)}, 0)`)
            .on('mouseenter', (event:any, d:any) => {
              //highlight the legend items
              this.highlightLegendItems(d);
              //highlight the features
              this.highlightFeatures(d);
            })
            .on('mouseleave', () => {
              //reset the legend items
              this.resetLegendItems();
              //reset the features
              this.resetFeatures();
            });

            // reposition elements

          //b. reposition the legend
          const legendBox = this.containers.legend.node().getBBox();

          this.containers.legend
            .attr('transform', `translate(
              ${this.dimensions.midWidth - 0.5 * legendBox.width},
              ${this.dimensions.midMarginBottom - 0.5 * legendBox.height}
            )`);
        }
  /* end legend */

  highlightLegendItems = (value: number | null) => {
    const color = d3.color(this.color(value))?.toString() ?? '';

    this.containers.legend.selectAll('g.legend-item')
      .classed('highlighted', (d:any, i:any, nodes:any) => {
        return d3.select(nodes[i]).select('rect').style('fill') === color;
      });
  }

  highlightFeatures = (value: number | null) => {
    const color = d3.color(this.color(value))?.toString() ?? '';

    this.containers.countries.selectAll('path')
      .classed('faded', true);

    this.containers.data.selectAll('path.data')
      .classed('highlighted', function (d:any) {
       // const currentColor = this.color(this.getValueByFeature(d));
        const featureColor = d3.select(this).style('fill');
        return featureColor === color;
      })
      .classed('faded', function() {
        const featureColor = d3.select(this).style('fill');
        return featureColor !== color;
      })
  }

  resetLegendItems = () => {
    this.containers.legend.selectAll('g.legend-item')
      .classed('highlighted', false);
  }

  resetFeatures = () => {
    this.containers.countries.selectAll('path')
      .classed('faded', false);
    
    this.containers.data.selectAll('path.data')
      .classed('highlighted faded', false);
  }

  highlightFeature(feature:any) {
    const id = this.getFeatureId(feature);
    this.containers.data.selectAll('path.data')
      .classed('highlighted', (d:any) => this.getFeatureId(d) === id);
  }

  draw() {    
  this.drawBaseLayer();
  this.drawDataLayer();
    }
  drawBaseLayer() {
      this.containers.countries.select("path.countries")
      .datum(this.features)
      .attr("d", this.path);
  }
  drawDataLayer() {
    this.containers.data.selectAll("path.data")
      .data(this.dataFeatures)
      .join('path')
      .attr('class', 'data')
      .attr("d", this.path)
      .style("fill", (d: any) => this.color(this.getValueByFeature(d)))
      .on('mouseenter', (event: MouseEvent, d:any) => {
        const currentValue = this.getValueByFeature(d);
        //highlight current feature
        this.highlightFeature(d);
        //highlight the legend item
        this.highlightLegendItems(currentValue); 
    })
    .on('mouseleave', () => {
        //reset the current feature
        this.resetFeatures();
        //reset he legend item
        this.resetLegendItems(); 
    });
  }

  getValueByFeature(feature: any): number | null {
    const id = feature.properties.ISO3_CODE;
    return this.data.data.find(d  => d.id === id)?.value ?? null;
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
