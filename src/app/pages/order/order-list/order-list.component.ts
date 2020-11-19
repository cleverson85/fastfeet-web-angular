import { Component, OnInit, EventEmitter } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Order } from '../../../models/order';

import { OrderService } from '../../../services/order.service';

import { RoutesApi } from './../../../shared/routesAPI.enum';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  list: Order[] = [];
  detail = new EventEmitter<Order>();
  orders$ = new Observable<Order[]>();

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.orders$ = this.orderService.get<Order>(RoutesApi.Order);
  }

  orderDetail(order: Order): void {
    this.detail.emit(order);
    alert(`Order id is ${JSON.stringify(order)}`);
  }

  onPageChange(data: any) {
    this.list = data;
  }
}
