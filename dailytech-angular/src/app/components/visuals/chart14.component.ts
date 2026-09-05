import { NgIf } from "@angular/common";
import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { AgCharts } from "ag-charts-angular";
import { IPieData, IPieDataElements } from "../../model/interfaces/chart.interfaces";

@Component({
  selector: "chart14",
  standalone: true,
  imports: [NgIf, AgCharts],
  template: `
   <div class="chart-14">
    <div class="controller">
      <select [value]="mode" (change)="setMode($event)">
        <option value="now">Now</option>
        <option value="before">Before</option>
      </select>
    </div>

    <ag-charts [options]="chart14Options"></ag-charts>
    <div class="no-data" *ngIf="!hasData">No data available</div>
  </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      min-width: 0;
      min-height: 0;
    }

    .chart-14 {
      position: relative;
      width: 100%;
      height: 100%;
      min-width: 0;
      min-height: 0;
      background: #f0f0f09d;
      border: 1px dotted black;
    }
    .controller {
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 2;
    }

    .controller select {
    padding: 2px 6px;
    font-size: 12px;
    }
    ag-charts {
      display: block;
      width: 100%;
      height: 100%;
      min-width: 0;
      min-height: 0;
    } 
    .no-data {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 16px;
      color: #555;
      pointer-events: none;
    }
  `],
})
export class Chart14Component implements OnChanges {
//   @Input() data!: IPieData;
@Input() data: any[] = [];

mode: "now" | "before" = "now";

setMode(event: Event): void {
  this.mode = (event.target as HTMLSelectElement).value as "now" | "before";
  this.updateChart();
}

private toChartData(data: any[]): IPieDataElements[] {
  return (Array.isArray(data) ? data : [])
    .map((row) => ({
      id: row.name,
      label: row.name,
      value: Number(row[this.mode]),
    }))
    .filter((row) => Number.isFinite(row.value) && row.value > 0);
}

  hasData = false;
  
  title = "#14: AG Charts: Donut Chart";
 
 
  chart14Options: any = this.createChartOptions([]);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["data"]) {
      this.updateChart();
    }
  }

  private updateChart(): void {
    const chartData = this.toChartData(this.data);
    this.hasData = chartData.length > 0;
    this.chart14Options = this.createChartOptions(chartData);
  }

//   private toChartData(data: IPieData | undefined): IPieDataElements[] {
//     return (data?.data ?? [])
//       .map((row) => ({
//         id: row.id,
//         label: row.label,
//         value: Number(row.value),
//       }))
//       .filter((row) => Number.isFinite(row.value) && row.value > 0);
//   }

  private createChartOptions(data: IPieDataElements[]): any {
    return {
      data,
     title: {
        text: `${this.title} (${this.mode})`,
        },
      background: {
        fill: "#f0f0f09d",
      },
      padding: {
        top: 12,
        right: 12,
        bottom: 8,
        left: 12,
      },
      series: [
        {
          type: "donut" as const,
          angleKey: "value",
          calloutLabelKey: "label",
          sectorLabelKey: "value",
          legendItemKey: "label",
          innerRadiusRatio: 0.7,
          stroke: "#fff",
          strokeWidth: 2,
          tooltip: {
            renderer: (params: any) => ({
              title: params.datum.label,
              content: `Value: ${params.datum.value}`,
            }),
          },
        },
      ],
      legend: {
        enabled: true,
        position: "right" as const,
      },
    };
  }
}