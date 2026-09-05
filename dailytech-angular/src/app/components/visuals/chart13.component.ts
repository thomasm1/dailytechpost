import { NgIf } from "@angular/common";
import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { AgCharts } from "ag-charts-angular";
import * as d3 from "d3";
import {
  IGroupStackData,
  IGroupStackDataElem,
} from "../../model/interfaces/chart.interfaces";

@Component({
  selector: "chart13",
  standalone: true,
  imports: [NgIf, AgCharts],
  template: `
    <div class="chart-13">
      <ag-charts [options]="chart13Options"></ag-charts>
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

      .chart-13 {
        position: relative;
        width: 100%;
        height: 100%;
        min-width: 0;
        min-height: 0;
        background: #f0f0f09d;
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
export class Chart13Component implements OnChanges {

  @Input() title = "#13: AG Charts: Grouped Stacked Bar Chart";
  @Input() data!: IGroupStackData;

  hasData = false;

  chart13Options: any = this.createChartOptions([], []);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["data"]) {
      this.updateChart();
    }
  }

  private updateChart(): void {
    const chartData = this.toChartData(this.data);
    const series = this.toSeries(this.data);

    this.hasData = chartData.length > 0 && series.length > 0;
    this.chart13Options = this.createChartOptions(chartData, series);
  }

  private toChartData(data: IGroupStackData | undefined): any[] {
    const rows = data?.data ?? [];
    const domains = Array.from(new Set(rows.map((row) => row.domain))).sort(
      d3.ascending,
    );

    return domains.map((domain) => {
      const output: Record<string, string | number> = { domain };

      rows
        .filter((row) => row.domain === domain)
        .forEach((row) => {
          output[this.valueKey(row)] = Number(row.value) || 0;
        });

      return output;
    });
  }

  private toSeries(data: IGroupStackData | undefined): any[] {
    const rows = data?.data ?? [];
    const stackOrder = data?.stackOrder ?? [];

    if (!rows.length) {
      return [];
    }

    const groups = Array.from(new Set(rows.map((row) => row.group))).sort(
      d3.ascending,
    );
    const stacks = stackOrder.length
      ? stackOrder.filter((stack) => rows.some((row) => row.stack === stack))
      : Array.from(new Set(rows.map((row) => row.stack))).sort(d3.ascending);

    const grouped = groups.length > 1;
    const stacked = stacks.length > 1;

    const series: any[] = [];

    groups.forEach((group) => {
      const groupRows = rows.filter((row) => row.group === group);
      const groupStacks = stacked
        ? stacks.filter((stack) => groupRows.some((row) => row.stack === stack))
        : [groupRows[0]?.stack ?? ""];

      groupStacks.forEach((stack, index) => {
        const key = this.valueKey({ group, stack });
        const labelParts = [group, stacked ? stack : ""].filter(Boolean);
        const yName = labelParts.length ? labelParts.join(" - ") : "Value";
        const colorIndex = stacked ? stacks.indexOf(stack) : groups.indexOf(group);

        series.push({
          type: "bar" as const,
          xKey: "domain",
          yKey: key,
          yName,
          grouped,
          stacked,
          stackGroup: grouped ? group || `group-${index}` : undefined,
          fill: d3.interpolateSpectral((colorIndex + 1) / (Math.max(stacked ? stacks.length : groups.length, 1) + 1)),
          stroke: "white",
          strokeWidth: 1,
          tooltip: {
            renderer: (params: any) => ({
              title: grouped && stacked ? `${group} ${params.datum.domain}` : params.datum.domain,
              content: `${stacked ? stack : group}: ${Math.round(10 * params.datum[key]) / 10} ${data?.unit ?? ""}`,
            }),
          },
        });
      });
    });

    return series;
  }

  private valueKey(row: Pick<IGroupStackDataElem, "group" | "stack">): string {
    return `value__${this.safeKey(row.group)}__${this.safeKey(row.stack)}`;
  }

  private safeKey(value: string): string {
    return value || "none";
  }

  private createChartOptions(data: any[], series: any[]): any {
    return {
      data,
      title: {
        text: data.length ? this.title : "#13: AG Charts: Grouped Stacked Bar Chart",
      },
      background: {
        fill: "#f0f0f09d",
      },
      padding: {
        top: 10,
        right: 20,
        bottom: 60,
        left: 50,
      },
      series,
      axes: [
        {
          type: "category" as const,
          position: "bottom" as const,
        },
        {
          type: "number" as const,
          position: "left" as const,
          title: {
            text: this.data?.yLabel,
          },
          gridLine: {
            style: [
              {
                stroke: "rgba(0, 0, 0, 0.3)",
                lineDash: [3, 3],
              },
            ],
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
