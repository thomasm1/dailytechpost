import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { NgFor } from "@angular/common";
import * as  gridHelpers from "../../utility/functions/grid-helpers";

@Component({
  selector: "chart3",
  standalone: true,
  imports: [NgFor],
  template: `
    <div class="chart-cell">
      <svg>
        <ng-container *ngFor="let tick of yTicks">
          <line
            class="grid"
            [attr.x1]="left"
            [attr.y1]="tick.y"
            [attr.x2]="left + innerWidth"
            [attr.y2]="tick.y"
          ></line>
          <text class="y-label" [attr.x]="left - 6" [attr.y]="tick.y + 4">
            {{ tick.value }}
          </text>
        </ng-container>

        <ng-container *ngFor="let tick of xTicks">
          <line
            class="grid"
            [attr.x1]="tick.x"
            [attr.y1]="top"
            [attr.x2]="tick.x"
            [attr.y2]="top + innerHeight"
          ></line>
          <text class="x-label" [attr.x]="tick.x" [attr.y]="top + innerHeight + 14">
            {{ tick.label }}
          </text>
        </ng-container>

        <path class="quadratic-path" [attr.d]="quadraticPath"></path>
        <path class="cubic-path" [attr.d]="cubicPath"></path>
        <path class="quadratic-data-path" [attr.d]="quadraticDataPath"></path>
        <path class="cubic-data-path" [attr.d]="cubicDataPath"></path>

        <circle class="point quadratic-point" [attr.cx]="left" [attr.cy]="top + innerHeight" r="3"></circle>
        <circle class="point quadratic-point" [attr.cx]="left + innerWidth * 0.5" [attr.cy]="top + innerHeight * 0.12" r="3"></circle>
        <circle class="point quadratic-point" [attr.cx]="left + innerWidth" [attr.cy]="top + innerHeight" r="3"></circle>

        <circle class="point cubic-point" [attr.cx]="left" [attr.cy]="top + innerHeight * 0.68" r="3"></circle>
        <circle class="point cubic-point" [attr.cx]="left + innerWidth * 0.25" [attr.cy]="top + innerHeight * 0.05" r="3"></circle>
        <circle class="point cubic-point" [attr.cx]="left + innerWidth * 0.75" [attr.cy]="top + innerHeight * 0.95" r="3"></circle>
        <circle class="point cubic-point" [attr.cx]="left + innerWidth" [attr.cy]="top + innerHeight * 0.32" r="3"></circle>
      </svg>
    </div>
  `,
  styles: [
    `
      .chart-cell {
        border: 1px dotted black;
        width: 100%;
        height: 100%;
        min-width: 0;
        margin: 0;
        padding: 0;
      }

      svg {
        margin: 0;
        padding: 0;
        border: 1px dashed red;
        display: block;
        height: 100%;
        width: 100%;
        background-color: #f0f0f09d;
      }

      .grid {
        stroke: black;
        stroke-dasharray: 5 5;
        opacity: 0.8;
      }

      .y-label {
        fill: black;
        font-size: 11px;
        text-anchor: end;
      }

      .x-label {
        fill: black;
        font-size: 11px;
        text-anchor: middle;
      }

      .quadratic-path {
        stroke: #c725eb;
        fill: none;
        stroke-width: 2;
        stroke-dasharray: 6 4;
      }
     .cubic-path {
        stroke: #2626dc;
        fill: none;
        stroke-width: 2;
      }
 
      .quadratic-data-path {
        stroke: red;
        fill: none;
        stroke-width: 2;
      }
      .cubic-data-path {
        stroke: black;
        fill: none;
        stroke-width: 2;
      }
       
      .point {
        stroke: white;
        stroke-width: 1;
      }

      .quadratic-point {
        fill: #c725eb;
      }

      .cubic-point {
        fill: #2626dc;
      }
    `,
  ],
})
export class Chart3Component implements OnInit, AfterViewInit, OnDestroy {
  @Input() data: number[] = [];
  private resizeObserver?: ResizeObserver;
  private animationFrameId?: number;
  chartSVG!: HTMLElement;

  left = 32;
  right = 0;
  top = 0;
  bottom = 18;

  innerWidth = 0;
  innerHeight = 0;
  quadraticPath = "";
  cubicPath = "";
  quadraticDataPath = "";
  cubicDataPath = "";
  yTicks: { value: number; y: number }[] = [];
  xTicks: { label: string; x: number }[] = [];

  constructor(
    private cdr: ChangeDetectorRef,
    private element: ElementRef,
  ) {}

  ngOnInit(): void {}

  private viewInitialized = false;
 
