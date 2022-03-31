import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: true
})
export class SearchPipe implements PipeTransform {
  transform(countryInfo: any[], query: string): string[] {
    if (!query || !countryInfo) {
      return countryInfo;
    }    
    return countryInfo.filter(country => country.name.common.toLowerCase().indexOf(query.toLowerCase()) > -1);
  }
}
