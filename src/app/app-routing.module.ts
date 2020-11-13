import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliverListComponent } from './pages/deliver/deliver-list/deliver-list.component';
import { DeliverEditComponent } from './pages/deliver/deliver-edit/deliver-edit.component';
import { HomeComponent } from './pages/home/home.component';
import { IssueComponent } from './pages/issue/issue.component';
import { OrderListComponent } from './pages/order/order-list/order-list.component';
import { RecipientListComponent } from './pages/recipient/recipient-list/recipient-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'order', component: OrderListComponent },
  { path: 'recipient', component: RecipientListComponent },
  { path: 'deliver', component: DeliverListComponent },
  { path: 'deliveredit', component: DeliverEditComponent },
  { path: 'issue', component: IssueComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
