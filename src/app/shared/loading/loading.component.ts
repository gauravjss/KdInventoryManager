import { Component, OnInit } from '@angular/core';
import {LoadingService} from './loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  showLoader: boolean;

  constructor(private loader: LoadingService) {
  }

  ngOnInit() {
    this.loader.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });
  }
}
