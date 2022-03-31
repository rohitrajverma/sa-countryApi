import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from './dashboard-services/dashboard-service.service';
import { ICountries } from './dashboard-services/dashboard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data: any;
  query: string = '';
  regionArr = [];
  constructor(private readonly dashboardService: DashboardServiceService) { }

  ngOnInit(): void {
    this.loadCountries();
  }

  loadCountries() {
    this.dashboardService.getCountries().subscribe(arg => {
      this.data = arg;
      this.regionArr = this.getRegionArr(arg)
      console.log(this.regionArr);

    });
  }

  searchQuery(event: string) {
    this.query = event;
  }

  filterByRegion(event: string) {
    if(event){
      this.dashboardService.filterByRegion(event).subscribe(res => this.data = res);
    }else{
      this.loadCountries();
    }
  }

  getRegionArr(data: any) {
    let regions = data.map((x: { region: any; }) => x.region);
    return regions.filter((current: any, index: any, arr: string | any[]) => arr.indexOf(current) === index)
  }

}
