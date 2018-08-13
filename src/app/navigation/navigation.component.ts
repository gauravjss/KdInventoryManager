import { Component, OnInit } from '@angular/core';
import {MODULE_URL} from '../common/constants';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  module_vars = MODULE_URL;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onRedirect(route: string) {
    this.router.navigateByUrl(route);
  }

}
