import { NgIf } from "@angular/common";
import { Component, ElementRef, Input } from "@angular/core";

import * as d3 from "d3";
import { merge, timeParse } from "d3";
@Component({
  selector: "chart9",
  imports: [NgIf   ],
  standalone: true,
  template: ` 
    <div class="chart-cell">
      <svg> 
      </svg>
     <div class="chart-tooltip"></div>
      <div class="no-data" *ngIf="!hasData">No data available</div>
    </div>
  `,
  styles: [`
    .chart-cell {
      flex-grow: 1;
      position: relative;

    }
    .titleLabel {
      text {
        font-size: 18px;
        font-weight: bold;
        fill: #444444;
      }
    }
      /* No data message styles */
      .no-data {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 16px;
        color: #555;
        pointer-events: none; /* Prevents tooltip from blocking mouse events */
      }

      `],
})
export class Chart9Component {
  @Input() data: any;
  hasData: boolean = false;
  host: any;
  svg: any;
  title: string = "#9: D3: Line/Path Chart ";
  legendContainer: any;
  // dimensions
  dimensions!: DOMRect;
  innerWidth!: number;
  innerHeight!: number;
  margins = { left: 50 , top: 40, right: 20, bottom: 80, };

  xScale: any;
  yScale: any;
  dataContainer!: any;
  xAxisContainer!: any;
  yAxisContainer!: any;
  xAxis!: any;
  yAxis!: any;
  colors!: any;

  xAxisLabel!: any;
  yAxisLabel!: any;
  titleLabel!: any;

  selected = ['hospitalized', 'death', 'hospitalizedCurrently' ];
  // get lineData() {
  //   return !this.data ? []: this.data.map((d: any) => ({
  //     return {  
  //         x: this.timeParse(d.date),
  //         y: d.hospitalized
  //     };
  //   }));
  // }

  lineGenerator = d3.line<number>()
    .x((d: any) => this.xScale(d.x))
    .y((d: any) => this.yScale(d.y))
    .curve(d3.curveMonotoneX); // Smooth curve

  get lineData() {
    const chartData = Array.isArray(this.data) ? this.data : [];

    return this.selected.map((key) => {
      return {
        name: key,
        data: chartData.map((d: any) => ({
          x: this.timeParse(d.date),
          y: +d[key],
        }))
        .filter((d: any) => d.x && Number.isFinite(d.y))
        .sort((a: any, b: any) => a.x.getTime() - b.x.getTime()), // Sort by x date
      };
    });
  }
  timeParse = d3.timeParse("%Y%m%d");
  niceData = d3.timeFormat('%Y-%B'); // 2020-March


  constructor(private element: ElementRef) {
    this.host = d3.select(this.element.nativeElement);
  }

  ngOnInit() {  
    this.svg = this.host.select("svg");    
    this.setDimensions();  // ONLY ONCE!!
    this.setElements();// ONLY ONCE!!
    this.updateChart();

    // console.log("chart9 this:", this);
    // console.log("chart9 data:", this.data);
  }

  ngOnChanges() {
    if(!this.svg) {
      return;
    }
    this.updateChart(); 
  }

  setDimensions() {
    this.dimensions = this.svg.node().getBoundingClientRect();
    this.innerWidth = this.dimensions.width - this.margins.left - this.margins.right;
    this.innerHeight = this.dimensions.height - this.margins.top - this.margins.bottom;
 this.svg.attr('viewBox', [0,0, this.dimensions.width, this.dimensions.height]);
  }

  setElements() {
   this.xAxisContainer = this.svg
      .append("g")
      .attr("class", "xAxisContainer")
      .attr(
        "transform",
        `translate(${this.margins.left}, ${this.innerHeight + this.margins.top})`,
      );

    this.yAxisContainer = this.svg
      .append("g")
      .attr("class", "yAxisContainer")
      .attr("transform", `translate(${this.margins.left}, ${this.margins.top})`); 
      
    // this.yAxisLabel = this.dataContainer.append("g");
    // this.yAxisLabel
    //   .append("text")
    //   .text("Value")
    //   .attr("transform", "rotate(-90)")
    //   .attr("text-anchor", "middle")
    //   .attr("fill", "black")
    //   .style("font-size", "11px");

    this.titleLabel = this.svg    
    .append("g")
    .attr("class", "titleLabel")
    .attr("transform", `translate(${this.dimensions.width / 2}, ${this.margins.top / 2})`)  
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
      .attr("transform", `translate(${this.margins.left}, ${this.margins.top})`);

      this.legendContainer = this.svg
      .append("g")
      .attr("class", "legendContainer")
      .attr("transform", `translate(${this.margins.left}, ${this.dimensions.height -  0.5 * this.margins.bottom + 10})`);
  }

