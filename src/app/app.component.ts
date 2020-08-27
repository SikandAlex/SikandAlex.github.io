import { Component } from '@angular/core';
import { CovidDataService } from './covid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // data goes here
  public positives = [];
  public negatives = [];
  public invalids = [];
  public totals = [];

  public multi = [];

  public cardData = [];



  constructor(private _covid: CovidDataService) {}

  ngOnInit() {


    this._covid.getTotal()
      .subscribe(res => {
        this.totals = res["data"];
      });
    this._covid.getPositive()
      .subscribe(res => {
        this.positives = res["data"]
      });
    this._covid.getInvalid()
      .subscribe(res => {
        this.invalids = res["data"]
      });
    this._covid.getNegative()
      .subscribe(res => {
        this.negatives = res["data"]
      });
    this._covid.getMulti()
      .subscribe(res => {
        this.multi = res["data"]
      });
    this._covid.getInfectionStatus()
      .subscribe(res => {
        this.cardData = res["data"]
      });

  }



  title = 'BU-COVID19-DASH';

  view: any[] = [600, 400];

  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = '';
  showYAxisLabel = true;
  yAxisLabel = '';
  timeline = true;

  colorScheme = {
    domain: ['#CC0000']
  };

  colorScheme2 = {
    domain: ["#6610F2", "#CC0000", "#E6C229", "#4CB5AE"]
  }

  colorScheme3 = {
    domain: ["#CC0000", "#E6C229", "#4CB5AE"]
  }

  //pie
  showLabels = true;






}
