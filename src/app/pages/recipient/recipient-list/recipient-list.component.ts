import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Recipient } from '../../../models/recipient';
import { RoutesApi } from '../../../shared/routesAPI.enum';

import { RecipientService } from '../../../services/recipient.service';

@Component({
  selector: 'app-recipient-list',
  templateUrl: './recipient-list.component.html',
  styleUrls: ['./recipient-list.component.css']
})
export class RecipientListComponent implements OnInit {

  recipients: Recipient[] = [];
  list: Recipient[] = [];
  recipient$ = new Observable<Recipient[]>();

  constructor(private recipientService: RecipientService ) { }

  ngOnInit(): void {
    this.getRecipients();
  }

  getRecipients(): void {
    this.recipient$ = this.recipientService.get<Recipient>(RoutesApi.Recipient);
  }

  onPageChange(data) {
    this.list = data;
  }
}
