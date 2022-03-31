import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Input() options: string[];
  @Output() selected = new EventEmitter();
  selectedCity: string;

  onChangeofOptions(event: string) {
    this.selected.emit(event);
  }
}
