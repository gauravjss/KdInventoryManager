import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Inventory} from '../models/inventory';
import {locationList, MODULE_URL, SESSION_PARAMS} from '../common/constants';
import {InventoryService} from '../service/inventory.service';

@Component({
  selector: 'app-edit-inventory',
  templateUrl: './edit-inventory.component.html',
  styleUrls: ['./edit-inventory.component.scss']
})
export class EditInventoryComponent implements OnInit {

  showSuccessMessage = false;
  updatedItem: string;
  inventoryEditForm: FormGroup;
  inventoryItem: Inventory;
  locations: string[];
  constructor(private inventoryService: InventoryService) { }

  ngOnInit() {
    if (sessionStorage.getItem(SESSION_PARAMS.INV_EDIT)) {
      this.inventoryItem = JSON.parse(sessionStorage.getItem(SESSION_PARAMS.INV_EDIT));
    }
    this.locations = locationList;
    console.log(this.inventoryItem);
    this.inventoryEditForm = new FormGroup({
      itemName: new FormControl(this.inventoryItem.Name, [Validators.required]),
      description: new FormControl(this.inventoryItem.Description),
      barcode: new FormControl(this.inventoryItem.QR_Code),
      price: new FormControl(this.inventoryItem.Price, [Validators.pattern('^\\d+(\\.\\d{1,2})?$'), Validators.maxLength(6)]),
      weight: new FormControl(this.inventoryItem.Weight),
      quantity: new FormControl(this.inventoryItem.Quantity,
        [Validators.required,   Validators.pattern('^[0-9]*$'), Validators.maxLength(2)]),
      location: new FormControl(this.inventoryItem.Location, [Validators.required])
    });
  }

  onEdit() {
    this.setInventoryValues();

    this.inventoryService.updateInventory(this.inventoryItem, null, null).subscribe(
      (result) => {
        console.log(result);
        if (JSON.parse(JSON.stringify(result)).status === 200) {
          this.showSuccessMessage = true;
          this.updatedItem = JSON.parse(JSON.stringify(result)).item.Name;
         // this.showDetails = false;
        } else {
          // this.showFailureMessage =  true;
        }
      });
  }


  setInventoryValues() {
    const formValue = this.inventoryEditForm.value;
    this.inventoryItem.Name = formValue.itemName;
    this.inventoryItem.Description = formValue.description;
    this.inventoryItem.Weight = formValue.weight;
    this.inventoryItem.Quantity = formValue.quantity;
    this.inventoryItem.Location = formValue.location;
    this.inventoryItem.QR_Code =  formValue.barcode;
    this.inventoryItem.Price = formValue.price;
    console.log(this.inventoryItem);
  }


  get itemName() {return this.inventoryEditForm.get('itemName'); }
  get description() {return this.inventoryEditForm.get('description'); }
  get weight() {return this.inventoryEditForm.get('weight'); }
  get quantity() {return this.inventoryEditForm.get('quantity'); }
  get location() {return this.inventoryEditForm.get('location'); }
  get price() {return this.inventoryEditForm.get('price'); }

}
