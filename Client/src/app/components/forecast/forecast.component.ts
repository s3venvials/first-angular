import { Component, Input, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { Forecast } from './Forecast';
import { ForecastService } from 'src/app/services/forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})

export class ForecastComponent implements OnInit {
  @Input() forecasts: Forecast[] = [];

  constructor(private forecastService: ForecastService) { }

  ngOnInit(): void {
    this.forecastService.getWeather().subscribe((forecasts) => { 
      this.forecasts = forecasts;
      this.forecasts.map((item) => item.date = formatDate(item.date.toString(), 'MM/dd/YYYY', 'en-us'))
    });
  }
}
