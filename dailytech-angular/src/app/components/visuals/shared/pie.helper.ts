// import { IPieData } from "../../model/interfaces/chart.pie.interfaces";

  interface IChartMargins {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

  interface IPieDataElements {
  id: string | number;
  label: string;
  value: number;
}

  interface IPieData {
  title: string;
  data: IPieDataElements[];
}

  interface IPieConfig {
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


export class PieHelper {
  static convert(data: any, title: string, valueAttr: string, idAttr: string, labelAttr: string): IPieData {

    const pieData = (data || []).map((elem: any) => ({
      id: elem[idAttr],
      label: elem[labelAttr],
      value: elem[valueAttr]
    }));

    return {
      title,
      data: pieData
    }
  }
}
