import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Forecast } from '../components/forecast/Forecast';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  private apiURL = 'https://localhost:5001/weatherforecast';

  constructor(private http: HttpClient) { }

  getWeather(): Observable<Forecast[]> {
    return this.http.get<Forecast[]>(this.apiURL);
  }
}
