import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  filterData = '';
  filterField = 'Name';
  @Output() filterChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() filterFieldChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  modelChanged() {
    console.log(this.filterData);
    this.filterChanged.emit(this.filterData);
  }

  fieldModelChanged() {
    console.log(this.filterField);
    this.filterData = '';
    this.filterChanged.emit(this.filterData);
    this.filterFieldChanged.emit(this.filterField);
  }

}
