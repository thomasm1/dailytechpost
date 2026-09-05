import { Injectable } from '@angular/core';
import { IChartMargins } from '../../model/interfaces/chart.interfaces';

@Injectable({
  providedIn: 'root',
})
export class DimensionsService {
   private dimensions: DOMRect = new DOMRect();

  private margins: IChartMargins = {top: 0, right: 0, bottom: 0, left: 0};

  private _defaultMargins = {top: 0, right: 0, bottom: 0, left: 0};

  constructor( ) {    }

  setMargins(margins: Partial<IChartMargins>) {
    this.margins = Object.assign({}, this._defaultMargins, margins);
  }
  setDimensions(dimensions: DOMRect) {
    this.dimensions = dimensions;
  }

  // Dimensions
  get width(): number {
    return this.dimensions.width;
  }

  get height(): number {
    return this.dimensions.height;
  }

  // Inner dimensions
  get innerWidth(): number {
    return this.dimensions.width - this.margins.left - this.margins.right;
  }

  get innerHeight(): number {
    return this.dimensions.height - this.margins.top - this.margins.bottom;
  }

  // middle inner dimensions
  get midWidth(): number {
    return 0.5 * this.width;
  }

  get midHeight(): number {
    return 0.5 * this. height;
  }

  // base points
  get left(): number {
    return 0;
  }

  get right(): number {
    return this.width;
  }

  get top(): number {
    return 0;
  }

  get bottom(): number {
    return this.height;
  }

  // margins
  get marginLeft(): number {
    return this.margins.left;
  }

  get marginTop(): number {
    return this.margins.top;
  }

  get marginRight(): number {
    return this.dimensions.width - this.margins.right;
  }

  get marginBottom(): number {
    return this.dimensions.height - this.margins.bottom;
  }

  // middle margins
  get midMarginLeft(): number {
    return 0.5 * this.margins.left;
  }

  get midMarginRight(): number {
    return this.dimensions.right - 0.5 * this.margins.right;
  }

  get midMarginTop(): number {
    return 0.5 * this.margins.top;
  }

  get midMarginBottom(): number {
    return this.dimensions.height - 0.5 * this.margins.bottom;
  }

  // middle inner points
  get midInnerWidth(): number {
    return this.margins.left + 0.5 * this.innerWidth;
  }

  get midInnerHeight(): number {
    return this.margins.top + 0.5 * this.innerHeight;
  }

}
