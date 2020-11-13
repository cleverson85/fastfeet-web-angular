import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Deliveryman } from '../models/deliveryman';
import { Recipient } from '../models/recipient';
import ApiBase from './apiBase.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends ApiBase {

  getDeliveryMen(): Observable<Deliveryman[]> {
    return this.get('deliveryman');
  }

  getRecipient(): Observable<Recipient[]> {
    return this.get('recipient');
  }
}
