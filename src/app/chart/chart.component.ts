import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent {
  constructor(http: Http) {
    http.get('http://www9383u.sakura.ne.jp/csvToHighchartsOHLC?fileName=EURJPY1440.csv').subscribe(res => {
      this.options = {
        chart: {
          type: 'candlestick',
          width: 1000,
          height: '50%'
        },
        title: {
          text: 'AAPL Stock Price'
        },
        series: [{
          name: 'AAPL',
          data: res.json(),
          tooltip: {
            valueDecimals: 2
          }
        }]
      };
    });
  }
  options: Object;
}
