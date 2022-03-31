import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DetailsService {
    constructor(private readonly http: HttpClient) { }

    getCountryByCode(code: string) {
        return this.http.get(`https://restcountries.com/v3.1/alpha/${code}`);
    }

    getCountryByListOfCode(code: string[]) {
        return this.http.get(`https://restcountries.com/v3.1/alpha?codes=${code}`);
    }
}