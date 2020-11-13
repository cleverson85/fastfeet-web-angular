import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OrderRoutingModule } from './order-routing.module';
import { MenuListModule } from '../../components/menu-list/menu-list.module';
import { PaginationModule } from 'src/app/components/pagination/pagination.module';

import { OrderEditComponent } from './order-edit/order-edit.component';
import { OrderListComponent } from './order-list/order-list.component';
import { MenuListComponent } from './../../components/menu-list/menu-list.component';

import { OrderService } from '../../services/order.service';

@NgModule({
  declarations: [
    OrderEditComponent,
    OrderListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    OrderRoutingModule,
    PaginationModule,
    MenuListModule,
  ],
  providers: [
    OrderService
  ]
})
export class OrderModule { }
