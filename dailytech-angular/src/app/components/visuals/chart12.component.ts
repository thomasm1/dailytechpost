import { Component, ElementRef, Input } from "@angular/core";
import { NgFor, NgIf } from "@angular/common";
import * as d3 from "d3";

@Component({
  selector: "chart12",
  imports: [NgIf, NgFor],
  standalone: true,
  template: `
    <div class="chart-4">
   
      <div class="body">
        <svg>
          <foreignObject x="35" y="25" width="260" height="45">
              <div class="controller">
        <select name="x-option" (change)="setOption('x', $event)">
          <option value="" selected disabled hidden>X-variable</option>
          <option *ngFor="let item of data?.columns" [value]="item">
            {{ item }}
          </option>
        </select>
        <select name="y-option" (change)="setOption('y', $event)">
          <option value="" selected disabled hidden>Y-variable</option>
          <option *ngFor="let item of data?.columns" [value]="item">
            {{ item }}
          </option>
        </select>
      </div>
          </foreignObject>
        </svg>
        <div class="chart-tooltip"></div>
      <div class="no-data" *ngIf="!hasData">No data available</div>
      </div>
    </div>
  `,
  styles: [`
   :host {
  display: block;
  width: 100%;
  height: 100%;
  min-width: 0;
} 
    .chart-4 {
      width: 100%;
      height: 100%;
      display: flex;
      flex-flow: column;
   min-width: 0;
    }
    .controller {
      margin-bottom: 2px;
      padding: 0 2px;
      display:flex;
      flex-direction: column;
 

      select { 
        margin-bottom: 2px;
        padding: 2px;
        font-size: 12px;
        max-width: 30%; 
      }
    }
    .titleLabel {
      text {
        font-size: 18px;
        font-weight: bold;
        fill: #444444;
      }
    }
    .body {
      flex-grow: 1 ;
      min-height: 0;
      width: 100%;
      height: 100%;
      position: relative; 

      circle.data {
        transition: all 0.3s ease;
      }
      /* Tooltip styles */
      .chart-tooltip {
        position: absolute;
        display: none;
        pointer-events: none;
        background-color: rgba(85, 52, 163, 0.39);
        min-width: 50px;
        color: #fff;
        border: 1px solid #ccc;
        padding: 6px 8px;
        font-size: 12px;
        border-radius: 4px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
        z-index: 10;
      }
      .chart-tooltip-title {
        background-color: rgba(86, 52, 163, 0.67);
        font-weight: bold;
        margin-bottom: 2px;
      }
      .chart-tooltip-value {
        font-size: 14px;
      }
      svg {
        width: 100%;
        height: 100%;
        border: 1px dashed red;   
      }
      /* No data message styles */
      .no-data {
        position: absolute; 
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 16px;
        font-size: 16px;
        color: #555;
        pointer-events: none; /* Prevents tooltip from blocking mouse events */
      }
    }

  `],
})
export class Chart12Component {
  // Generic type 'Selection<GElement, Datum, PElement, PDatum>' requires 4 type argument(s).ts(2314)
  host!: d3.Selection<HTMLDivElement, unknown, null, undefined>;
  svg!: any; // SVGSVGElement;
  tooltip!: d3.Selection<HTMLDivElement, unknown, any, undefined>; // any NOT NULL!!!

  @Input() data: any;
  hasData: boolean = false;
  title: string = "#12: D3: Scatterplot Chart";

  xLabel!: any;
  yLabel!: any;
  titleLabel!: any;

  xValue: string = "Petal_Length";
  yValue: string = "Petal_Width";

  dimensions: DOMRect | undefined;
  innerWidth!: number;
  innerHeight!: number;

  margin = {
    left: 40,
    top: 35,
    right:20,
    bottom: 40,
  };

  xScale: any;
  yScale: any;
  dataContainer!: any;
  xAxisContainer!: any;
  yAxisContainer!: any;
  xAxis!: any;
  yAxis!: any;
  colors!: any;

