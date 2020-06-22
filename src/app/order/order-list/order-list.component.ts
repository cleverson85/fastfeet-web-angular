import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { Order } from '../../models/order';
import Api from '../../services/api.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Order[] = [];
  meuFavorito: boolean = false;
  detail = new EventEmitter<Order>();

  constructor(private apiService: Api) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.apiService.getOrders()
      .subscribe(order => (this.orders = order));
  }

  handleOrder(): void {

  }

  orderDetail(order: Order) {
    this.detail.emit(order);

    alert(`Order id is ${JSON.stringify(order)}`)
  }

  onClick() {
    this.meuFavorito = !this.meuFavorito
  }
}
