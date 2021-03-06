import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MasterInvComponent} from './master-inv/master-inv.component';
import {MODULE_URL} from './common/constants';
import {EnterInventoryComponent} from './enter-inventory/enter-inventory.component';
import {InventoryInOutComponent} from './inventory-in-out/inventory-in-out.component';
import {ChooseInventoryComponent} from './choose-inventory/choose-inventory.component';
import {EditInventoryComponent} from './edit-inventory/edit-inventory.component';
import {SuccessScreenComponent} from './success-screen/success-screen.component';
import {InventoryLogComponent} from './inventory-log/inventory-log.component';

const appRoutes: Routes = [
  {path: '', redirectTo: MODULE_URL.DASHBOARD , pathMatch: 'full'},
  {path: MODULE_URL.DASHBOARD , component: DashboardComponent },
  {path: MODULE_URL.INV_LIST, component: MasterInvComponent},
  {path: MODULE_URL.INV_ADD, component: EnterInventoryComponent},
  {path: MODULE_URL.INV_SELECT, component: ChooseInventoryComponent },
  {path: MODULE_URL.INV_IN_OUT, component: InventoryInOutComponent },
  {path: MODULE_URL.INV_EDIT, component: EditInventoryComponent },
  {path: MODULE_URL.INVENTORY_LOG, component: InventoryLogComponent},
  {path: MODULE_URL.SUCCESS, component: SuccessScreenComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
