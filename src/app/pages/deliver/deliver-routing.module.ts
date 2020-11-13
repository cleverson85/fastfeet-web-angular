import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliverEditComponent } from './deliver-edit/deliver-edit.component';
import { DeliverListComponent } from './deliver-list/deliver-list.component';

const routes: Routes = [
  //{ path: '', component: DeliverListComponent },
  { path: 'deliveredit', component: DeliverEditComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DeliverRoutingModule { }
