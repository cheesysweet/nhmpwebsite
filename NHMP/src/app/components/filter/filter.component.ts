import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() findTypes: EventEmitter<string> = new EventEmitter();

  filters: string = 'Search type: ';
  

  constructor() { }

  ngOnInit(): void {}

  filtering(filter: string) {
    this.findTypes.emit(filter);
  }
}