  ngOnChanges(changes: SimpleChanges): void {
    if (changes["data"] && this.viewInitialized) {
      this.renderChart(); 
    }
  }
  ngAfterViewInit(): void {
    this.initChart();
    this.viewInitialized = true;
   // requestAnimationFrame waits until SVG has actual rendered size 
    // before measuring SVG dimensions.
    // (waits for Angular's first view check before measuring the SVG.)
    this.animationFrameId = requestAnimationFrame(() => {
      this.renderChart();
      this.cdr.detectChanges();
      this.resizer();
    });
  }

  private initChart(): void {
    this.chartSVG = this.element.nativeElement.getElementsByTagName("svg")[0];
  }

  private renderChart(): void {
    const dimensions = this.chartSVG.getBoundingClientRect();
    this.innerWidth = dimensions.width - this.left - this.right;
    this.innerHeight = dimensions.height - this.bottom - this.top;
    this.yTicks = gridHelpers.buildYTicks(this.getYMax(this.data), this.top, this.innerHeight);
    this.xTicks = gridHelpers.buildXTicks(this.data, this.left, this.innerWidth);
    this.quadraticPath = this.buildQuadraticPath();
    this.cubicPath = this.buildCubicPath();
    this.quadraticDataPath = this.buildQuadraticDataPath();
    this.cubicDataPath = this.buildCubicDataPath();
  }

  private buildQuadraticPath(): string { //(1 control point) SVG path. PINK LINE
    const startX = this.left;
    const startY = this.top + this.innerHeight;
    const controlX = this.left + this.innerWidth * 0.5;
    const controlY = this.top + this.innerHeight * 0.12;
    const endX = this.left + this.innerWidth;
    const endY = this.top + this.innerHeight;

    return `M${startX},${startY} Q${controlX},${controlY} ${endX},${endY}`;
  }

  private buildCubicPath(): string { //(2 control points) SVG path. BLUE LINE
    const startX = this.left;
    const startY = this.top + this.innerHeight * 0.68;
    const control1X = this.left + this.innerWidth * 0.25;
    const control1Y = this.top + this.innerHeight * 0.05;
    const control2X = this.left + this.innerWidth * 0.75;
    const control2Y = this.top + this.innerHeight * 0.95;
    const endX = this.left + this.innerWidth;
    const endY = this.top + this.innerHeight * 0.32;

    return `M${startX},${startY} C${control1X},${control1Y} ${control2X},${control2Y} ${endX},${endY}`;
  }

  // input data with one-control-point quadratic segments. RED LINE
  private buildQuadraticDataPath(): string {
    if (!this.data.length) {
      return "";
    }

    const points = this.buildDataPoints();

    if (points.length === 1) {
      return `M${points[0].x},${points[0].y}`;
    }

    return points
      .map((point, idx) => {
        if (idx === 0) {
          return `M${point.x},${point.y}`;
        }

        const previous = points[idx - 1];
        const controlX = previous.x + (point.x - previous.x) * 0.5;
        const controlY = previous.y;

        return `Q${controlX},${controlY} ${point.x},${point.y}`;
      })
      .join(" ");
  }
  
  // input data as cubic bezier (2 control points) SVG path. BLACK LINE
  private buildCubicDataPath(): string {
    if (!this.data.length) {
      return "";
    }

    const points = this.buildDataPoints();

    if (points.length === 1) {
      return `M${points[0].x},${points[0].y}`;
    }

    return points
      .map((point, idx) => {
        if (idx === 0) {
          return `M${point.x},${point.y}`;
        }

        const previous = points[idx - 1];
        const controlX = previous.x + (point.x - previous.x) * 0.5;

        return `C${controlX},${previous.y} ${controlX},${point.y} ${point.x},${point.y}`;
      })
      .join(" ");
  }

  private buildDataPoints(): { x: number; y: number }[] {
    // It converts each input value into a chart coordinate.
    const max = this.getYMax(this.data);
    const xStep =
      this.data.length > 1 ? this.innerWidth / (this.data.length - 1) : 0;

    return this.data.map((d, idx) => ({
      x: this.left + idx * xStep,
      y: this.top + this.innerHeight - (this.innerHeight / max) * d,
    }));
  }



  private getYMax(data: number[]): number {
    return data.length ? Math.max(...data) * 1.2 : 100;
  }

  private resizer(): void {
    this.resizeObserver = new ResizeObserver(() => {
      this.renderChart();
      this.cdr.detectChanges();
    });

    this.resizeObserver.observe(this.chartSVG);
  }

  ngOnDestroy(): void {
    // It cancels the scheduled first render if the component is destroyed early.
    if (this.animationFrameId !== undefined) {
      cancelAnimationFrame(this.animationFrameId);
    }
    this.resizeObserver?.disconnect();
  }
}
