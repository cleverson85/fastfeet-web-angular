import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RoutesApi } from './../shared/routesAPI.enum';

import ApiBase from './apiBase.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends ApiBase {

  saveOrder<Order>(order: Order): Observable<Order> {
    return this.save<Order>(order, RoutesApi.Order);
  }
}
