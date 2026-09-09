
export interface IChartMargins {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface IPieDataElements {
  id: string | number;
  label: string;
  value: number;
}

export interface IPieData {
  title: string;
  data: IPieDataElements[];
}

export interface IPieConfig {
  innerRadiusCoef: number;
  hiddenOpacity: number;
  legendItem: {
    symbolSize: number;
    height: number;
    fontSize: number;
    textSeparator: number;
  };
  transition: number;
  arcs: {
    stroke: string;
    strokeWidth: number;
    radius: number;
    padAngle: number;
  };
  margins: IChartMargins;
}

export interface IGroupStackDataElem {
  key?: string;
  domain: string;
  group: string;
  stack: string;
  value: number;
}

export interface IGroupStackData {
  title: string;
  yLabel: string;
  unit: string;
  data: IGroupStackDataElem[];
  stackOrder: string[];
}

export interface IGroupStackConfig {
  hiddenOpacity: number;
  fontSize: number;
  margins: IChartMargins;
  tooltip: ITooltipConfig;
  transitions: {
    normal: number;
    slow: number;
  };
}

export interface IGroupStackRectData extends IGroupStackDataElem{
  min: number;
  max: number;
  key: string;
  index: number;
}

export interface ITooltipData {
  title: string;
  color: string;
  key: string;
  value: number | string;
}

export interface ITooltipConfig {
  background: {
    xPadding: number;
    yPadding: number;
    color: string;
    opacity: number;
    stroke: string;
    strokeWidth: number;
    rx: number;
    ry: number;
  };
  labels: {
    symbolSize: number;
    fontSize: number;
    height: number;
    textSeparator: number;
  };
  symbol: {
    width: number;
    height: number;
  };
  offset: {
    x: number;
    y: number;
  };

}

// MAP

export interface IMapDataElement {
  id: string;
  value: number;
  date: number;
}
export interface IMapData {
  title: string;
  data: IMapDataElement[];
  thresholds: (number | null)[];
}
export interface IMapConfig {
  margins: IChartMargins;
  // tooltip: ITooltipConfig; 
  title: {
    fontWeight: string;
    fontSize: number;
  };
  features: {
    base: {
      stroke: string;
      fill: string;
    };
    data: {
      stroke: string;
    };
    highlighted: {
      stroke: string;
    }
  };
  faded: {
    opacity: number;
  };
  nodata: {
    color: string;
    label: string;
  };
  legend: {
    width: number;
    height: number;
    fontSize: number;
    nodataSeparator: number;
  };
  colors: string[];
}

export interface ITooltipState {
  visible: boolean;
  x: number;
  y: number;
}


export interface ITimelineData {
  title: string;
  activeTime: number | null;
  data: IMapDataElement[];
  timeFormat: string;
}

export interface ITimelineConfig {
  margins: IChartMargins;
  dimensions: {
    width: number;
    height: number;
  };
  background: {
    color: string;
  };
  title: {
    fontSize: number;
    fontWeight: string;
  };
  labels: {
    fontSize: number;
  };
  line: {
    stroke: string;
  };
  area: {
    fill: string;
    opacity: number;
  },
  axis: {
    color: string;
  };
  circle: {
    stroke: string;
    fill: string;
    radius: number;
  };
  values: {
    decimalPlaces: number;
    xPadding: number;
    yPadding: number;
  };
}

export interface IPlaySlider {
  min: number;
  max: number;
  step: number;
  speed: number;
}