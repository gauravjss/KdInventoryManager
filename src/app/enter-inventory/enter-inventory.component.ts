import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {locationList} from '../common/constants';
import {InventoryService} from '../service/inventory.service';
import {Inventory} from '../models/inventory';

@Component({
  selector: 'app-enter-inventory',
  templateUrl: './enter-inventory.component.html',
  styleUrls: ['./enter-inventory.component.css']
})
export class EnterInventoryComponent implements OnInit {
  locations: string[];
  inventryItemForm: FormGroup;
  inventoryItem: Inventory = new Inventory();
  constructor(private inventoryService: InventoryService) { }

  ngOnInit() {

    this.locations = locationList;

    this.inventryItemForm = new FormGroup({
      itemName: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      weight: new FormControl(''),
      quantity: new FormControl('', [Validators.required, Validators.maxLength(2)]),
      location: new FormControl('Kitchen', [Validators.required])
    });
  }

  onAdd() {
    const formValue = this.inventryItemForm.value;
    this.inventoryItem.Name = formValue.itemName;
    this.inventoryItem.Description = formValue.description;
    this.inventoryItem.Weight = formValue.weight;
    this.inventoryItem.Quantity = formValue.quantity;
    this.inventoryItem.Location = formValue.location;
    this.inventoryItem.QR_Code =  0;
    this.inventoryItem.Price = 0;
    console.log(this.inventoryItem);
    this.inventoryService.addInventoryData(this.inventoryItem).subscribe((response) => {
      console.log(response);
    });
  }

  get itemName() {return this.inventryItemForm.get('itemName'); }
  get description() {return this.inventryItemForm.get('description'); }
  get weight() {return this.inventryItemForm.get('weight'); }
  get quantity() {return this.inventryItemForm.get('quantity'); }
  get location() {return this.inventryItemForm.get('location'); }

}
