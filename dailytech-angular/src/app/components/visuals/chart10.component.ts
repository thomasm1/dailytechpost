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
import { ChartDimensions } from "../../utility/functions/chart.dimensions.helper";
import { ObjectHelper } from "../../utility/functions/object.helper";
import * as d3 from "d3";
import {  IGroupStackConfig, IGroupStackData, IGroupStackDataElem, IGroupStackRectData, ITooltipData } from "../../model/interfaces/chart.interfaces";
import { BoundElementProperty } from "@angular/compiler";

@Component({
  selector: "chart10",
  standalone: true,
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="chart-cell">
     <svg class="chart10">
      <g class="tooltipContainer">
        <rect class="svg-tooltip__background"></rect>
        <g class="svg-tooltip">
          <text class="svg-tooltip__title"></text>
          <rect class="svg-tooltip__symbol"></rect>
          <text class="svg-tooltip__value"
            [attr.y]="config.tooltip.labels.height + config.fontSize"
            [attr.x]="config.tooltip.symbol.width + config.tooltip.labels.textSeparator"
          >
            <tspan class="svg-tooltip__value--key"></tspan>
            <tspan class="svg-tooltip__value--value"></tspan>
          </text>
        </g>
     </g>
    <style>
      .chart10 { font-size: {{config.fontSize}}px; }
      .chart10 text.title { font-weight: bold;}
      .chart10 rect { fill: unset; }
      .chart10 .svg-tooltip__value--value {
        font-size: {{config.tooltip.labels.fontSize}}px;
        font-weight: bold; 
      }
      .chart10 .svg-tooltip__background {
        fill: {{config.tooltip.background.color}};
        fill-opacity: {{config.tooltip.background.opacity}};
        stroke: {{config.tooltip.background.stroke}};
        stroke-width: {{config.tooltip.background.strokeWidth}}px;
        rx: {{config.tooltip.background.rx}}px;
        ry: {{config.tooltip.background.ry}}px;
      }
      .chart10 rect.faded, .chart10 g.legend-item.faded {
        opacity: 0.3;
      }
      .chart10 rect.data {
        transition: opacity {{config.transitions.normal}};
      }
    </style>
  </svg>
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
/*
      .chart-tooltip {
        position: absolute;
        pointer-events: none;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 5px;
        border-radius: 3px;
        font-size: 12px;
        display: none; 
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
      }  */
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
export class Chart10Component implements OnChanges, AfterViewInit, OnDestroy {


  host: any;
  svg: any;

  dimensions!: ChartDimensions;

  // axis
  xAxis: any;
  yAxis: any;

  // containers
  xAxisContainer: any;
  yAxisContainer: any;
  dataContainer: any;
  legendContainer: any;
  tooltipContainer: any;

  // labels
  title: any;
  yLabel: any;

  // scales
  scales: any = {};

  private _defaultData: IGroupStackData = {
    title: '',
    yLabel: '',
    unit: '',
    data: [],
    stackOrder: []
  };

  private _data: IGroupStackData = this._defaultData;

  @Input() set data(values) {
    this._data = ObjectHelper.UpdateObjectWithPartialValues(this._defaultData, values);
    this.setStackedAndGrouped();
    this.hasData = !!this._data.data?.length;
  };

  get data() {
    if (!this._data) { this._data = this._defaultData; }

    return this._data;
  }

  hasData: boolean = false;

  private _defaultConfig: IGroupStackConfig = {
    hiddenOpacity: 0.3,
    fontSize: 14,
    margins: {
      top: 70,
      right: 20,
      bottom: 60,
      left: 50
    },
    tooltip: {
      background: {
        xPadding: 10,
        yPadding: 10,
        color: '#fff',
        opacity: 0.9,
        stroke: '#000',
        strokeWidth: 2,
        rx: 3,
        ry: 3
      },
      labels: {
        symbolSize: 6,
        fontSize: 13, 
        height: 30,
        textSeparator: 10
      },
      symbol: {
        width: 6,
        height: 6,
      },
      offset: {
        x: 20,
        y: 20
      }
    },
    transitions: {
      normal: 300,
      slow: 600
    }
  }

  @Input() set config(values: Partial<IGroupStackConfig>) {
    this._config = ObjectHelper.UpdateObjectWithPartialValues(this._defaultConfig, values);
  }

  get config() {
    if (!this._config) {
      this.config = this._defaultConfig;
    }

    return this._config;
  }

  private _config: IGroupStackConfig = this._defaultConfig;

  stackedData: any;

  stacked: boolean = false;

  grouped: boolean = false;

  stackIds: Set<string> = new Set();
  groupIds: Set<string> = new Set();

  hiddenIds: Set<string> = new Set();

  private _filteredData: IGroupStackDataElem[] = [];

get filteredData() {
  return this._filteredData.length ? this._filteredData : this.data.data;
}

  set filteredData(values: IGroupStackDataElem[]) {
    this._filteredData = values;
  }

  constructor(element: ElementRef) {
    this.host = d3.select(element.nativeElement);
    console.log(this);

   }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
      if (!this.svg) { return; }

      this.updateChart();
  }

  ngAfterViewInit(): void {
    this.svg = this.host.select('svg').attr('xmlns', 'http://www.w3.org/2000/svg');
    this.setDimensions();
    this.setElements();
    this.updateChart();
  }

  ngOnDestroy(): void {
    // Lifecycle hook implementation
  }

  setDimensions(): void {
    this.dimensions = new ChartDimensions(this.svg.node().getBoundingClientRect(), this.config.margins || {});
    this.svg.attr('viewBox', [0, 0, this.dimensions.width, this.dimensions.height]);
  }

  setElements(): void {

    this.svg
      .on('mousemove', this.moveTooltip);

    this.xAxisContainer = this.svg.append('g').attr('class', 'xAxisContainer')
      .attr('transform', `translate(${this.dimensions.marginLeft}, ${this.dimensions.marginBottom + 1})`);

    this.yAxisContainer = this.svg.append('g').attr('class', 'yAxisContainer')
      .attr('transform', `translate(${this.dimensions.marginLeft - 2}, ${this.dimensions.marginTop})`);

    this.dataContainer = this.svg.append('g').attr('class', 'dataContainer')
      .attr('transform', `translate(${this.dimensions.marginLeft}, ${this.dimensions.marginTop})`)
      .on('mouseleave', this.hideTooltip);

    this.legendContainer = this.svg.append('g').attr('class', 'legendContainer')
      .attr('transform', `translate(${this.dimensions.marginLeft}, ${this.dimensions.marginBottom + 30})`);

    this.title = this.svg.append('g').attr('class', 'titleContainer')
      .attr('transform', `translate(${this.dimensions.midWidth}, ${this.dimensions.midMarginTop})`)
      .append('text').attr('class', 'title')
      .style('text-anchor', 'middle');

    this.yLabel = this.svg.append('g').attr('class', 'yLabelContainer')
    .attr('transform', `translate(${this.dimensions.marginLeft - 30}, ${this.dimensions.midHeight})`)
    .append('text').attr('class', 'yLabel')
    .style('text-anchor', 'middle')
    .attr('transform', 'rotate(-90)');

    // tooltip
    this.tooltipContainer = this.svg.select('g.tooltipContainer')
      .raise();
  }

  setParams(): void {
    // xScale
    this.setXScale();
    // yscale
    this.setYScale();
    //groupscale
    this.setGroupScale();
    //colorscale
    this.setColorScale();
  }

  setXScale(): void {
    const data = this.data.data;
    // group ids
    const domain = Array.from(new Set(data.map((d) => d.domain))).sort(d3.ascending);

    const range = [0, this.dimensions.innerWidth];
    this.scales.x = d3.scaleBand().domain(domain).range(range).paddingInner(0.2);
  }

  setYScale(): void {
    const data = this.filteredData;

    const minVal = Math.min(0, d3.min(data, d => d.value) ?? 0);
    const maxVal = d3.max(d3.flatRollup(data, v => d3.sum(v, d => d.value), d => d.domain, d => d.group), d => d[2]) ?? 0;

    const domain = [minVal, maxVal];
    const range = [this.dimensions.innerHeight, 0];

    this.scales.y = d3.scaleLinear().domain(domain).range(range);
  }

  setGroupScale(): void {
    const data = this.filteredData;

    const domain = Array.from(new Set(data.map((d) => d.group))).sort(d3.ascending);
    const range = [0, this.scales.x.bandwidth()];

    this.scales.group = d3.scaleBand().domain(domain).range(range).paddingInner(0.15);
  }

  setColorScale(): void {
    const data = this.data.data;
    const stacks = new Set(data.map((d) => d.stack));
    const n = this.stacked ? this.stackIds.size : this.groupIds.size;
    const domain = [n + 1, 0];

    this.scales.color = d3.scaleSequential(d3.interpolateSpectral).domain(domain);
  }

  setLabels(): void {
    this.title.text(this.data.title);
    this.yLabel.text(this.data.yLabel);
  }

  setAxis(): void {
    this.setXAxis();
    this.setYAxis();
  }

  setXAxis(): void {
    this.xAxis = d3.axisBottom(this.scales.x)
    .tickSizeOuter(0);

    this.xAxisContainer.call(this.xAxis);
  }

  setYAxis(): void {
    this.yAxis = d3.axisLeft(this.scales.y)
    .ticks(5)
    .tickSizeOuter(0)
    .tickSizeInner(-this.dimensions.innerWidth);

    this.yAxisContainer
    .transition()
    .duration(this.config?.transitions?.slow ?? 0)
    .call(this.yAxis);

    this.yAxisContainer.selectAll('.tick line')
    .style('opacity', 0.3)
    .style('stroke-dasharray', '3 3');
  }

  setLegend(): void {
    if (!this.stacked && !this.grouped) {
      this.legendContainer.html('');
      return;
    }
    const data = this.data.stackOrder;

    const width = 35;
    const height = 12;
    const fontSize = 10;

    const color = (elem: string) => this.scales.color(data.indexOf(elem));

    const generateLegendItem = (selection: any) => {
      selection.append('rect')
      .attr('class', 'legend-icon')
      .attr('width', width)
      .attr('height', height)
      .style('fill', (d: string) => color(d));

      selection.append('text')
        .attr('class', 'legend-label')
        .attr('x', 0.5 * width)
        .attr('y', height + fontSize + 1)
        .style('font-size', fontSize + 'px')
        .style('text-anchor', 'middle')
        .text((d: string) => d);
    }

    const updateLegendItem = (selection: any) => {
      selection.selectAll('rect.legend-icon')
      .style('fill', (d: string) => color(d));

      selection.select('text.legend-label')
      .text((d: string) => d);
    }

    // set item containers
    this.legendContainer.selectAll('g.legend-item')
      .data(data, d => d)
      .join(
        (enter: any) => enter.append('g')
          .call(generateLegendItem),
        (update: any) => update
          .call(updateLegendItem)
      )
      .attr('class', 'legend-item')
      .on('mouseenter', (event: any, stack: any) => {
        this.highlightSeries(stack);
        this.highlightLegendItems(stack);
      })
      .on('mouseleave', () => {
        this.resetHighlights();
        this.resetLegendItems();
      })
      .on('click', (event: any, stack: any) => this.toggleHighlight(stack));

    // reposition elements
    // a. reposition legend items
    let padding = 0;

    this.legendContainer.selectAll('g.legend-item')
    .each(function(this: SVGElement) {
      const g = d3.select(this);
      g.attr('transform', `translate(${padding}, 0)`);

      const node = g.node() as SVGGraphicsElement;
      if (node) {
        padding += node.getBBox().width;
      }
    })
    //b. reposition the legend
    const legendWidth = this.legendContainer.node().getBBox().width;

    const axisHeight = this.xAxisContainer.node().getBBox().height;
    this.legendContainer
    .attr('transform', `translate(${this.dimensions.midWidth - 0.5 * legendWidth}, ${this.dimensions.marginBottom + axisHeight + 10})`)
  }

  draw(): void {
    this.setStackedData();
    this.drawRectangles();
  }

  setStackedData(): void {
    const data = this.filteredData;
    const groupedData = d3.groups(data, d => d.domain + '__' + d.group);

    const keys = this.stacked ? this.data.stackOrder : [null]; //d3.groups(data, d => d.stack).map((d) => d[0]);
    const stack = d3.stack()
      .keys(keys)
      .value((element, key) => (Array.isArray(element[1]) ? element[1].find(d => d.stack === key)?.value : 0) || 0);

    this.stackedData = stack(groupedData as any)
      .reduce((acc: any[], v: any) => acc.concat(v.map((elem: any) => {
        const [domain, group] = elem.data[0].split('__');
        const data = elem.data[1].find((d: any) => d.stack === v.key) || {
          domain,
          group,
          stack: v.key,
          key: domain + '__' + group + '__' + v.key,
          value: 0
        };
        return {
          index: this.stacked ? v.index : this.data.stackOrder.indexOf(group),
          min: elem[0],
          max: elem[1],
          ...data
        };
      })), [])

  }

  drawRectangles(): void {
    const data = this.stackedData;

    this.dataContainer.selectAll('rect.data')
    .data(data, (d: IGroupStackRectData) => d.key)
    .join(
      (enter: any) => enter.append('rect')
        .attr('y', this.scales.y(0))
        .attr('height', 0)
    )
      .attr('class', 'data')
      .attr('x', d => this.scales.x(d.domain) + this.scales.group(d.group))
      .attr('width', this.scales.group.bandwidth())
      .attr('stroke', 'white')
      .style('fill', (d: IGroupStackRectData) => this.scales.color(d.index))
      .on('mouseenter', (event: MouseEvent, data: IGroupStackRectData) => {
        this.tooltip(event, data);
        this.highlightRectangle(data);
      })
      .transition()
      .duration(this.config?.transitions?.slow ?? 0)
      .attr('y', (d: IGroupStackRectData) => this.scales.y(d.max))
      .attr('height', (d: IGroupStackRectData) => Math.abs(this.scales.y(d.min) - this.scales.y(d.max)));
  }

  updateChart(): void {
    this.setParams();
    this.setLabels();
    this.setAxis();
    this.setLegend();
    this.draw();
  }

  // tooltip
  tooltip = (event: MouseEvent, data: IGroupStackRectData): void => {

    this.showTooltip();

    const value = Math.round(10 * data.value) / 10 + ' ' + this.data.unit;

    const title = (this.grouped && this.stacked) ? data.group + ' ' + data.domain : data.domain;

    const key = this.stacked ? data.stack : (this.grouped ? data.group : '');

    // convert element to tooltip data
    const tooltipData: ITooltipData = {
      title,
      color: this.scales.color(data.index),
      key,
      value
    };

    // title
    this.tooltipContainer.select('text.svg-tooltip__title')
      .attr('y', this.config.fontSize + 'px')
      .text(tooltipData.title);

    // set value

    this.tooltipContainer.select('tspan.svg-tooltip__value--key')
      .text(tooltipData.key ? `${tooltipData.key}: ` : '');

    this.tooltipContainer.select('tspan.svg-tooltip__value--value')
      .text(tooltipData.value);

    // symbol
      this.tooltipContainer.select('rect.svg-tooltip__symbol')
        .attr('y', (this.config?.tooltip?.labels?.height ?? 0) + this.config?.fontSize - (this.config?.tooltip?.symbol?.height ?? 0))
        .attr('width', this.config?.tooltip?.symbol?.width ?? 0)
        .attr('height', this.config?.tooltip?.symbol?.height ?? 0)
        .style('fill', tooltipData.color);
    // set background
    const tooltipNode = this.tooltipContainer.select('g.svg-tooltip').node();
    if (tooltipNode) {
      const tooltipDimensions = tooltipNode.getBoundingClientRect();
      if (tooltipDimensions) {
        this.tooltipContainer.select('rect.svg-tooltip__background')
          .attr('width', tooltipDimensions.width + 2 * (this.config?.tooltip?.background?.xPadding ?? 0))
          .attr('height', tooltipDimensions.height + 2 *  (this.config?.tooltip?.background?.yPadding ?? 0))
          .attr('x', - ( this.config?.tooltip?.background?.xPadding ?? 0))
          .attr('y', -( this.config?.tooltip?.background?.yPadding ?? 0));
      }
    }

    // resize

    // set position
    this.moveTooltip(event);

  }

  moveTooltip = (event: MouseEvent) => {
    const position = d3.pointer(event, this.svg.node());

    const dims = this.tooltipContainer.node()?.getBoundingClientRect();

    if (!dims) {
      return;
    }

    let xPosition: number;
    let yPosition: number;

    if (position[0] > this.dimensions.midWidth) {
      xPosition = position[0] - dims.width;
    } else {
      xPosition = position[0] + this.config.tooltip.offset.x;
    }

    yPosition = position[1] + this.config.tooltip.offset.y - 0.5 * dims.height;

    if (yPosition + dims.height > this.dimensions.height) {
      yPosition = this.dimensions.height - dims.height;
    }

    if (yPosition < this.config.tooltip.offset.y) {
      yPosition = this.config.tooltip.offset.y;
    }

    this.tooltipContainer
    .attr('transform', `translate(${xPosition}, ${yPosition})`);
  }

  showTooltip = () => {
    this.tooltipContainer.style('visibility', null);
  }

  hideTooltip = () => {
    this.tooltipContainer.style('visibility', 'hidden');
    this.resetHighlights();
  }

  // highlight
  highlightRectangle = (data: IGroupStackRectData): void => {
    this.dataContainer.selectAll('rect.data')
      .classed('faded', (d: IGroupStackRectData) => d.key !== data.key);
  }

  highlightSeries = (stack: string): void => {
    const attr = this.stacked ? 'stack' : 'group';
    if (this.hiddenIds.has(stack)) { return; }

    this.dataContainer.selectAll('rect.data')
      .classed('faded', (d: IGroupStackRectData) => d[attr] !== stack);
  }

  highlightLegendItems = (stack: string): void => {
    if (this.hiddenIds.has(stack)) { return; }

    this.legendContainer.selectAll('g.legend-item')
    .classed('faded', (d: string) => this.hiddenIds.has(d) || d !== stack);
  }

  resetHighlights = () => {
    this.dataContainer.selectAll('rect.data')
      .classed('faded', false);
  }

  resetLegendItems = () => {
    this.legendContainer.selectAll('g.legend-item')
    .classed('faded', (d) => this.hiddenIds.has(d));
  }

  toggleHighlight = (stack: string): void => {
    // toggle hiddenId
    if (this.hiddenIds.has(stack)) {
      this.hiddenIds.delete(stack);
    } else {
      this.hiddenIds.add(stack);
    }

    // update filtered data
    this.filteredData = this.data.data.filter((elem: IGroupStackDataElem) => !this.hiddenIds.has(elem.stack));

    // redraw the chart
    this.updateChart();
  }

  setStackedAndGrouped = (): void => {
    this.stackIds = new Set(this.data.data.map((d) => d.stack));
    this.groupIds = new Set(this.data.data.map((d) => d.group));

    this.stacked = this.stackIds.size > 1;
    this.grouped = this.groupIds.size > 1;
  }

  data1 = [
    {
      year: 2002,
      apples: 3840,
      bananas: 1920,
      cherries: 960,
      dates: 400,
    },
    {
      year: 2003,
      apples: 1600,
      bananas: 1440,
      cherries: 960,
      dates: 400,
    },
    {
      year: 2004,
      apples: 640,
      bananas: 960,
      cherries: 640,
      dates: 400,
    },
    {
      year: 2005,
      apples: 320,
      bananas: 480,
      cherries: 640,
      dates: 400,
    },
  ];

  data2 = [
    {
      year: 2002,
      fruit: 'apples',
      value: 3840,
    },
    {
      year: 2003,
      fruit: 'apples',
      value: 1600,
    },
    {
      year: 2004,
      fruit: 'apples',
      value: 640,
    },
    {
      year: 2005,
      fruit: 'apples',
      value: 320,
    },
    {
      year: 2002,
      fruit: 'bananas',
      value: 1920,
    },
    {
      year: 2003,
      fruit: 'bananas',
      value: 1440,
    },
    {
      year: 2004,
      fruit: 'bananas',
      value: 960,
    },
    {
      year: 2005,
      fruit: 'bananas',
      value: 480,
    },
    {
      year: 2002,
      fruit: 'cherries',
      value: 960,
    },
    {
      year: 2003,
      fruit: 'cherries',
      value: 960,
    },
    {
      year: 2004,
      fruit: 'cherries',
      value: 640,
    },
    {
      year: 2005,
      fruit: 'cherries',
      value: 640,
    },
    {
      year: 2002,
      fruit: 'dates',
      value: 400,
    },
    {
      year: 2003,
      fruit: 'dates',
      value: 400,
    },
    {
      year: 2004,
      fruit: 'dates',
      value: 400,
    },
    {
      year: 2005,
      fruit: 'dates',
      value: 400,
    },
  ];
}
