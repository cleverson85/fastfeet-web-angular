import { Component, OnInit } from '@angular/core';

import { Recipient } from './../../../models/recipient';

import { RecipientService } from '../../../services/recipient.service';

@Component({
  selector: 'app-recipient-edit',
  templateUrl: './recipient-edit.component.html',
  styleUrls: ['./recipient-edit.component.css']
})
export class RecipientEditComponent implements OnInit {

  recipient: Recipient;

  constructor(private recipientService: RecipientService) { }

  ngOnInit(): void { }

  save(): void {

  }
}
