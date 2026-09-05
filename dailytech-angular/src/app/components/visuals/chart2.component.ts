import { CommonModule, NgIf, NgFor } from "@angular/common";
import {
  Component,
  ElementRef,
  AfterViewInit,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
  Input,
  SimpleChanges,
} from "@angular/core";
import * as gridHelpers from "../../utility/functions/grid-helpers";

@Component({
  selector: "chart2",
  standalone: true,
  // imports: [CommonModule ],
  imports: [NgIf, NgFor],
  template: `
    <div class="chart-cell" #chartHost>
      <svg #chartSvg>
        <!-- <line class="grid" *ngFor="let y of  "></line> -->
        <!-- <line class="grid" x1="0" y1="50" x2="350" y2="50"></line>
        <line class="grid" x1="0" y1="100" x2="350" y2="100"></line>
        <line class="grid" x1="0" y1="150" x2="350" y2="150"></line>
        <line class="grid" x1="0" y1="200" x2="350" y2="200"></line>
        <line class="grid" x1="0" y1="250" x2="350" y2="250"></line>
        <line class="grid" x1="0" y1="300" x2="350" y2="300"></line> -->

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
          <text
            class="x-label"
            [attr.x]="tick.x"
            [attr.y]="top + innerHeight + 14"
          >
            {{ tick.label }}
          </text>
        </ng-container>

        <path
          style="stroke: red; fill: none; stroke-width: 2;"
          [attr.d]="linePath"
        ></path>
      </svg>
      <div class="no-data" *ngIf="!hasData">No data available</div>
    </div>
  `,
  // templateUrl: './chart1.component.html',
  styles: [
    `
      .chart-cell {
        border: 1px dotted black;
        width: 100%;
        height: 100%;
        min-width: 0; /* Allows the chart to shrink inside a CSS grid cell. */
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
        margin: 0;
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
  // styleUrls: ['./chart1.component.scss']
})
export class Chart2Component implements OnInit, AfterViewInit, OnDestroy {
  @Input() data: number[] = [];
  hasData: boolean = false;
  svg!: SVGSVGElement;
  private resizeObserver?: ResizeObserver;
  private animationFrameId?: number;
  chartSVG!: HTMLElement;
  linePath = "";
  yTicks: { value: number; y: number }[] = [];
  xTicks: { label: string; x: number }[] = [];

  //dimensions
  left = 32;
  right = 0;
  top = 0;
  bottom = 18;

  dimensions!: DOMRect;
  outerPadding: number = 0;
  innerWidth: number = 0;
  innerHeight: number = 0;

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
    // console.log("chart2 data:", this.data);
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
    this.dimensions = this.chartSVG.getBoundingClientRect();
    this.innerWidth = this.dimensions.width - this.left - this.right;
    this.innerHeight = this.dimensions.height - this.bottom - this.top;
    this.yTicks = gridHelpers.buildYTicks(
      this.getYMax(this.data),
      this.top,
      this.innerHeight,
    );
    this.xTicks = gridHelpers.buildXTicks(
      this.data,
      this.left,
      this.innerWidth,
    );
    this.linePath = this.buildLinePath();
  }

  private buildLinePath(): string {
    this.hasData = this.data && this.data.length > 0;
    const max = this.getYMax(this.data);
    const xStep =
      this.data.length > 1 ? this.innerWidth / (this.data.length - 1) : 0;

    return this.data
      .map((d, idx) => {
        const x = this.left + idx * xStep;
        const y = this.top + this.innerHeight - (this.innerHeight / max) * d;
        const command = idx === 0 ? "M" : "L";

        return `${command}${x},${y}`;
      })
      .join(" ");
  }

  private getYMax(data: number[]): number {
    return data.length ? Math.max(...data) * 1.2 : 100;
  }
  private resizer(): void {
    //  not manually appending more SVG nodes! Only recalculating geometry
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