  get scatterData() {
    if (!this.xValue || !this.yValue) {
      return [];
    }
    return this.data.map((elem: any) => {
      return {
        x: +elem[this.xValue],
        y: +elem[this.yValue],
        species: elem.Species,
      };
    });
  }

  constructor(element: ElementRef) {
    this.host = d3.select(element.nativeElement); // d3 wrapper for the host element
    // console.log('constructor Chart12Component this:', this );
    // console.log('constructor Chart12Component data:', this.data);
  }

  ngOnInit(): void {
    this.svg = this.host.select("svg");
    // console.log("ngOnInit Chart12Component data:", this.data);
    // this.tooltip = this.host.getElementsByClassName("chart-tooltip",)[0] as HTMLDivElement;
    this.tooltip = this.host.select<HTMLDivElement>(".chart-tooltip"); //.node() as HTMLDivElement;
    this.setDimensions();
    this.setElements();
    this.updateChart();
  }

  ngOnChanges(): void {
    // console.log('ngOnChanges Chart12Component data:', this.data);
    if (!this.svg) {
      return;
    }

    this.updateChart();
  }
  setOption(option: string, event: any): void {
    // console.log(`Option ${option} selected with event:`, event);
    const value = event && event.target && event.target.value;

    switch (option) {
      case "x":
        this.xValue = value;
        break;
      case "y":
        this.yValue = value;
        break;
      default:
        console.warn(`Unknown option: ${option}`);
        break;
    }

    this.updateChart();
  }

  updateChart(): void {
    this.hasData = Array.isArray(this.data) && this.data.length > 0;
    this.setScaleParams();
    this.setLabels();
    this.setAxis();
    if (!Array.isArray(this.data) || this.data.length === 0) {
      return;
    }
    this.draw();
  }
  setDimensions(): void {
    // console.log('Setting dimensions for the chart...');
    this.dimensions = (this.svg as any).node()?.getBoundingClientRect();
    this.innerWidth =
      (this.dimensions?.width || 0) - this.margin.left - this.margin.right;
    this.innerHeight =
      (this.dimensions?.height || 0) - this.margin.top - this.margin.bottom;

    // this.svg.attr('viewBox', `0 0 ${this.dimensions?.width || 0} ${this.dimensions?.height || 0}`);
    this.svg.attr("viewBox", [
      0,
      0,
      this.dimensions?.width || 0,
      this.dimensions?.height || 0,
    ]);
  }
  setElements(): void {
    // console.log('Setting elements for the chart...');

    this.xAxisContainer = this.svg
      .append("g")
      .attr("class", "xAxisContainer")
      .attr(
        "transform",
        `translate(${this.margin.left}, ${this.innerHeight + this.margin.top})`,
      );

    this.yAxisContainer = this.svg
      .append("g")
      .attr("class", "yAxisContainer")
      .attr("transform", `translate(${this.margin.left}, ${this.margin.top})`);

    this.xLabel = this.svg
      .append("text")
      .attr("class", "xLabelContainer")
      .attr(
        "transform",
        `translate(${this.margin.left + this.innerWidth / 2}
          , ${this.innerHeight + this.margin.top + 40})`,
      )
      .attr("text-anchor", "middle")
      .attr("class", "label");
    // .attr('x', this.margin.left + this.innerWidth / 2)
    // .attr('y', this.innerHeight + this.margin.top + 40)

    this.yLabel = this.svg
      .append("text")
      .attr("class", "yLabelContainer")
      .attr("class", "yLabel")
      .attr("text-anchor", "middle")
      .attr(
        "transform",
        `translate(${this.margin.left - 20},
           ${this.margin.top + this.innerHeight / 2}) rotate(-90)`,
      );

    this.titleLabel = this.svg    
    .append("g")
    .attr("class", "titleLabel")
     .attr("transform", `translate(${(this.dimensions?.width ?? 0) / 2}, ${this.margin.top / 2})`)
      .append("text")
      .text(this.title)
      .style("font-size", "18px")
      .style("font-weight", "bold")
      .style("fill", "#444444")
      .attr("text-anchor", "middle") 
      ;
    this.dataContainer = this.svg
      .append("g")
      .attr("class", "dataContainer")
      .attr("transform", `translate(${this.margin.left}, ${this.margin.top})`);
  }
  setScaleParams(): void { 
    // console.log('Setting params with xValue:', this.xValue, 'yValue:', this.yValue);
 

    const maxXValue = this.xValue
    ? d3.max(this.data, (d: any) => +d[this.xValue])
    : 1; 
    const maxYValue = this.yValue
      ? d3.max(this.data, (d: any) => +d[this.yValue])
      : 1;
    const uniqueSpecies: Set<string> = new Set(
      this.data.map((d: any) => d.Species),
    );

    this.xScale = d3
      .scaleLinear()
      .domain([0, maxXValue || 1])
      .range([0, this.innerWidth]);

    this.yScale = d3
      .scaleLinear()
      .domain([0, maxYValue || 1])
      .range([this.innerHeight, 0]);

    this.colors = d3.scaleOrdinal(d3.schemeCategory10).domain(uniqueSpecies);
  }

