import { Component, OnInit, EventEmitter } from '@angular/core';

import { Order } from '../../../models/order';
import { OrderService } from '../../../services/order.service';
import { ViewComponent } from '../../../components/view/view.component';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent extends ViewComponent<Order> implements OnInit {

  orders: Order[] = [];
  list: Order[] = [];
  detail = new EventEmitter<Order>();

  constructor(private orderService: OrderService) {
    super(orderService);
  }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.orderService.get<Order>('order').subscribe((orders) => {
      this.orders = orders;
      this.list = this.orders?.slice(0, 10);
    });
  }

  orderDetail(order: Order): void {
    this.detail.emit(order);
    alert(`Order id is ${JSON.stringify(order)}`);
  }

  onPageChange(data: any) {
    this.list = data;
  }
}
