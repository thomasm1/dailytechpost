

export enum MapTooltipActionsTypes {
    showTooltip = 'Show map tooltip',
    hideTooltip = 'Hide map tooltip'
}

export interface ChartActions {
    readonly type: string;
} 

export class ShowMapTooltip implements ChartActions {
    readonly type = MapTooltipActionsTypes.showTooltip;

    constructor(public payload: { id: string, x: number, y: number }) {}
}

export class HideMapTooltip implements ChartActions {
    readonly type = MapTooltipActionsTypes.hideTooltip;
}

export type MapTooltipActions = ShowMapTooltip | HideMapTooltip;