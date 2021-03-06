import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICountries } from '../dashboard/dashboard-services/dashboard.model';
import { DetailsService } from './details-services/details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  countryInfo:ICountries[];
  Object = Object;
  constructor(private route: ActivatedRoute, private readonly detailsService:DetailsService) { }



  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = params.get('code') ?? '';
      this.detailsService.getCountryByCode(id).subscribe(res => {this.countryInfo = res as ICountries[]})
    });

  }

  

}
