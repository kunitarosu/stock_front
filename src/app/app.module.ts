import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'highcharts';
//import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';

export function highchartsFactory() {
      const hc = require('highcharts');
      const dd = require('highcharts/modules/drilldown');
      dd(hc);

      return hc;
}

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ChartModule.forRoot(require('highcharts/highstock'))
  ],
  //providers: [{
  //  provide: HighchartsStatic,
  //  useFactory: highchartsFactory
  //}],
  bootstrap: [AppComponent]
})
export class AppModule { }
