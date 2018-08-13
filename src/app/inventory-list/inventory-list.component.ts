import { Component, OnInit, Input } from '@angular/core';
import {Inventory} from '../models/inventory';
import {Observable} from 'rxjs/internal/Observable';
import {InventoryService} from '../service/inventory.service';
@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss']
})
export class InventoryListComponent implements OnInit {

  inventoryData$: Observable<Inventory[]> = new Observable<Inventory[]>();
  @Input() filterItem;
  @Input() filterField;

  constructor(private inventoryService: InventoryService) { }

  ngOnInit() {
    this.inventoryData$ = this.inventoryService.getInventoryData();
  }

}
