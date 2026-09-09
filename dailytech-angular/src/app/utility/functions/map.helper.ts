import * as d3 from 'd3';
import { ITooltipState, ITimelineData, IMapDataElement, IMapData, IPlaySlider } from '../../model/interfaces/chart.interfaces';
import { MapTooltipActions, MapTooltipActionsTypes, ShowMapTooltip } from './map-tooltip.actions';

export class MapHelper {
    
    fullDataSet: IMapDataElement[] = [];

    dataByDate = new Map<number, IMapDataElement[]>();
    dataByCountry = new Map<string, IMapDataElement[]>();

    countriesById = new Map<string, string>();
    currentDate:any;

    datesRange: [number, number] = [0, 0];

    data: IMapData = { 
        title: 'Covid-19 new death cases', 
        data: [], 
        thresholds: [] 
    };

    tooltipState: ITooltipState = {
        visible: false,
        x: 0,
        y: 0
    };

    tooltipData: ITimelineData = {
        title: '',
        activeTime: null,
        data: [],
        timeFormat: ''
    };

    sliderState: IPlaySlider = {
        min: 0,
        max: 100,
        step: 1000*60*60*24, //1 day
        speed: 100, // milliseconds between updates (300 is slower0)
    };
    parseDate = (date: string) : number => Date.parse(date);

    timeFormatTemplate = '%Y-%m-%d';

    timeFormat = d3.timeFormat(this.timeFormatTemplate);

    setData(data:any, countryCodes:any[], dataAttr = 'new_deaths_smoothed_per_million') {
        const ids = new Map(countryCodes.map((code:any) => [code.location, code.iso3]));

        this.countriesById = new Map(countryCodes.map((code) => [code.iso3, code.location]));
      
        this.fullDataSet = data.location?.map((location: any,  i: number) => ({
            id: ids.get(location),
            value: data[dataAttr][i],
            date: this.parseDate(data.date[i])
        }));

        this.dataByDate = d3.group(this.fullDataSet, d => d.date);
        this.dataByCountry = d3.group(this.fullDataSet, (d) => d.id);
      
        this.datesRange = d3.extent(this.fullDataSet, d => d.date) as [number, any];
        this.currentDate = this.datesRange[1];
        this.setMapData(this.datesRange[1]) 
        console.log(this);
        this.setSlider();
    }

    setMapData = (date: number) => {
        this.currentDate = date;
        this.data = {
            title: `Covid-19 new death cases (${this.timeFormat(this.currentDate)})`,
            data: this.dataByDate.get(this.currentDate) || [],
            thresholds: [null, 0, 0.1, 0.2, 0.5, 1, 2, 5, 10, 20]
        };
    }

    
    tooltip = (action : MapTooltipActions) => {
        switch(action.type) {
            case MapTooltipActionsTypes.showTooltip:
                this.showTooltip(action);
                break;
            case MapTooltipActionsTypes.hideTooltip:
                this.hideTooltip();
                break;
        }
        
    }

    setTooltipData(id: string) {
        this.tooltipData = {
            title: this.countriesById.get(id),
            data: this.dataByCountry.get(id),
            activeTime: this.currentDate,
            timeFormat: this.timeFormatTemplate
        };
    }

    showTooltip(action: ShowMapTooltip) {
        // set position
        // set visible to true
        this.tooltipState = {
            visible: true,
            x: action.payload.x - 125,
            y: action.payload.y - 170
        };
        // set the data
        this.setTooltipData(action.payload.id);
    }

    hideTooltip() {
        this.tooltipState = {
            visible: false,
            x: 0,
            y: 0
        };
        // set the position
        // set visible to false
    }

    setSlider() {
        this.sliderState = {
            ...this.sliderState,
            min: this.datesRange[0],
            max: this.datesRange[1]
        };
    }
}
