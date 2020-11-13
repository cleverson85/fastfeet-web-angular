import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipientListComponent } from './recipient-list/recipient-list.component';
import { RecipientEditComponent } from './recipient-edit/recipient-edit.component';

const routes: Routes = [
  { path: 'recipientedit', component: RecipientEditComponent },
  { path: '', component: RecipientListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RecipientRoutingModule { }
