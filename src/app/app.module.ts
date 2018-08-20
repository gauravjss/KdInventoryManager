import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import {LoadingComponent} from './shared/loading/loading.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoadingInterceptor} from './shared/loading/loading.interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EnterInventoryComponent } from './enter-inventory/enter-inventory.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { MasterInvComponent } from './master-inv/master-inv.component';
import { InventoryInOutComponent } from './inventory-in-out/inventory-in-out.component';
import { ChooseInventoryComponent } from './choose-inventory/choose-inventory.component';
import { EditInventoryComponent } from './edit-inventory/edit-inventory.component';
import { InventoryLogComponent } from './inventory-log/inventory-log.component';
import { SuccessScreenComponent } from './success-screen/success-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    LoadingComponent,
    DashboardComponent,
    EnterInventoryComponent,
    InventoryListComponent,
    NavigationComponent,
    CapitalizePipe,
    FilterPipe,
    MasterInvComponent,
    InventoryInOutComponent,
    ChooseInventoryComponent,
    EditInventoryComponent,
    InventoryLogComponent,
    SuccessScreenComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
