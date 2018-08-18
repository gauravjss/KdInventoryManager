export enum MODULE_URL {
  INV_LIST = 'master_inventory',
  INV_ADD = 'add_inventory',
  INV_EDIT = 'edit_inventory',
  INV_IN_OUT = 'in_out_inventory',
  INV_ROOMS = 'manage_room_inventory',
  INV_SELECT = 'select_inventory',
  DASHBOARD = 'dashboard',
  ADD_SUCCESS = 'add_success',
  IN_OUT_SUCCESS = 'in_out_success',
  EDIT_SUCCESS = 'edit_success',
  UPDATE_SUCCESS = 'update_success'
}

export enum SESSION_PARAMS {
  INV_EDIT = 'edit_item',
  INV_IN_OUT = 'in_out_item',
  UPDATED_ITEM = 'updated_item'
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
