import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderListComponent } from './order/order-list/order-list.component';
import { RecipientListComponent } from './recipient/recipient-list/recipient-list.component';

const routes: Routes = [
  { path: '', component: OrderListComponent },
  { path: 'order', component: OrderListComponent },
  { path: 'recipient', component: RecipientListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
