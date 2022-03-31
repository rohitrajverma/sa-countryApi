import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  constructor(private readonly http: HttpClient) { }

  getCountries() {
    return this.http.get('https://restcountries.com/v3.1/all');
  }

  filterByRegion(region: string) {
    return this.http.get(`https://restcountries.com/v3.1/region/${region}`);
  }

}
