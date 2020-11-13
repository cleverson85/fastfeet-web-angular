import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DeliverRoutingModule } from './deliver-routing.module';
import { MenuListModule } from '../../components/menu-list/menu-list.module';
import { PaginationModule } from 'src/app/components/pagination/pagination.module';

import { DeliverEditComponent } from './deliver-edit/deliver-edit.component';
import { DeliverListComponent } from './deliver-list/deliver-list.component';

import { DeliverService } from '../../services/deliver.service';

@NgModule({
  declarations: [
    DeliverEditComponent, DeliverListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DeliverRoutingModule,
    MenuListModule,
    PaginationModule,
  ],
  providers: [DeliverService],
})
export class DeliverModule {}
