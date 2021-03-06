import { Component, OnInit } from '@angular/core';
import {MODULE_URL} from '../common/constants';

@Component({
  selector: 'app-master-inv',
  templateUrl: './master-inv.component.html',
  styleUrls: ['./master-inv.component.scss']
})
export class MasterInvComponent implements OnInit {

  constructor() { }
  filterItem = '';
  filterField = 'Name';
  navigationPath = MODULE_URL.INV_EDIT;
  ngOnInit() {
  }


  onFilterChanged(event) {
    this.filterItem = event;
  }

  onFilterFieldChanged(event) {
    this.filterField = event;
  }
}
