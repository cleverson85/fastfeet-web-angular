import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

import { Recipient } from '../../../models/recipient';
import { Deliveryman } from '../../../models/deliveryman';
import { RoutesApi } from './../../../shared/routesAPI.enum';

import { OrderService } from '../../../services/order.service';
import { RecipientService } from './../../../services/recipient.service';
import { DeliverService } from './../../../services/deliver.service';

interface Order {
  id: number;
  product: string;
  recipient: {
    id: number;
  };
  deliveryMan: {
    id: number;
  };
}

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit, OnDestroy {

  recipients: Recipient[];
  deliverymen: Deliveryman[];
  selectedRecipient: Recipient;
  selectedDeliveryman: Deliveryman;
  product: string;
  order: Order;
  subscription = new Subscription();

  constructor(private activatedRoute: ActivatedRoute,
              private recipientService: RecipientService,
              private deliverService: DeliverService,
              private orderService: OrderService,
              private router: Router) { }

  ngOnInit(): void {
    this.getRecipients();
    this.getDeliveryMen();

    this.activatedRoute.params.subscribe(async params => {
      const { id } = params;

      if (id) {
        this.getOrderById(id);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getRecipients(): void {
    this.subscription.add(this.recipientService
      .getRecipient()
      .subscribe((recipient) => { this.recipients = recipient; })
    );
  }

  getDeliveryMen(): void {
    this.subscription.add(this.deliverService
      .getDeliveryMen()
      .subscribe((deliveryman) => { this.deliverymen = deliveryman; })
    );
  }

  getOrderById(id: number): void {
    this.subscription.add(this.orderService.getById<Order>(`${RoutesApi.Order}/${id}`)
      .subscribe(
        (order: Order) => {
          if (order) {
            this.order = order;
          }
        }
      )
    );
  }

  save(): void {
    this.orderService.saveOrder<Order>(this.order).subscribe(() => this.router.navigate(['order']));
  }
}