  setScaleParams() {
    const data = this.lineData;
    const chartData = Array.isArray(this.data) ? this.data : [];
    const parsedDates = chartData
      .map((d: any) => this.timeParse(d.date))
      .filter((date: Date | null): date is Date => !!date);
    
    // domains
    const xExtent = d3.extent(parsedDates);
    const xDomain: [Date, Date] = xExtent[0] && xExtent[1]
      ? [xExtent[0], xExtent[1]]
      : [new Date(), new Date()];
    const maxValues = data.map((series) => d3.max(series.data, (d: any) => d.y) ?? 0);
    // console.log("chart9 maxValues:", maxValues);

    const maxY = d3.max(maxValues) ?? 100;
    const yDomain: [number, number] = [0, maxY || 100];
    const colorDomain = this.selected;

      const xRange = [0, this.innerWidth];
      const yRange = [this.innerHeight, 0];
      const colorRange = d3.schemeCategory10;

      // SCALES
    this.xScale = d3.scaleTime()
      .domain(xDomain)
      .range(xRange);
    this.yScale = d3.scaleLinear().domain(yDomain).range(yRange);
    this.colors = d3.scaleOrdinal().domain(colorDomain).range(colorRange);
    }

  setLabels() {
  }
  setAxis() {
    this.xAxis = d3.axisBottom(this.xScale).ticks(6)
    .tickSizeOuter(0);

    this.xAxisContainer
      .transition()
      .duration(500)
      .call(this.xAxis);
    
      this.xAxisContainer.selectAll(".tick text")
      .style("fill", "#666")
      .style("font-size", "11px");
      
    this.yAxis = d3
      .axisLeft(this.yScale)
      .ticks(6)
      .tickSizeOuter(0)
      .tickFormat((d: any) => d3.format("~s")(+d))
      .tickSizeInner(-this.innerWidth);

    this.yAxisContainer
      .transition()
      .duration(500)
      .call(this.yAxis);
    
      this.yAxisContainer.selectAll(".tick:not(:nth-child(2)) line")
      .style("stroke", "#ccc")
      .style("stroke-dasharray", "2,2");

      this.yAxisContainer.selectAll("text")
      .style("fill", "#666");
  }

  setLegend() {
    const generateLegendItems = (selection: any) => {
      selection.append('circle')
      .attr('class', 'legend-icon')
      .attr('cx',3)
      .attr('cy', -4)
      .attr('r', 3) ;
      selection.append('text')
      .attr('class', 'legend-label')
      .attr('x', 10)
      .style('font-size', '.9rem');
    }

    const updateLegendItems = (selection: any) => {
      selection.select('.legend-icon')
      .attr('fill', (d: any) => this.colors(d));
      selection.select('.legend-label')
      .text((d: any) => d);
    }

    // 1. select item containers and bind data
      const itemContainers = this.legendContainer.selectAll("g.legend-item")
      .data(this.selected);

    // 2. enter 
    // a. add new containers
    // b. add circle + text
     itemContainers.enter()
      .append("g")
      .attr("class", "legend-item")
      .call(generateLegendItems)
      // .each(function(d) {
      //   const g = d3.select(this as any);
      //   generateLegendItems(g);
      // });
 
    // 3. merge
    // a. update cicle and text (color + label)
      // b. bind efents (click + hover)
      .merge(itemContainers)
      .call(updateLegendItems)
      .on("mouseover", function(this: SVGGElement, event: any, d: any) {
        d3.select(this as SVGGElement).select(".legend-icon").attr("r", 5);
        // console.log("chart9 legend mouseover:", d);
      })
      .on("mouseout", function(this: SVGGElement, event: any, d: any) {
        d3.select(this as SVGGElement).select(".legend-icon").attr("r", 3);
        // console.log("chart9 legend mouseout:", d);
      })
      .on("click", (event: any, d: any) => {
        if (this.selected.includes(d)) {
          this.selected = this.selected.filter((item) => item !== d)
          // console.log("chart9 legend click: removed", d, "selected:", this.selected);
          } else {
            this.selected.push(d);
          }
      });  
    // 4. update state
      // a. transiion
      // b. set opacity (if active => 1 else 0.3)


    // 5. exit: remove groups not needed
    itemContainers.exit().remove();
      // 6. Reposition legend items based on their widths
    let totalPadding = 0;
    this.legendContainer.selectAll("g.legend-item")
    .each(function(this: SVGGElement)   {
      const g = d3.select(this as SVGGElement);
      g.attr("transform", `translate(${totalPadding}, 0)`);
      totalPadding += (g.node() as SVGGElement).getBBox().width + 20; // 20px padding between items
    });
    // 7. reposition legend 
    const legendWidth = this.legendContainer.node().getBBox().width;
    this.legendContainer.attr("transform", 
      `translate(${this.margins.left + (this.innerWidth - legendWidth)/2},
      ${this.dimensions.height - 0.5 * this.margins.bottom + 10})`);
  }
 
  draw() {
    //binding data
    const lines = this.dataContainer.selectAll(".line-path")
    .data(this.lineData);//, (d: any) => d.name);

    // enter + merge
    lines.enter()
      .append("path")
      .attr('class', 'line-path')
      .merge(lines)
      .transition()
      .duration(500)
      .attr("d", (d: any) => this.lineGenerator(d.data))
      .attr("fill", "none")
      .attr("stroke", (d: any) => this.colors(d.name))
      .attr("stroke-width", 2)
      ;
      //exit 
    lines.exit().remove();
  }
  updateChart() { 
    this.setScaleParams();
    this.setLabels();
    this.setAxis();
    this.setLegend();
    this.hasData = this.data && this.data.length > 0;
    // console.log("chart9 hasData:", this.hasData, this.data);
    this.draw();
  }
}
