import { style } from '@angular/animations';
import { Component, Input, OnInit, ElementRef, ViewEncapsulation, SimpleChanges, OnChanges } from '@angular/core';
import * as d3 from 'd3';
import { IPieConfig, IPieData } from '../../model/interfaces/chart.interfaces';
import ObjectHelper from '../../utility/functions/object.helper';

@Component({
  selector: 'chart11',
  standalone: true,
  imports: [],
  template: ` 
    <svg class="chart11"></svg> 
  `,
  styles: [`
:host {
  display: block;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
}

.chart11 {
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
  text.title {
        font-size: 18px;
        font-weight: bold;
        fill: #444444;;
  }

  .legend-item {
    cursor: pointer;

    &:hover {
      font-weight: bold;
      transition: all 500ms;
    }
  }

}

  `],
  encapsulation: ViewEncapsulation.None
})
export class Chart11Component implements OnInit, OnChanges {

  host: any;
  svg: any;

  // containers
  dataContainer: any;
  legendContainer: any;
  legendGap: number = 20;

  title: any;

  // functions
  pie: any;
  arc: any;
  arcTween: any;

  // scales
  colors: any;

  // state
  hiddenIds = new Set();

  @Input() data!: IPieData;

  @Input() set config(values) {
    this._config = ObjectHelper.UpdateObjectWithPartialValues<IPieConfig>(this._defaultConfig, values);
  }

  get config() {
    return this._config || this._defaultConfig;
  }

  private _config!: IPieConfig;

  private _defaultConfig: IPieConfig = {
    innerRadiusCoef: 0.7,
    hiddenOpacity: 0.3,
    legendItem: {
      symbolSize: 10,
      height: 20,
      fontSize: 12,
      textSeparator: 15
    },
    transition: 800,
    arcs: {
      stroke: '#fff',
      strokeWidth: 2,
      radius: 6,
      padAngle: 0
    },
    margins: {
      left:30,
      top: 40,
      right: 130,
      bottom: 10
    }
  };

  //dimensions
  dimensions!: DOMRect;

  innerWidth!: number;
  innerHeight!: number;
  radius!: number;
  innerRadius!: number;

  get margins() {
    return this.config.margins;
  }

  get ids() {
    return this.data.data.map((d) => d.id);
  }

  get pieData() {
    return this.pie(this.data.data.filter((elem) => !this.hiddenIds.has(elem.id)));
  }

  constructor(element: ElementRef) {
    this.host = d3.select(element.nativeElement);
   }

  ngOnInit(): void {
    this.svg = this.host.select('svg');
    this.setDimensions();
    this.setElements();
    
    if (this.data?.data?.length) { 
     this.updateChart();
    } else {
      console.warn('No data provided for the chart');
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.svg || !this.data?.data?.length) { return ; }
    this.updateChart();
  }

  setDimensions() {
    this.dimensions = this.svg.node().getBoundingClientRect();

    this.innerWidth = this.dimensions.width - this.margins.left - this.margins.right;
    this.innerHeight = this.dimensions.height - this.margins.top - this.margins.bottom;

    this.radius = 0.5 * Math.min(this.innerWidth, this.innerHeight);
    this.innerRadius = this.config.innerRadiusCoef * this.radius;

    this.svg.attr('viewBox', [0, 0, this.dimensions.width, this.dimensions.height]);
  }

  setElements() {
    this.dataContainer = this.svg
      .append('g')
      .attr('class', 'dataContainer')
      .attr('transform', `translate(${this.margins.left +  this.innerWidth/2},
        ${this.margins.top + this.innerHeight/2})`);

    this.legendContainer = this.svg
      .append('g')
      .attr('class', 'legendContainer')
      .attr('transform', `translate(${this.innerWidth -  this.margins.right/2}, 
        ${this.margins.top +  this.innerHeight/2 })`);

    this.title = this.svg
      .append('g')
      .attr('class', 'titleContainer')
      .attr('transform', `translate(${  this.dimensions.width/2},
         ${  this.margins.top/2})`)
      .append('text')
      .attr('class', 'title')
      .style('text-anchor', 'middle');
  }

  setParams() {
    //arc generator
    this.arc = d3.arc()
      .innerRadius(this.innerRadius)
      .outerRadius(this.radius)
      .cornerRadius(this.config.arcs.radius)
      .padAngle(this.config.arcs.padAngle);

    // pie generator
    this.pie = d3.pie()
      .value((d: any) => d.value)
      .sort((a: any, b: any) => d3.ascending(a.id, b.id));

    // color scale
    this.colors = d3.scaleOrdinal(d3.schemeCategory10)
      .domain(this.ids as string[]);

    const chart = this;

    this.arcTween = function(d:any) {
      const current = d;
      const previous = (this as any)._previous;
      const interpolate = d3.interpolate(previous, current);
      (this as any)._previous = current;
      return function(t: number) {
        return chart.arc(interpolate(t));
      }
    }
  }

  setLabels() {
    this.title.text(  this.data.title );
  }

