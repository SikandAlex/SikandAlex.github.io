import { Component } from '@angular/core';
import { CovidDataService } from './covid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _covid: CovidDataService) {}

  ngOnInit() {
    this._covid.historicalData()
      .subscribe(res => {
        console.log(res)

        var names = []

        for (var x in res) {
          names.push(x)
        }



      })
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

  // data goes here


//public single = [{'name': '8/16/20', 'value': 286}, {'name': '8/17/20', 'value': 1086}, {'name': '8/18/20', 'value': 965}, {'name': '8/19/20', 'value': 1450}, {'name': '8/20/20', 'value': 1414}, {'name': '8/21/20', 'value': 1456}, {'name': '8/22/20', 'value': 1940}]

public single = [{'name': '8/16/20', 'value': 1}, {'name': '8/17/20', 'value': 4}, {'name': '8/18/20', 'value': 4}, {'name': '8/19/20', 'value': 0}, {'name': '8/20/20', 'value': 0}, {'name': '8/21/20', 'value': 3}, {'name': '8/22/20', 'value': 6}, {'name': '8/23/20', 'value': 0}]

public totals = [{'name': '8/16/20', 'value': 286}, {'name': '8/17/20', 'value': 1086}, {'name': '8/18/20', 'value': 965}, {'name': '8/19/20', 'value': 1450}, {'name': '8/20/20', 'value': 1414}, {'name': '8/21/20', 'value': 1456}, {'name': '8/22/20', 'value': 1940}, {'name': '8/23/20', 'value': 1278}]

public invalids = [{'name': '8/16/20', 'value': 0}, {'name': '8/17/20', 'value': 13}, {'name': '8/18/20', 'value': 11}, {'name': '8/19/20', 'value': 7}, {'name': '8/20/20', 'value': 4}, {'name': '8/21/20', 'value': 10}, {'name': '8/22/20', 'value': 9}, {'name': '8/23/20', 'value': 8}]

public negatives = [{'name': '8/16/20', 'value': 285}, {'name': '8/17/20', 'value': 1069}, {'name': '8/18/20', 'value': 950}, {'name': '8/19/20', 'value': 1443}, {'name': '8/20/20', 'value': 1410}, {'name': '8/21/20', 'value': 1443}, {'name': '8/22/20', 'value': 1925}, {'name': '8/23/20', 'value': 1270}]
​
public cardData = [
  {
    "name": "Isolated",
    "value": 19
  },
  {
    "name": "Non-Contagious",
    "value": 1
  },
  {
    "name": "Recovered",
    "value": 5
  }
]

public multi = [
  {
    "name": "Total",
    "series": this.totals
  },
  {
    "name": "Positive",
    "series": this.single
  },
  {
    "name": "Invalid",
    "series": this.invalids
  },
  {
    "name": "Negative",
    "series": this.negatives
  }
]


}
