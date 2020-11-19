import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import ApiBase from 'src/app/services/apiBase.service';

import { Deliveryman } from '../models/deliveryman';
import { RoutesApi } from './../shared/routesAPI.enum';

@Injectable({
  providedIn: 'root'
})
export class DeliverService extends ApiBase {

  getDeliveryMen(): Observable<Deliveryman[]> {
    return this.get(RoutesApi.Deliver);
  }
}
