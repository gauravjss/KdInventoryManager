import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MasterInvComponent} from './master-inv/master-inv.component';
import {MODULE_URL} from './common/constants';
import {EnterInventoryComponent} from './enter-inventory/enter-inventory.component';
import {InventoryInOutComponent} from './inventory-in-out/inventory-in-out.component';

const appRoutes: Routes = [
  {path: '', redirectTo: MODULE_URL.DASHBOARD , pathMatch: 'full'},
  {path: MODULE_URL.DASHBOARD , component: DashboardComponent },
  {path: MODULE_URL.INV_LIST, component: MasterInvComponent},
  {path: MODULE_URL.INV_ADD, component: EnterInventoryComponent},
  {path: MODULE_URL.INV_IN_OUT, component: InventoryInOutComponent},
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
