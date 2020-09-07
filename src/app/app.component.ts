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

  public timeData = [];

  public positiveCumulative = [];



  constructor(private _covid: CovidDataService) {}

  ngOnInit() {


    this._covid.getTotal()
      .subscribe(res => {
        this.totals = res["data"];
      });
    this._covid.getPositive()
      .subscribe(res => {
        this.positives = res["data"].slice(Math.max(res["data"].length - 8, 0))
      });
    this._covid.getNegative()
      .subscribe(res => {
        this.negatives = res["data"].slice(Math.max(res["data"].length - 8, 0))
      });
    this._covid.getMulti()
      .subscribe(res => {
        this.multi = res["data"]
        this.multi[0]["series"] = this.multi[0]["series"].slice(Math.max(this.multi[0]["series"].length - 8, 0))
        this.multi[1]["series"] = this.multi[1]["series"].slice(Math.max(this.multi[1]["series"].length - 8, 0))
        this.multi[2]["series"] = this.multi[2]["series"].slice(Math.max(this.multi[2]["series"].length - 8, 0))
      });
    this._covid.getInfectionStatus()
      .subscribe(res => {
        this.cardData = res["data"]
      });
    this._covid.getTime()
      .subscribe(res => {
        this.timeData = [ {name: "Processing Time", series: res["data"]} ]
      });
    this._covid.getPositiveCumulative()
      .subscribe(res => {
        this.positiveCumulative = [ {name: "Positive Cases", series: res["data"]} ]
      });

  }



  title = 'BU-COVID19-DASH';

  view: any[] = [600, 400];

  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = '';
  showYAxisLabel = true;
  yAxisLabel = '';
  timeline = true;

  colorScheme = {
    domain: ['#CC0000']
  };

  colorScheme2 = {
    domain: ["#6610F2", "#CC0000", "#4CB5AE"]
  }

  colorScheme3 = {
    domain: ["#CC0000", "#4CB5AE"]
  }

  //pie
  showLabels = true;






}
