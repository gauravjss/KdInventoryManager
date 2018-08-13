export enum MODULE_URL {
  INV_LIST = 'master_inventory',
  INV_ADD = 'add_inventory',
  INV_IN_OUT = 'in_out_inventory',
  INV_ROOMS = 'manage_room_inventory',
  DASHBOARD= 'dashboard',
  ADD_SUCCESS = 'add_success',
  UPDATE_SUCCESS = 'update_success'
}

export enum ACTIONS {
  IN = 'IN',
  OUT = 'OUT'
}

export const locationList = ['Kitchen', 'Pantry', 'Toiletries', 'Laundry', 'Cosmetics'];

export interface InventoryObj {
  _id: string;
  name: string;
}
export const HEADER_PARAMS = {
  'Content-Type': 'application/json'
}
