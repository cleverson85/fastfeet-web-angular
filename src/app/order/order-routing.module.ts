import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderListComponent } from './order-list/order-list.component';
import { OrderEditComponent } from './order-edit/order-edit.component';

const routes: Routes = [
  { path: '', component: OrderListComponent },
  { path: 'order', component: OrderListComponent },
  { path: 'orderedit', component: OrderEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
