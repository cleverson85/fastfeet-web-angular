import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipientListComponent } from './recipient-list/recipient-list.component';
import { RecipientEditComponent } from './recipient-edit/recipient-edit.component';

const routes: Routes = [
  { path: '', component: RecipientListComponent },
  { path: 'recipient-edit', component: RecipientEditComponent },
  { path: 'recipient-edit/:id', component: RecipientEditComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RecipientRoutingModule { }
