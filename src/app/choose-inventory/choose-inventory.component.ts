import { Component, OnInit } from '@angular/core';
import {MODULE_URL} from '../common/constants';

@Component({
  selector: 'app-choose-inventory',
  templateUrl: './choose-inventory.component.html',
  styleUrls: ['./choose-inventory.component.scss']
})
export class ChooseInventoryComponent implements OnInit {


  filterItem = '';
  filterField = 'Name';
  navigationPath = MODULE_URL.INV_IN_OUT;

  constructor() { }
  ngOnInit() {
  }


  onFilterChanged(event) {
    this.filterItem = event;
  }

  onFilterFieldChanged(event) {
    this.filterField = event;
  }

}
