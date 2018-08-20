import { Component, OnInit } from '@angular/core';
import {SESSION_PARAMS} from '../common/constants';

@Component({
  selector: 'app-success-screen',
  templateUrl: './success-screen.component.html',
  styleUrls: ['./success-screen.component.scss']
})
export class SuccessScreenComponent implements OnInit {

  updateMessage: string;
  constructor() { }

  ngOnInit() {
    this.updateMessage = sessionStorage.getItem(SESSION_PARAMS.UPDATED_ITEM);
  }

}
