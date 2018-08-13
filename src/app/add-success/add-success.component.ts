import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MODULE_URL} from '../common/constants';

@Component({
  selector: 'app-add-success',
  templateUrl: './add-success.component.html',
  styleUrls: ['./add-success.component.scss']
})
export class AddSuccessComponent implements OnInit {
  module_vars =  MODULE_URL;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateComponent(module: string) {
    this.router.navigateByUrl(module);
  }

}
