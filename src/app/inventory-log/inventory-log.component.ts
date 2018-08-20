import { Component, OnInit } from '@angular/core';
import {InventoryService} from '../service/inventory.service';
import {Router} from '@angular/router';
import {InventoryLog} from '../models/inventory';

@Component({
  selector: 'app-inventory-log',
  templateUrl: './inventory-log.component.html',
  styleUrls: ['./inventory-log.component.scss']
})
export class InventoryLogComponent implements OnInit {

  inventoryLogData: InventoryLog[];
  constructor(private inventoryService: InventoryService,
              private router: Router) { }

  ngOnInit() {
  this.inventoryService.getInventoryLog().subscribe(
      (inventoryLogData) => {
        this.inventoryLogData = inventoryLogData;
        this.inventoryLogData.forEach((inventoryLog, index) => {
          this.inventoryLogData[index].CompletedAt = this.getFormattedDate(this.inventoryLogData[index].CompletedAt);
        });
      }
    );
  }

   getFormattedDate(timestamp) {
     const date = new Date(timestamp);
     const formatted = `${date.getFullYear()}-${(date.getMonth() + 1)}-${date.getDate()}  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} CST`
     return formatted;
  }

}
