import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';

export function highchartsFactory() {
  return require('highcharts/highstock');
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
    ChartModule
  ],
  providers: [
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
