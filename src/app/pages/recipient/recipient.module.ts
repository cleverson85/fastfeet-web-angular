import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RecipientRoutingModule } from './recipient-routing.module';
import { MenuListModule } from '../../components/menu-list/menu-list.module';
import { PaginationModule } from 'src/app/components/pagination/pagination.module';

import { RecipientEditComponent } from './recipient-edit/recipient-edit.component';
import { RecipientListComponent } from './recipient-list/recipient-list.component';

@NgModule({
  declarations: [
    RecipientListComponent,
    RecipientEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RecipientRoutingModule,
    MenuListModule,
    PaginationModule
  ],
  providers: [

  ],
  exports: [
    RecipientListComponent,
    RecipientEditComponent,
  ]
})
export class RecipientModule { }
