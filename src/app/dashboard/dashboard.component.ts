import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from './dashboard-services/dashboard-service.service';
import { ICountries } from './dashboard-services/dashboard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  data: ICountries[];
  query: string;
  regionArr: string[];

  constructor(private readonly dashboardService: DashboardServiceService) {}

  ngOnInit(): void {
    this.loadCountries();
  }

  loadCountries() {
    this.dashboardService.getCountries().subscribe((arg) => {
      this.data = arg as ICountries[];
      this.regionArr = this.getRegionArr(arg);
    });
  }

  searchQuery(event: string) {
    this.query = event;
  }

  filterByRegion(event: string) {
    if (event) {
      this.dashboardService
        .filterByRegion(event)
        .subscribe((res) => (this.data = res as ICountries[]));
    } else {
      this.loadCountries();
    }
  }

  getRegionArr(data: ICountries[]): string[] {
    let regions = data.map((country) => country.region);
    return regions.filter(
      (current: string, index: number, arr: string[]) =>
        arr.indexOf(current) === index
    );
  }
}
