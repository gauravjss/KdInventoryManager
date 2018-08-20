import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {locationList, MODULE_URL, SESSION_PARAMS} from '../common/constants';
import {InventoryService} from '../service/inventory.service';
import {Inventory} from '../models/inventory';
import {Router} from '@angular/router';

@Component({
  selector: 'app-enter-inventory',
  templateUrl: './enter-inventory.component.html',
  styleUrls: ['./enter-inventory.component.css']
})
export class EnterInventoryComponent implements OnInit {
  showFailureMessage = false;
  serviceErrorMessage: string;
  locations: string[];
  inventoryItemForm: FormGroup;
  inventoryItem: Inventory = new Inventory();
  constructor(private inventoryService: InventoryService,
              private router: Router) { }

  ngOnInit() {

    this.locations = locationList;

    this.inventoryItemForm = new FormGroup({
      itemName: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      barcode: new FormControl(''),
      price: new FormControl('0', [Validators.pattern('^\\d+(\\.\\d{1,2})?$'), Validators.maxLength(6)]),
      weight: new FormControl(''),
      quantity: new FormControl('', [Validators.required,   Validators.pattern('^[0-9]*$'), Validators.maxLength(2)]),
      location: new FormControl('Kitchen', [Validators.required])
    });
  }

  onAdd() {
    this.showFailureMessage = false;
    this.setInventoryValues();

    this.inventoryService.addInventoryData(this.inventoryItem).subscribe((response) => {
      if (JSON.parse(JSON.stringify(response)).code !== 200) {
        this.showFailureMessage = true;
        this.serviceErrorMessage =  JSON.parse(JSON.stringify(response)).message;
      } else {
        sessionStorage.setItem(SESSION_PARAMS.UPDATED_ITEM, ` ${this.inventoryItem.Name} Successfully added to the Inventory`);
        this.router.navigateByUrl(MODULE_URL.SUCCESS);
      }
    });
  }

  setInventoryValues() {
    const formValue = this.inventoryItemForm.value;
    this.inventoryItem.Name = formValue.itemName;
    this.inventoryItem.Description = formValue.description;
    this.inventoryItem.Weight = formValue.weight;
    this.inventoryItem.Quantity = formValue.quantity;
    this.inventoryItem.Location = formValue.location;
    this.inventoryItem.QR_Code =  formValue.barcode;
    this.inventoryItem.Price = formValue.price;
  }

  get itemName() {return this.inventoryItemForm.get('itemName'); }
  get description() {return this.inventoryItemForm.get('description'); }
  get weight() {return this.inventoryItemForm.get('weight'); }
  get quantity() {return this.inventoryItemForm.get('quantity'); }
  get location() {return this.inventoryItemForm.get('location'); }
  get price() {return this.inventoryItemForm.get('price'); }

}
