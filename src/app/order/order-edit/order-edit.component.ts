import { Component, OnInit } from '@angular/core';

import Api from '../../services/api.service';
import { Recipient } from '../../models/recipient';
import { Deliveryman } from '../../models/deliveryman';

interface Order {
  id: number,
  product: string,
  recipient_id: number,
  deliveryman_id: number
}

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

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
  }

  constructor(private apiService: Api) { }

  ngOnInit(): void {
    this.getRecipients();
    this.getDeliveryMen();
  }

  getRecipients(): void {
    this.apiService.getRecipient()
      .subscribe(recipient => (this.recipients = recipient));
  }

  getDeliveryMen(): void {
    this.apiService.getDeliveryMen()
      .subscribe(deliveryman => (this.deliverymen = deliveryman));
  }

  store(): void {
    this.apiService.storeOrder(this.order);
  }
}
