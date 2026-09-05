import { NgFor } from "@angular/common";
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
import * as  gridHelpers from "../../utility/functions/grid-helpers";

@Component({
  selector: "chart1",
  standalone: true,
  imports: [NgFor],
  template: `
    <div class="chart-cell" #chartHost>
      <svg #chartSvg>
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
        <rect
          *ngFor="let d of data; index as idx"
          fill="steelblue"
          stroke="black"
          [attr.x]="left + idx * rectWidth + 0.5 * padding + outerPadding"
          [attr.y]="this.innerHeight - (this.innerHeight / maxHeight) * d"
          [attr.width]="this.bandWidth"
          [attr.height]="(this.innerHeight / maxHeight) * d"
        ></rect>

        <text
          *ngFor="let d of data; index as idx"
          class="x-labels"
          [attr.x]="left + idx * rectWidth + 0.5 * padding + outerPadding + bandWidth / 2"
          [attr.y]="innerHeight + 15"
        >
          {{ idx + 1 }}
        </text>

        <line
          class="x-axis"
          [attr.x1]="left + outerPadding"
          [attr.y1]="innerHeight   "
          [attr.x2]="innerWidth - right - outerPadding"
          [attr.y2]="innerHeight  "
        ></line>
      </svg>
    </div>
  `,
  // templateUrl: './chart1.component.html',
  styles: [
    `
      .chart-cell {
        border: 1px dotted black;
        width: 100%;
        height: 100%;
        min-width: 0; /*this is a must for css grid, so it can shrink*/
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
      }
      rect {
        border: 1px solid red;
        transition: all 0.3s ease;
      }

      .y-label {
        fill: black;
        font-size: 11px;
        text-anchor: end;
      }

      text.x-labels {
        text-anchor: middle;
        font-size: 11px;
      }
      line.x-axis {
        stroke: black;
        stroke-width: 0.5;
      }
    `,
  ],
  // styleUrls: ['./chart1.component.scss']
})
export class Chart1Component implements OnInit, AfterViewInit, OnDestroy {
  @Input() data: number[] = [];
  svg!: SVGSVGElement;
  private resizeObserver?: ResizeObserver;
  private animationFrameId?: number;
  chartSVG!: HTMLElement;
  yTicks: { value: number; y: number }[] = [];

  //dimensions
  rectWidth = 80;
  maxHeight = 250;
  dimensions!: DOMRect;
  outerPadding: number = 10;
  padding: number = 0;
  bandWidth = 0;
  bandWidthCoefficient = 0.8; //80% = 0.8 inter-bar padding
  left = 30; // between svg & bounding div
  right = 10;
  top = 10;
  bottom = 10;
  innerWidth: number = 0;
  innerHeight: number = 0;

  constructor(
    private cdr: ChangeDetectorRef,
    private element: ElementRef,
  ) {
   
  }
  ngOnInit(): void {
  }

  private viewInitialized = false;
 
  ngOnChanges(changes: SimpleChanges): void {
    if (changes["data"] && this.viewInitialized) {
      this.renderChart(); 
    }
  }
  ngAfterViewInit(): void {
    // console.log('chart1 data:', this.data);
    this.viewInitialized = true;
    this.initChart();
    // requestAnimationFrame waits until the SVG has an actual rendered size 
    // before measuring it.
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
    if (!this.data.length) {
      return;
    }

    this.dimensions = this.chartSVG.getBoundingClientRect();
    this.innerWidth = this.dimensions.width - this.left - this.right;
    this.innerHeight = this.dimensions.height - this.bottom - this.top;

    this.yTicks = gridHelpers.buildYTicks(this.getYMax(this.data), this.top, this.innerHeight);


    this.rectWidth =
      (this.innerWidth  - 2 * this.outerPadding) / this.data.length;
    this.bandWidth = this.rectWidth * this.bandWidthCoefficient;
    this.padding = this.rectWidth * (1 - this.bandWidthCoefficient);
    // console.log("SVG element:", this.svg);
    // console.log("SVG dimensions:", this.dimensions);
    this.maxHeight = Math.max(...this.data) * 1.3; // padding to max value
    // const height = 300;
    //   d3.select(this.chartSvg.nativeElement)
    //     .attr('width', width)
    //     .attr('height', height)
    //     .attr('viewBox', `0 0 ${width} ${height}`);
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


  // data = [100, 150, 75, 200, 125,100, 150, 75, 200, 125];
 
  // constructor(private element: ElementRef) { 
  //   this.data = Array.from({ length: 10 }, () => Math.floor(Math.random() * 200) + 50);
  // }
  // svg!: SVGSVGElement;

  // ngOnInit(): void {
  // this.svg = this.element.nativeElement.getElementsByTagName('svg')[0];
  // this.dimensions = this.svg.getBoundingClientRect();
  // this.innerWidth = this.dimensions.width - this.left - this.right;
  // this.innerHeight = this.dimensions.height - this.bottom; // - this.top

  // this.rectWidth = (this.dimensions.width - 2 * this.outerPadding) / this.data.length;
  // this.bandWidth = this.rectWidth * this.bandWidthCoefficient;
  // this.padding = this.rectWidth * (1 - this.bandWidthCoefficient) ;
  // console.log('SVG element:', this.svg);
  // console.log('SVG dimensions:', this.dimensions);
  // this.max = Math.max(...this.data) * 1.3; // padding to max value 
  // }
 
  //====================================================================================
  // private buildHorizGridLines(): { x1: number; y1: number; x2: number; y2: number }[] {
  //   const tickCount = 5;
  //   const lines: { x1: number; y1: number; x2: number; y2: number }[] = [];

  //   for (let idx = 0; idx <= tickCount; idx++) { 
  //     const y = this.top + (this.innerHeight / tickCount) * idx;
  //     lines.push({ x1: this.left, y1: y, x2: this.left + this.innerWidth, y2: y }); 
  //   }
  //   return lines;
  // }