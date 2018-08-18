import { Component, OnInit, Input } from '@angular/core';
import {Inventory} from '../models/inventory';
import {Observable} from 'rxjs/internal/Observable';
import {InventoryService} from '../service/inventory.service';
import {Router} from '@angular/router';
import {MODULE_URL, SESSION_PARAMS} from '../common/constants';
@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss']
})
export class InventoryListComponent implements OnInit {

  inventoryData$: Observable<Inventory[]> = new Observable<Inventory[]>();
  @Input() filterItem;
  @Input() filterField;
  @Input() navigationPath;

  constructor(private inventoryService: InventoryService,
              private router: Router) { }

  ngOnInit() {
    this.inventoryData$ = this.inventoryService.getInventoryData();
  }

  navigate(inventoryItem: Inventory) {
    if (this.navigationPath === MODULE_URL.INV_EDIT) {
      sessionStorage.setItem(SESSION_PARAMS.INV_EDIT, JSON.stringify(inventoryItem));
    } else {
      sessionStorage.setItem(SESSION_PARAMS.INV_IN_OUT, JSON.stringify(inventoryItem));
    }
    this.router.navigateByUrl(this.navigationPath);
    console.log(inventoryItem);
  }

}