  setLegend() {
    const data = this.data.data;

    // add legend item containers
    this.legendContainer.selectAll('g.legend-item')
      .data(data)
      .join('g')
        .attr('class', 'legend-item')
        .attr('transform', (d:any, i: any) => `translate(0, ${i * this.config.legendItem.height})`)
        .style('opacity', (d:any) => this.hiddenIds.has(d.id) ? this.config.hiddenOpacity : null)
        .on('mouseenter', (_event:any, d:any) => this.setHighlights(d.id))
        .on('mouseleave', () => this.resetHighlights())
        .on('click', (_event:any, d:any) => this.toggleHighlight(d.id));

    // add symbols
    this.legendContainer.selectAll('g.legend-item')
      .selectAll('rect')
      .data((d: any) => [d])
      .join('rect')
        .attr('width', this.config.legendItem.symbolSize)
        .attr('height', this.config.legendItem.symbolSize)
        .style('fill', (d: any) => this.colors(d.id));

    // add labels
    this.legendContainer.selectAll('g.legend-item')
      .selectAll('text')
      .data((d: any) => [d])
      .join('text')
      .style('font-size', this.config.legendItem.fontSize + 'px')
      .attr('x', this.config.legendItem.textSeparator)
      .attr('y', this.config.legendItem.symbolSize)
      .text((d: any) => d.label);

    // reposition legend
    const dimensions = this.legendContainer.node().getBBox();

    this.legendContainer
      .attr('transform', `translate(${this.dimensions.width - this.margins.right  + this.legendGap}, 
        ${this.margins.top + 0.5 * this.innerHeight - 0.5 * dimensions.height})`)
  }

  extendPreviousDataWithEnter = (previous: any[], current: any[]) => {

    const previousIds = new Set(previous.map((d) => d.data.id));
    const beforeEndAngle = (id: any) => previous.find((d) => d.data.id === id)?.endAngle || 0;

    // get new elements (the enter selection)
    // elements belonging to current that don't belong to previous
    const newElements = current.filter((elem) => !previousIds.has(elem.data.id))
    .map((elem) => {
      const before = current.find((d) => d.index === elem.index - 1);

      // get end angle of the previous element in the previous data
      const angle = beforeEndAngle(before?.data?.id);

      return {
        ...elem,
        startAngle: angle,
        endAngle: angle
      };
    });

    return [...previous, ...newElements];
  }

  extendCurrentDataWithExit = (previous: any[], current: any[]) => {
    return this.extendPreviousDataWithEnter(current, previous);
  }

  arcTweenFactory = (data:any, enter: boolean) => {
    const chart = this;
    const arcTween = function(elementData: any) {
      const previousElemData = data.find((d: any) => d.data.id === elementData.data.id);

      const [start, end] = enter ? [previousElemData, elementData] : [elementData, previousElemData];

      const interpolate = d3.interpolate(start, end);

      return function(t: number) {
        return chart.arc(interpolate(t));
      }
    }

    return arcTween;
  }

  draw() {
    const chart = this;

    const data = this.pieData;

    const previousData = this.dataContainer
      .selectAll('path.data')
      .data();

    const extendedPreviousData = this.extendPreviousDataWithEnter(previousData, data);
    const extendedCurrentData = this.extendCurrentDataWithExit(previousData, data);

    const enterArcTween = this.arcTweenFactory(extendedPreviousData, true);

    const exitArcTween = this.arcTweenFactory(extendedCurrentData, false);

    this.dataContainer
      .selectAll('path.data')
      .data(data, (d: any) => d.data.id)
      .join(
        (enter: any) => enter.append('path'),
        (update: any) => update,
        (exit: any) => exit.transition()
          .duration(1000)
          .attrTween('d', exitArcTween)
          .remove()
      )
        .attr('class', 'data')
        .style('fill', (d: any) => this.colors(d.data.id))
        .style('stroke', this.config.arcs.stroke)
        .style('stroke-width', this.config.arcs.strokeWidth)
        .on('mouseenter', (even: any, d: any) => this.setHighlights(d.data.id))
        .on('mouseleave', () => this.resetHighlights())
        .transition()
        .duration(1000)
        .attrTween('d', enterArcTween);

  }

//  highlight() {}
  setHighlights(id: any) {
    if (this.hiddenIds.has(id)) { return; }

    this.dataContainer.selectAll('path.data')
    .style('opacity', (d: any) => d.data.id === id ? null : this.config.hiddenOpacity);

    this.legendContainer.selectAll('g.legend-item')
    .style('opacity', (d: any) => d.id === id ? null : this.config.hiddenOpacity);
  }

  resetHighlights() {
    this.dataContainer.selectAll('path.data')
    .style('opacity', null);

    this.legendContainer.selectAll('g.legend-item')
    .style('opacity', (d: any) => !this.hiddenIds.has(d.id) ? null : this.config.hiddenOpacity);
  }

  toggleHighlight(id: any) {
    this.hiddenIds.has(id) ? this.hiddenIds.delete(id) : this.hiddenIds.add(id);
    this.updateChart();

    // console.log(this.hiddenIds);

  }

  updateChart() {
    this.setParams();
    this.setLabels();
    this.setLegend();
    this.draw();
  }

}

