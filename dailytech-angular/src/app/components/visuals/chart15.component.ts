import { NgFor, NgIf } from "@angular/common";
import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { AgCharts } from "ag-charts-angular";

interface ScatterDatum {
  x: number;
  y: number;
  series: string;
  label: string;
  priceUsd?: number;
}

@Component({
  selector: "chart15",
  standalone: true,
  imports: [NgIf, NgFor, AgCharts],
  template: `
    <div class="chart-15">
      <div class="controller">
        <select [value]="xValue" (change)="setOption('x', $event)">
          <option *ngFor="let item of columns" [value]="item">
            {{ item }}
          </option>
        </select>

        <select [value]="yValue" (change)="setOption('y', $event)">
          <option *ngFor="let item of columns" [value]="item">
            {{ item }}
          </option>
        </select>
      </div>

      <ag-charts [options]="chart15Options"></ag-charts>
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

    .chart-15 {
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
      left: 8px;
      z-index: 2;
      display: flex;
      flex-direction: row;
      gap: 4px;
      width: min(200px, 62%);
    }

    select {
      width: 100%;
      padding: 2px 4px;
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
export class Chart15Component implements OnChanges {
  @Input() data: any[] = [];
  @Input() title = "#15: AG Charts: Scatterplot Chart";

  hasData = false;

  xValue = "Petal_Length";
  yValue = "Petal_Width";

  chart15Options: any = this.createChartOptions([]); 

  get columns(): string[] {
    const dataColumns = (this.data as any)?.columns;

    if (Array.isArray(dataColumns) && dataColumns.length) {
      return dataColumns.filter((column) => column !== "Species");
    }

    const firstRow = Array.isArray(this.data) ? this.data[0] : null;
    return firstRow
      ? Object.keys(firstRow).filter((column) => {
          const value = firstRow[column];
          return column !== "Species" && Number.isFinite(Number(value));
        })
      : [];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["data"]) {
      this.updateChart();
    }
  }

  setOption(option: "x" | "y", event: Event): void {
    const value = (event.target as HTMLSelectElement).value;

    if (option === "x") {
      this.xValue = value;
    } else {
      this.yValue = value;
    }

    this.updateChart();
  }

  private updateChart(): void {
    this.setDefaultFieldsForData();
    const chartData = this.toScatterData(this.data);
    this.hasData = chartData.length > 0;
    this.chart15Options = this.createChartOptions(chartData);
  }

/* Crypto Data versus default Iris Data ----- xValue  yValue */
  private setDefaultFieldsForData(): void {
    if (!Array.isArray(this.data) || !this.data.length) {
      return;
    }

    const hasMarketCap = this.hasColumn("market_cap_usd");
    const hasPrice24h = this.hasColumn("price_24h_percent_change");

    if (hasMarketCap && hasPrice24h) {
      this.xValue = this.hasColumn(this.xValue) ? this.xValue : "market_cap_usd";
      this.yValue = this.hasColumn(this.yValue)
        ? this.yValue
        : "price_24h_percent_change";
      return;
    }

    this.xValue = this.hasColumn(this.xValue) ? this.xValue : this.columns[0] || "";
    this.yValue = this.hasColumn(this.yValue)
      ? this.yValue
      : this.columns[1] || this.columns[0] || "";
  }

  private hasColumn(column: string): boolean {
    const firstRow = Array.isArray(this.data) ? this.data[0] : null;
    return !!firstRow && Object.prototype.hasOwnProperty.call(firstRow, column);
  }

  private toScatterData(data: any[]): ScatterDatum[] {
    if (!Array.isArray(data) || !this.xValue || !this.yValue) {
      return [];
    }

    return data
      .map((row) => ({
        x: Number(row?.[this.xValue]),
        y: Number(row?.[this.yValue]),
        series: String(row?.token_symbol ?? row?.Species ?? "Unknown"),
        label: String(row?.token_symbol ?? row?.token_name ?? row?.Species ?? "Unknown"),
        priceUsd: Number(row?.price_usd),
      }))
      .filter((row) => Number.isFinite(row.x) && Number.isFinite(row.y));
  }

  private createChartOptions(data: ScatterDatum[]): any {
    const series = Array.from(new Set(data.map((row) => row.series)));

    return {
      data,
      title: {
        text: this.title,
      },
      background: {
        fill: "#f0f0f09d",
      },
      padding: {
        top: 42,
        right: 16,
        bottom: 8,
        left: 8,
      },
      series: series.map((name) => ({
        type: "scatter" as const,
        data: data.filter((row) => row.series === name),
        xKey: "x",
        yKey: "y",
        title: name,
        marker: {
          size: 7,
        },
        tooltip: {
          renderer: (params: any) => ({
            title: params.datum.label,
            content: `${this.xValue}: ${params.datum.x}<br>${this.yValue}: ${params.datum.y}${Number.isFinite(params.datum.priceUsd) ? `<br>price_usd: ${params.datum.priceUsd}` : ""}`,
          }),
        },
      })),
      axes: [
        {
          type: "number" as const,
          position: "bottom" as const,
          title: {
            text: this.xValue,
          },
        },
        {
          type: "number" as const,
          position: "left" as const,
          title: {
            text: this.yValue,
          },
          gridLine: {
            enabled: true,
            style: [{ stroke: "#ddd", lineDash: [2, 2] }],
          },
        },
      ],
      legend: {
        enabled: true,
        position: "bottom" as const,
      },
    };
  }
}
