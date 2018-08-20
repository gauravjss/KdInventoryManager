export class Inventory {

  Name: string;
  Description: string;
  Weight: string;
  Price: number;
  Quantity: number;
  Location: string;
  QR_Code: string;
  __v: number;
  _id: string;

  constructor() {
  }

}

export class InventoryLog {

  Name: string;
  CompletedAt: string;
  Action: string;
  Quantity: number;
  Location: string;
  __v: number;
  _id: string;

  constructor() {
  }
}
