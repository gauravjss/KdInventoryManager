import { Component, OnInit } from '@angular/core';
import {MODULE_URL, SESSION_PARAMS} from '../common/constants';
import {Router} from '@angular/router';

@Component({
  selector: 'app-in-out-success',
  templateUrl: './in-out-success.component.html',
  styleUrls: ['./in-out-success.component.scss']
})
export class InOutSuccessComponent implements OnInit {

  module_vars =  MODULE_URL;
  updatedItem: string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.updatedItem = sessionStorage.getItem(SESSION_PARAMS.UPDATED_ITEM);
  }

  navigateComponent(module: string) {
    this.router.navigateByUrl(module);
  }

}
