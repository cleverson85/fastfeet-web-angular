import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ViewComponent } from 'src/app/components/view/view.component';

import { Recipient } from '../../../models/recipient';
import { Deliveryman } from '../../../models/deliveryman';

import { OrderService } from '../../../services/order.service';

interface Order {
  id: number;
  product: string;
  recipient_id: number;
  deliveryman_id: number;
}

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent extends ViewComponent<Order> implements OnInit {
  recipients: Recipient[];
  deliverymen: Deliveryman[];
  selectedRecipient: Recipient;
  selectedDeliveryman: Deliveryman;
  product: string;
  order: Order = {
    id: 0,
    product: '',
    recipient_id: 0,
    deliveryman_id: 0
  };

  constructor(private orderService: OrderService, private router: Router) {
    super(orderService);
    this.route = 'order';
  }

  ngOnInit(): void {
    this.getRecipients();
    this.getDeliveryMen();
  }

  getRecipients(): void {
    this.orderService
      .getRecipient()
      .subscribe((recipient) => { this.recipients = recipient; });
  }

  getDeliveryMen(): void {
    this.orderService
      .getDeliveryMen()
      .subscribe((deliveryman) => { this.deliverymen = deliveryman; });
  }

  store(): void {
    this.save(this.order)
      .subscribe(() => this.router.navigate(['order']));
  }
}
