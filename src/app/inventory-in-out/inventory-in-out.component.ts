import { Component, OnInit } from '@angular/core';
import {InventoryService} from '../service/inventory.service';
import {Inventory} from '../models/inventory';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ACTIONS,  MODULE_URL, SESSION_PARAMS} from '../common/constants';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inventory-in-out',
  templateUrl: './inventory-in-out.component.html',
  styleUrls: ['./inventory-in-out.component.scss']
})
export class InventoryInOutComponent implements OnInit {

  inventoryInOutForm: FormGroup;
  inventoryItem: Inventory;
  showSuccessMessage = false;
  showFailureMessage = false;
  actions = ACTIONS;
  module_vars = MODULE_URL;
  constructor(private inventoryService: InventoryService, private router: Router) { }

  navigateComponent(module: string) {
    this.router.navigateByUrl(module);
  }
  ngOnInit() {

    /* this.inventoryService.getInventoryData().subscribe(
          (inventoryArray) => {
            this.inventoryList = inventoryArray;
            inventoryArray.forEach((item: Inventory) => {
              this.itemNamesList.push(
                {_id: item._id , name: item.Name});
            });
          }
        );*/
    if (sessionStorage.getItem(SESSION_PARAMS.INV_IN_OUT)) {
      this.inventoryItem = JSON.parse(sessionStorage.getItem(SESSION_PARAMS.INV_IN_OUT));
    }
    this.inventoryInOutForm = new FormGroup({
      quantity: new FormControl('', [Validators.required,   Validators.pattern('^[0-9]*$'), Validators.maxLength(2)]),
    });
  }

  onUpdate(action: string) {
    this.showSuccessMessage = false;
    this.showFailureMessage =  false;
    const quantity = this.inventoryInOutForm.value.quantity;
    this.inventoryService.updateInventory(this.inventoryItem, action, quantity).subscribe(
      (result) => {
        console.log(result);
        if (JSON.parse(JSON.stringify(result)).status === 200) {
          sessionStorage.setItem(SESSION_PARAMS.UPDATED_ITEM,  JSON.parse(JSON.stringify(result)).item.Name);
          this.router.navigateByUrl(MODULE_URL.IN_OUT_SUCCESS);
        } else {
          this.showFailureMessage =  true;
        }
        /*this.inventoryInOutForm.reset( );
        this.inventoryInOutForm.patchValue({
          itemName: 'select'
          // other controller names goes here
        });*/
      });
  }
  get quantity() {return this.inventoryInOutForm.get('quantity'); }

  /* onSelect(_id: string) {
    console.log(_id)
    if (_id === 'select') {
      this.showDetails = false;
      return;
    }
    this.showMessage = false;
   this.inventoryItem = this.inventoryList.find( item => item._id === _id );
    this.showDetails = true;
  }*/
}
