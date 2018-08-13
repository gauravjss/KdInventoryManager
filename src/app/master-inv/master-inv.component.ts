import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-inv',
  templateUrl: './master-inv.component.html',
  styleUrls: ['./master-inv.component.scss']
})
export class MasterInvComponent implements OnInit {

  constructor() { }
  filterItem = '';
  filterField = 'Name';
  ngOnInit() {
  }


  onFilterChanged(event) {
    this.filterItem = event;
  }

  onFilterFieldChanged(event) {
    this.filterField = event;
  }
}
