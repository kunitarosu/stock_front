import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent {
  constructor(http: Http) {
    http.get('http://localhost:8081/1/1/chart/eurjpy/hour4/heikinGoogleOHLC?from=2017.03.01%2000:00:00&to=2017.03.31%2023:59:59').subscribe(res => {
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
