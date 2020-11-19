import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import ApiBase from './apiBase.service';
import { Recipient } from './../models/recipient';
import { RoutesApi } from '../shared/routesAPI.enum';

@Injectable({
  providedIn: 'root'
})
export class RecipientService extends ApiBase {

  getRecipient(): Observable<Recipient[]> {
    return this.get(RoutesApi.Recipient);
  }
}
