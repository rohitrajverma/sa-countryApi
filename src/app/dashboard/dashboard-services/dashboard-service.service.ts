import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICountries } from './dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  constructor(private readonly http: HttpClient) { }

  getCountries():Observable<any> {
    return this.http.get('https://restcountries.com/v3.1/all');
  }

  filterByRegion(region: string):Observable<any> {
    return this.http.get(`https://restcountries.com/v3.1/region/${region}`);
  }

}
