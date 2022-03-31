import { Pipe, PipeTransform } from '@angular/core';
import { ICountries } from '../dashboard/dashboard-services/dashboard.model';

@Pipe({
  name: 'search',
  pure: true
})
export class SearchPipe implements PipeTransform {
  transform(countryInfo: ICountries[], query: string): ICountries[] {
    if (!query || !countryInfo) {
      return countryInfo;
    }    
    return countryInfo.filter(country => country.name.common.toLowerCase().indexOf(query.toLowerCase()) > -1);
  }
}
