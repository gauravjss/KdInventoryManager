import { Component, OnInit } from '@angular/core';
import {MODULE_URL, SESSION_PARAMS} from '../common/constants';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-success',
  templateUrl: './edit-success.component.html',
  styleUrls: ['./edit-success.component.scss']
})
export class EditSuccessComponent implements OnInit {

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
