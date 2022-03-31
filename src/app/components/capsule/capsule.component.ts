import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ICountries } from 'src/app/dashboard/dashboard-services/dashboard.model';
import { DetailsService } from 'src/app/details/details-services/details.service';

@Component({
  selector: 'app-capsule',
  templateUrl: './capsule.component.html',
  styleUrls: ['./capsule.component.scss'],
})
export class CapsuleComponent implements OnChanges {
  @Input() data: string[];
  noNeighbours: boolean;
  countryInfo: ICountries[];
  constructor(private readonly detailsService: DetailsService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'].currentValue && this.data && this.data.length > 0) {
      this.getNamesByCodes(this.data);
    } else {
      this.noNeighbours = true;
    }
  }

  getNamesByCodes(arr: string[]) {
    this.detailsService
      .getCountryByListOfCode(arr)
      .subscribe((country) => (this.countryInfo = country as ICountries[]));
  }
}
