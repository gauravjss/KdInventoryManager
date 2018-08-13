import { Component, OnInit } from '@angular/core';
import {InventoryService} from '../service/inventory.service';
import {Inventory} from '../models/inventory';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ACTIONS, InventoryObj} from '../common/constants';

@Component({
  selector: 'app-inventory-in-out',
  templateUrl: './inventory-in-out.component.html',
  styleUrls: ['./inventory-in-out.component.scss']
})
export class InventoryInOutComponent implements OnInit {

  inventoryList: Inventory[] = [];
  itemNamesList: InventoryObj[] = [];
  inventoryInOutForm: FormGroup;
  inventoryItem: Inventory;
  showDetails = false;
  showMessage = false;
  updatedItem: string;
  actions = ACTIONS;
  constructor(private inventoryService: InventoryService) { }

  ngOnInit() {
    this.inventoryService.getInventoryData().subscribe(
      (inventoryArray) => {
        this.inventoryList = inventoryArray;
        inventoryArray.forEach((item: Inventory) => {
          this.itemNamesList.push(
            {_id: item._id , name: item.Name});
        });
      }
    );

    this.inventoryInOutForm = new FormGroup({
      itemName: new FormControl('select', [Validators.required]),
      quantity: new FormControl('', [Validators.required, Validators.maxLength(2)]),
    });
  }

  onSelect(_id: string) {
    console.log(_id)
    if (_id === 'select') {
      this.showDetails = false;
      return;
    }
    this.showMessage = false;
    this.inventoryItem = this.inventoryList.find( item => item._id === _id );
    this.showDetails = true;
  }

  onUpdate(action: string) {

    const quantity = this.inventoryInOutForm.value.quantity;
    this.inventoryService.updateInventory(this.inventoryItem, action, quantity).subscribe(
      (result) => {
        console.log(result);
        if (JSON.parse(JSON.stringify(result)).status === 200) {
          this.showMessage = true;
          this.updatedItem = JSON.parse(JSON.stringify(result)).item.Name;
        }
        this.inventoryInOutForm.reset( );
        this.inventoryInOutForm.patchValue({
          itemName: 'select'
          // other controller names goes here
        });
        this.showDetails = false;
        this.inventoryService.getInventoryData().subscribe(
          (inventoryArray) => {
            this.inventoryList = inventoryArray;
          });
      });
  }
  get itemName() {return this.inventoryInOutForm.get('itemName'); }
  get quantity() {return this.inventoryInOutForm.get('quantity'); }

}
