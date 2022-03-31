import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searchQuery = new EventEmitter();
  query: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  change(event: any) {
    this.searchQuery.emit(event);
  }
}
