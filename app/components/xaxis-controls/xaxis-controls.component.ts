import {Component, Output, EventEmitter, Input} from '@angular/core';

//Components
import {SilverNeedleChart} from '../chart/chart.component';

@Component({
  templateUrl: 'build/components/xaxis-controls/xaxis-controls.html',
  selector: 'xaxis-controls',
})
export class XAxisComponent {
    @Input() chart: SilverNeedleChart;
    private timePerDiv: string;
    private base: string;
    
    constructor() {
        this.timePerDiv = '3';
        this.base = '12';
    }

    timeChanged() {
        this.chart.base = parseFloat(this.chart.base.toString());
        this.chart.setTimeSettings({
            timePerDiv: this.chart.timeDivision,
            base: this.chart.base
        });
    }

    autoscaleX() {
        this.chart.autoscaleAxis('x', 0);
    }
}