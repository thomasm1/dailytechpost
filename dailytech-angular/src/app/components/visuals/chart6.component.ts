import { NgIf } from "@angular/common";
import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { AgCharts } from "ag-charts-angular";

interface CovidChartDatum {
  date: Date;
  hospitalized: number | null;
  death: number | null;
  hospitalizedCurrently: number | null;
}

@Component({
  selector: "chart6",
  standalone: true,
  imports: [NgIf, AgCharts],
  template: `
    <div class="chart-cell6">
      <ag-charts [options]="chart6Options"></ag-charts>
      <div class="no-data" *ngIf="!hasData">No data available</div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 100%;
        height: 100%;
        min-width: 0;
        min-height: 0;
      }

      .chart-cell6 {
        position: relative;
        width: 100%;
        height: 100%;
        min-width: 0;
        min-height: 0;
        margin: 0;
        padding: 0;
        border: 1px dotted black;
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
    `,
  ],
})
export class Chart6Component implements OnChanges {
  @Input() data: any[] | null = [];

  hasData = false;
  title = "#6: AG Charts - Path Line Chart";

  private readonly seriesKeys = [
    { key: "hospitalized", name: "Hospitalized" },
    { key: "death", name: "Deaths" },
    { key: "hospitalizedCurrently", name: "Currently Hospitalized" },
  ];

  chart6Options: any = this.createChartOptions([]);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["data"]) {
      this.updateChart();
    }
  }

  private updateChart(): void {
    const chartData = this.toChartData(this.data);
    this.hasData = chartData.length > 0;
    this.chart6Options = this.createChartOptions(chartData);
  }

  private createChartOptions(data: CovidChartDatum[]): any {
    return {
      data,
      title: {
        text: this.title,
      },
      background: {
        fill: "#f0f0f09d",
      },
      padding: {
        top: 12,
        right: 16,
        bottom: 8,
        left: 8,
      },
      series: this.seriesKeys.map((series) => ({
        type: "line",
        xKey: "date",
        yKey: series.key,
        yName: series.name,
        marker: {
          enabled: false,
        },
        interpolation: {
          type: "smooth",
        },
        tooltip: {
          renderer: (params: any) => ({
            title: this.formatDate(params.datum.date),
            content: `${series.name}: ${this.formatValue(params.datum[series.key])}`,
          }),
        },
      })),
      axes: [
        {
          type: "time",
          position: "bottom",
          label: {
            rotation: 45,
            formatter: (params: any) => this.formatDate(params.value),
          },
        },
        {
          type: "number",
          position: "left",
          label: {
            formatter: (params: any) => this.formatValue(params.value),
          },
          gridLine: {
            enabled: true,
            style: [{ stroke: "#ccc", lineDash: [2, 2] }],
          },
        },
      ],
      legend: {
        enabled: true,
        position: "bottom",
      },
    };
  }

  private toChartData(data: any[] | null): CovidChartDatum[] {
    return (Array.isArray(data) ? data : [])
      .map((row) => ({
        date: this.parseCovidDate(row?.date),
        hospitalized: this.toFiniteNumber(row?.hospitalized),
        death: this.toFiniteNumber(row?.death),
        hospitalizedCurrently: this.toFiniteNumber(row?.hospitalizedCurrently),
      }))
      .filter((row) =>
        row.date instanceof Date &&
        !Number.isNaN(row.date.getTime()) &&
        (
          row.hospitalized !== null ||
          row.death !== null ||
          row.hospitalizedCurrently !== null
        )
      )
      .sort((a, b) => a.date.getTime() - b.date.getTime());
  }

  private parseCovidDate(value: unknown): Date {
    const raw = String(value ?? "");
    if (!/^\d{8}$/.test(raw)) {
      return new Date(NaN);
    }

    const year = Number(raw.slice(0, 4));
    const monthIndex = Number(raw.slice(4, 6)) - 1;
    const day = Number(raw.slice(6, 8));
    return new Date(year, monthIndex, day);
  }

  private toFiniteNumber(value: unknown): number | null {
    const numeric = Number(value);
    return Number.isFinite(numeric) ? numeric : null;
  }

  private formatDate(value: Date | number): string {
    const date = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(date.getTime())) {
      return "";
    }

    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  }

  private formatValue(value: unknown): string {
    const numeric = Number(value);
    return Number.isFinite(numeric) ? numeric.toLocaleString() : "n/a";
  }
}
