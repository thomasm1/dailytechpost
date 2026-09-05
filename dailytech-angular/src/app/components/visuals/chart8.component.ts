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
  selector: "chart8",
  standalone: true,
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="chart-cell">
      <svg></svg>
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

      .grid {
        stroke: black;
        stroke-dasharray: 5 5;
        opacity: 0.8;
      }

      .d3-rect {
        fill: teal;
      }
      rect {
        transition: all 0.5s ease;
      }

      .line-point {
        cursor: pointer;
      }

      .chart-tooltip {
        position: absolute;
        display: none;
        min-width: 92px;
        padding: 6px 8px;
        border-radius: 4px;
        background: rgba(20, 20, 20, 0.9);
        color: white;
        font: 12px sans-serif;
        line-height: 1.35;
        pointer-events: none;
        z-index: 2;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
      }

      .chart-tooltip-title {
        font-weight: 700;
        margin-bottom: 2px;
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
export class Chart8Component implements OnChanges, AfterViewInit, OnDestroy {
  //  host: HTMLElement = d3.select(this.element.nativeElement).node() as HTMLElement;
  host: HTMLElement = this.element.nativeElement;
  // first generic "GElement": type of the selected element(s).
  // second generic "Datum": type of the datum of a selected element(s).
  // third generic "PElement": type of the parent element(s) in the D3 selection.
  // fourth generic"PDatum": type of the datum of the parent element(s).
  @Input() data: number[] = [];
  hasData: boolean = false;
  titleLabel: any;
  title: string = "#8: D3: Bar/Line Chart";
  chartSVG!: SVGSVGElement;
  tooltip!: HTMLDivElement;
  dimensions!: DOMRect;

  private resizeObserver?: ResizeObserver;
  private animationFrameId?: number;
  private viewInitialized = false;

  private filterNum: number = 125;
  private dataIsFiltered = false;

  get filteredData(): number[] {
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
  private xLine = d3.scaleLinear();
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
    const visibleData = this.filteredData;
    // Linear scale for line chart
    this.xLine
      .domain([0, Math.max(visibleData.length - 1, 0)]) // indices as domain
      .range([this.left, this.left + this.innerWidth]); // Range for the x-axis
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
    this.titleLabel.attr(
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
    const lineGenerator = d3
      .line<number>()
      .x((d: number, i: number) => this.xLine(i) ?? this.left)
      .y((d: number) => this.y(d));

    let linePath: d3.Selection<SVGPathElement, unknown, null, undefined>;
    const bars: d3.Selection<SVGRectElement, number, SVGGElement, unknown> =
      this.dataContainer
        .selectAll("rect")
        // make one rect per datum, using the index as the key for data binding
        .data(this.filteredData, (_d: number, idx: number) => idx);

    linePath = this.dataContainer
      .selectAll(".line-path")
      // make one path whose datum is the whole array.
      .data([this.filteredData])
      .join("path")
      .attr("class", "line-path")
      .attr("d", lineGenerator as any)
      .attr("fill", "none")
      .attr("stroke", "teal")
      .attr("stroke-width", 2);

    this.dataContainer
      .selectAll(".line-point")
      .data(this.filteredData, (_d: number, idx: number) => idx)
      .join("circle")
      .attr("class", "line-point")
      .attr("cx", (_: number, idx: number) => this.xLine(idx))
      .attr("cy", (d: number) => this.y(d))
      .attr("r", 4)
      .attr("fill", "white")
      .attr("stroke", "teal")
      .attr("stroke-width", 2)
      .on("mouseenter", (event: MouseEvent, d: number) => {
        const index = this.filteredData.indexOf(d);
        this.showTooltip(event, index, d);
      })
      .on("mousemove", (event: MouseEvent, d: number) => {
        const index = this.filteredData.indexOf(d);
        this.showTooltip(event, index, d);
      })
      .on("mouseleave", () => this.hideTooltip());

    bars
      .style("fill", "orange")
      .style("opacity", 0.5)
      .transition()
      .duration(500)
      .attr("x", (_: number, idx: number) => this.x(idx) ?? this.left)
      .attr("y", (d: number) => this.y(d))
      .attr("width", this.x.bandwidth())
      .attr("height", (d: number) => this.top + this.innerHeight - this.y(d));

    bars
      .enter()
      .append("rect")
      // .merge(bars)
      .attr("x", (_: number, idx: number) => this.x(idx) ?? this.left)
      .attr("y", (d: number) => this.y(d))
      .attr("width", this.x.bandwidth())
      .attr("height", (d: number) => this.top + this.innerHeight - this.y(d))
      .attr("class", "d3-rect")
      // .style("fill", "teal")
      .style("opacity", 0.5);

    bars.exit().style("fill", "red").remove();
  }

  private initChart(): void {
    this.chartSVG = this.host.getElementsByTagName("svg")[0]; 
    this.tooltip = this.host.getElementsByClassName(
      "chart-tooltip",
    )[0] as HTMLDivElement;
    this.dataContainer = d3.select(this.chartSVG);
    this.chartSVG.onclick = () => {
      // console.log("SVG load aborted");
      this.dataChanged();
    };

    this.setElements();

    this.yAxisLabel = this.dataContainer.append("g");
    this.yAxisLabel
      .append("text")
      .text("Value")
      .attr("transform", "rotate(-90)")
      .attr("text-anchor", "middle")
      .attr("fill", "black")
      .style("font-size", "11px");

    this.titleLabel = this.dataContainer.append("g");
    this.titleLabel
      .append("text")
      .text(this.title)
      .style("font-size", "18px") 
      .style("fill", "#444444")
      .attr("text-anchor", "middle") 
      ;
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
