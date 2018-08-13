import { Component, OnInit } from '@angular/core';
import {Inventory} from '../models/inventory';
import {MODULE_URL} from '../common/constants';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  module_vars = MODULE_URL;
  constructor(   private router: Router) { }

  ngOnInit() {

  }

  navigateComponent(module: string) {
    this.router.navigateByUrl(module);
  }
}
