
import * as d3 from 'd3';
import { IChartMargins, IGroupStackDataElem } from '../../model/interfaces/chart.interfaces';

export class StackHelper {
  static SetStacks<T>(data: T[], domainAttr: string, groupAttr: string, stackAttr: string, valueAttr: string, valueFormatter = (value: any) => value): IGroupStackDataElem[] {

    const calcKey = (elem: any[]): string => {
      const removeUndefined = (d) => d === undefined ? '' : '__' + d;
      return elem[0] + removeUndefined(elem[1]) + removeUndefined(elem[2]);
    }

    return d3.flatRollup(data, v => d3.sum(v, d => d[valueAttr as keyof T] as number) , d => d[domainAttr as keyof T], d => d[groupAttr as keyof T], d => d[stackAttr as keyof T])
    .map((elem) => ({
      key: calcKey(elem),
      domain: String(elem[0]),
      group: elem[1] ? String(elem[1]) : '',
      stack: elem[2] ? String(elem[2]) : '',
      value: valueFormatter(elem[3])
    }));

  }
}
