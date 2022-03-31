import { Component, Input, OnInit } from '@angular/core';
import { ICountries } from 'src/app/dashboard/dashboard-services/dashboard.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  @Input() countryInfo: ICountries;
}
