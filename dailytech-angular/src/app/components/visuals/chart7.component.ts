import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewEncapsulation,
} from "@angular/core";
import * as d3 from "d3";

@Component({
  selector: "chart7",
  standalone: true,
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="chart-cell">
      <svg>
        </svg>
        <div class="chart-tooltip"></div>
        <div class="no-data" *ngIf="!hasData">No data available</div> 
    </div>
  `,
  styles: [
    `
      .chart-cell {
        width: 100%;
        height: 100%;
        border: 1px dotted black;
        min-width: 0;
        margin: 0;
        padding: 0;
        position: relative;
      }

      svg {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        border: 1px dashed red;
        display: block;
        background-color: #f0f0f09d;
      }
      
      rect {
        transition: all 0.5s ease;
      } 

      .chart-tooltip {
        position: absolute;
        pointer-events: none;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 5px;
        border-radius: 3px;
        font-size: 12px;
        display: none; /* Initially hidden */
        min-width: 50px;
        text-align: center;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
        z-index:2;
      }
      .chart-tooltip-title {
        font-weight: bold;
        margin-bottom: 2px;
      }
      .chart-tooltip-value {
        font-size: 14px;
      }

      .grid {
        stroke: black;
        stroke-dasharray: 5 5;
        opacity: 0.8;
      }

      .d3-rect {
        cursor: pointer;
      }
      .no-data {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 16px;
        color: #555;
        pointer-events: none; /* Prevents tooltip from blocking mouse events */
      }
    `,
  ],    
})
export class Chart7Component implements OnChanges, AfterViewInit, OnDestroy {
  //  host: HTMLElement = d3.select(this.element.nativeElement).node() as HTMLElement;
  host: HTMLElement = this.element.nativeElement;
  // first generic "GElement": type of the selected element(s).
  // second generic "Datum": type of the datum of a selected element(s).
  // third generic "PElement": type of the parent element(s) in the D3 selection.
  // fourth generic"PDatum": type of the datum of the parent element(s).
  @Input() data: number[] = [];
  hasData: boolean = false;
  title: string = "#7: D3: Bar Chart";
  chartSVG!: SVGSVGElement;
  tooltip!: HTMLDivElement;

  dimensions!: DOMRect;
  textLabel: any;

  private resizeObserver?: ResizeObserver;
  private animationFrameId?: number;
  private viewInitialized = false;

  private filterNum: number = 125;
  private dataIsFiltered = false;
  get barsData(): number[] {
    this.filterNum = this.filterNum || 100;
    return this.dataIsFiltered
      ? this.data.filter((d) => d > this.filterNum)
      : this.data;
  }

  private dataContainer?: any; // d3.Selection<SVGGElement, unknown, null, undefined>;
  private xAxisContainer?: any; // d3.Selection<SVGGElement, unknown, null, undefined>;
  private xAxis?: any; // d3.Axis<number | { valueOf(): number; }>;
  private yAxisContainer?: any; // d3.Selection<SVGGElement, unknown, null, undefined>;
  private yAxisLabel?: any; // d3.Selection<SVGGElement, unknown, null, undefined>;
  private yAxis?: any; // d3.Axis<number | { valueOf(): number; }>;
  private x = d3.scaleBand<number>();
  private y = d3.scaleLinear();

  //dimensions
  left = 32;
  right = 0;
  top = 20;
  bottom = 18;
  innerWidth = 0;
  innerHeight = 0;

  constructor(private element: ElementRef) {}
  /* ngOnInit(): void {
   *   this.svg = this.host.select("svg");
   *   console.log("SVG element selected:", this.svg);
   *
   *   this.svg.selectAll('rect')
   *     .data(this.data)
   *     .enter()
   *     .append('rect')
   *     .attr('x', (d: number, i: number) => this.left + i * (this.rectWidth + this.padding))
   *     .attr('y', (d: number) => this.top + this.innerHeight - d)
   *     .attr('width', this.rectWidth)
   *     .attr('height', (d: number) => d);
   * }   */

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["data"] && this.viewInitialized) {
      this.setScaleParams();
      this.updateChart();
    }
  }

  ngAfterViewInit(): void {
    this.initChart();
    this.viewInitialized = true;

    // Wait until the SVG has an actual rendered size before measuring it.
    this.animationFrameId = requestAnimationFrame(() => {
      this.setScaleParams();
      this.updateChart();
      this.resizer();
    });
  }

  private setDimensions(): void {
    this.dimensions = this.chartSVG.getBoundingClientRect();

    this.innerWidth = this.dimensions.width - this.left - this.right;
    this.innerHeight = this.dimensions.height - this.top - this.bottom;
  }

  private setElements(): void {
    this.xAxisContainer = this.dataContainer.append("g");
    this.yAxisContainer = this.dataContainer.append("g");
  }

  private setScaleParams(): void {
    const visibleData = this.barsData;
    // Band scale for categorical data (indices)
    this.x
      .domain(d3.range(visibleData.length)) // .domain(this.data.map((_, idx) => idx)) // indices as domain
      .range([this.left, this.left + this.innerWidth]) // Range for the x-axis
      .padding(0.2);
    this.y
      .domain([0, d3.max(this.data.map((d: number) => d)) ?? 1]) // Domain from 0 to max value in data
      .nice()
      .range([this.top + this.innerHeight, this.top]); // Range for the y-axis (inverted because SVG y=0 is top)
  }

  private setLabels(): void {
    this.yAxisLabel?.attr(
      "transform",
      `translate(10, ${this.top + this.innerHeight / 2})`,
    );

    this.yAxisContainer
      .selectAll(".tick line")
      .attr("class", "grid")
      .style("stroke", "grey")
      .attr("opacity", 0.8);
    this.yAxisContainer.selectAll(".tick text").attr("fill", "black");
    this.xAxisContainer
      .selectAll(".tick text")
      .text((d: any, i: any) => i.toString()) // Show index as label
      .attr("transform", "translate(-13, 2) rotate( 45)") // Move labels down a bit
      .attr("fill", "black")
      .style("text-anchor", "end");
    this.textLabel.attr(
      "transform",
      `translate(${0.5 * this.dimensions.width}, 20)`,
    );
  }

  private setAxis(): void {
    if (!this.xAxisContainer) {
      return;
    }
    this.xAxisContainer?.attr(
      "transform",
      `translate(0, ${this.top + this.innerHeight})`,
    );
    this.yAxisContainer?.attr("transform", `translate(${this.left}, 0)`);

    this.xAxis = d3.axisBottom(this.x);
    this.xAxisContainer.call(this.xAxis);
    this.yAxis = d3
      .axisLeft(this.y)
      .tickSizeOuter(0)
      .tickSizeInner(-this.innerWidth)
      .tickFormat(d3.format("~s"));
    this.yAxisContainer.call(this.yAxis);
  }

  private draw(): void {
    if (!this.dataContainer || this.innerWidth <= 0 || this.innerHeight <= 0) {
      return;
    }
  
    const barFill = this.dataIsFiltered ? "orange" : "teal";
    const bars = this.dataContainer
      .selectAll("rect")
      .data(this.barsData, (_d: number, idx: number) => idx);

    const mergedBars = bars
      .enter()
      .append("rect")
      .style("fill", barFill)
      .attr("class", "d3-rect")
      .style("opacity", 0.5)
      .merge(bars);

    mergedBars
      .attr("x", (_: number, idx: number) => this.x(idx) ?? this.left)
      .attr("y", (d: number) => this.y(d))
      .attr("width", this.x.bandwidth())
      .attr("height", (d: number) => this.top + this.innerHeight - this.y(d))
      .on("mouseenter", (event: MouseEvent, d: number) => {
        const index = this.barsData.indexOf(d);
        this.showTooltip(event, index, d);
      })
      .on("mousemove", (event: MouseEvent, d: number) => {
        const index = this.barsData.indexOf(d);
        this.showTooltip(event, index, d);
      })
      .on("mouseleave", () => this.hideTooltip())
      .style("fill", barFill)
      .transition()
      .duration(500)
      .attr("x", (_: number, idx: number) => this.x(idx) ?? this.left)
      .attr("y", (d: number) => this.y(d))
      .attr("width", this.x.bandwidth())
      .attr("height", (d: number) => this.top + this.innerHeight - this.y(d));

    bars.exit().style("fill", "red").remove();
  }

  private initChart(): void {
    
    this.chartSVG = this.host.getElementsByTagName("svg")[0];
    this.dataContainer = d3.select(this.chartSVG);

    this.tooltip = this.host.getElementsByClassName("chart-tooltip")[0] as HTMLDivElement;
    
    this.setElements();
  
    this.chartSVG.onclick = () => {
      // console.log("SVG load aborted");
      this.dataChanged();
    };

    this.yAxisLabel = this.dataContainer.append("g");
    this.yAxisLabel
      .append("text")
      .text("Value")
      .attr("transform", "rotate(-90)")
      .attr("text-anchor", "middle")
      .attr("fill", "black")
      .style("font-size", "11px");


    this.textLabel = this.dataContainer.append("g");
    this.textLabel
      .append("text")
      .text(this.title)
      .style("font-size", "18px")
      .style("font-weight", "bold")
      .style("fill", "#444444")
      .attr("text-anchor", "middle")
      .attr("fill", "black");
  }
private showTooltip(event: MouseEvent, index: number, value: number): void {
    const hostBox = this.host.getBoundingClientRect();
    const x = event.clientX - hostBox.left + 12;
    const y = event.clientY - hostBox.top - 12;

    this.tooltip.innerHTML = `
      <div class="chart-tooltip-title">Index ${index}</div>
      <div>Value: ${value.toLocaleString()}</div>
    `;
    this.tooltip.style.display = "block";
    this.tooltip.style.left = `${x}px`;
    this.tooltip.style.top = `${y}px`;
  }

  private hideTooltip(): void {
    this.tooltip.style.display = "none";
  }
  private dataChanged(): void {
    this.dataIsFiltered = !this.dataIsFiltered;
    this.updateChart();
    // console.log("dataIsFiltered: ", this.dataIsFiltered);
  }

  private updateChart(): void {
    this.setDimensions();
    this.setScaleParams();
    
    this.setAxis();
    this.setLabels();
    this.hasData = this.data && this.data.length > 0;
    if (!this.hasData) {
      this.dataContainer?.selectAll(".d3-rect").remove();
      return;
    }
    this.draw();
  }

  //====================================================================================

  private resizer(): void {
    this.resizeObserver = new ResizeObserver(() => {
      this.updateChart();
    });

    this.resizeObserver.observe(this.chartSVG);
  }

  ngOnDestroy(): void {
    if (this.animationFrameId !== undefined) {
      cancelAnimationFrame(this.animationFrameId);
    }
    this.resizeObserver?.disconnect();
  }
}