  setLabels(): void {
    // console.log('Setting labels for the chart...');
    this.xLabel.text(this.xValue);
    this.yLabel.text(this.yValue);
  }
  setAxis(): void {
    // console.log('Setting axis for the chart...');

    this.xAxis = d3.axisBottom(this.xScale).tickSizeOuter(0);

    this.xAxisContainer.transition().duration(400).call(this.xAxis);

    this.yAxis = d3
      .axisLeft(this.yScale)
      .ticks(5)
      .tickSizeOuter(0)
      .tickSizeInner(-this.innerWidth);

    this.yAxisContainer.transition().duration(400).call(this.yAxis);

    this.yAxisContainer
      .selectAll(".tick:not(:nth-child(2)) line")
      .style("stroke", "#ddd")
      .style("stroke-dasharray", "2,2");
  }
  draw(): void {
    // console.log('Drawing the chart...');

    // bind the data to the circles
    const scatter = this.dataContainer
      .selectAll("circle.data")
      .data(this.scatterData);
    // enter new circles
    scatter
      .enter()
      .append("circle")
      .attr("class", "data")
      .attr("r", 4)
      // .style('fill', '#69b3a283')
      .style("fill", (d: any) => this.colors(d.species))
      .style("opacity", 0.7)
      .merge(scatter)
      .attr("cx", (d: any) => this.xScale(d.x))
      .attr("cy", (d: any) => this.yScale(d.y))
      .on("mouseenter", (event: MouseEvent, d: any) => {
        // const index = this.scatterData.indexOf(d);
        this.showTooltip(event, d);
      })
      .on("mousemove", (event: MouseEvent, d: any) => {
        this.showTooltip(event, d);
      })
      .on("mouseleave", () => this.hideTooltip());

    // exit old circles
    scatter.exit().remove();
  }

  // Tooltip methods

  // private showTooltip(event: MouseEvent, index: number, value: number): void {
  private showTooltip(event: MouseEvent, d: any): void {
    // get raw DOM node with .node() when need a DOM-only method like getBoundingClientRect().
    const hostBox = this.host.node()!.getBoundingClientRect();
    const x = event.clientX - hostBox.left + 12;
    const y = event.clientY - hostBox.top - 12;

    this.tooltip = this.host.select<HTMLDivElement>(".chart-tooltip");
    // .innerHTML =
    this.tooltip
      .html(
        ` <div style="font-style: italic; font-weight: bold; margin-bottom: 2px;">${d.species}</div>
      <div>${this.xValue}:${d.x}</div>
      <div>${this.yValue}:${d.y}</div>
    `,
      )
      // this.tooltip.style.display = "block";
      .style("display", "block")
      .style("left", `${x}px`)
      .style("top", `${y}px`);
    // this.tooltip.style.left = `${x}px`;
    // this.tooltip.style.top = `${y}px`;
  }

  private hideTooltip(): void {
    // this.tooltip.style.display = "none";
    this.tooltip.style("display", "none");
  }
}
