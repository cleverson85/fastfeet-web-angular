import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

import ConfigService from '../config/config-service';
import { Order } from '../models/order';
import { Deliveryman } from '../models/deliveryman';
import { Recipient } from '../models/recipient';

@Injectable()
class Api {
  private url = ConfigService;

  constructor(private httpClient: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getOrders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(`${this.url.baseUrl}order`)
                          .pipe(retry(2));
  }

  getDeliveryMen(): Observable<Deliveryman[]>{
    return this.httpClient.get<Deliveryman[]>(`${this.url.baseUrl}deliveryman`)
                          .pipe(retry(2))
  }

  getRecipient(): Observable<Recipient[]>{
    return this.httpClient.get<Recipient[]>(`${this.url.baseUrl}recipient`)
                          .pipe(retry(2))
  }

  storeOrder(order: any) {
    console.log(JSON.stringify(order));

    return this.httpClient.post(`${this.url.baseUrl}order`, order, this.httpOptions);
  }
}

export default Api;
