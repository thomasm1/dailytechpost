 
import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AgCharts } from "ag-charts-angular";

interface Chart5Datum {
  index: string;
  value: number;
}

@Component({
  selector: "chart5",
  standalone: true,
  imports: [CommonModule, AgCharts],
  template: `
    <div class="chart-cell">
      <ag-charts class="chart-cell" [options]="chart5Options"></ag-charts>
    </div>
  `,
  styles: [
    `
      .chart-cell {  
        display: block;
        width: 100%;
        height: 100%;
        min-height: 0;
        min-width: 0;
        margin: 0;
        padding: 0; 
        background: #f0f0f09d;
      }
 
    `,
  ],
})
export class Chart5Component implements OnChanges, OnInit {
  @Input() data: number[] = [];
  title: string = "#5: Ag-Grid: Line Chart";

  public chart5Options: any = this.createChartOptions([]);

  ngOnInit(): void {
    this.updateChart5Data();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["data"]) {
      this.updateChart5Data();
    }
  }

  private updateChart5Data(): void {
    const chartData = this.toChartData(this.data);
    this.chart5Options = {
      ...this.chart5Options,
      data: chartData,
    };
  }

  private toChartData(data: number[]): Chart5Datum[] {
    return (data ?? []).map((value, index) => ({
      index: index.toString(),
      value,
    }));
  }

  private createChartOptions(data: Chart5Datum[]): any {
    return {
      data,
      title: {
        text: this.title,
      },
      background: {
        fill: "#c6eefba8",
      },
      padding: {
        top: 8,
        right: 8,
        bottom: 4,
        left: 4,
      },
      series: [
        {
          type: "line" as const,
          xKey: "index",
          yKey: "value",
          yName: "Value",
          fill: "teal",
          stroke: "#006666",
          tooltip: {
            renderer: (params: any) => ({
              title: `Index ${params.datum.index}`,
              content: `Value: ${params.datum.value}`,
            }),
          },
        },
      ],
      axes: [
        {
          type: "category" as const,
          position: "bottom" as const,
          label: {
            rotation: 45,
            fontSize: 10,
          },
          gridLine: {
            enabled: false,
          },
        },
        {
          type: "number" as const,
          position: "left" as const,
          keys: ["value"],
          label: {
            formatter: (params: any) => params.value.toLocaleString(),
          },
          gridLine: {
            enabled: true,
            style: [{ stroke: "grey", lineDash: [5, 5] }],
          },
        },
      ],
      legend: {
        enabled: false,
      },
    };
  }
}
