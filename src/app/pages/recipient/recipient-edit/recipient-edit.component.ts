import { Recipient } from '../../../models/recipient';
import { Component, OnInit } from '@angular/core';

import { ViewComponent } from '../../../components/view/view.component';
import { RecipientService } from '../../../services/recipient.service';

@Component({
  selector: 'app-recipient-edit',
  templateUrl: './recipient-edit.component.html',
  styleUrls: ['./recipient-edit.component.css']
})
export class RecipientEditComponent extends ViewComponent<Recipient> implements OnInit {

  constructor(private recipientService: RecipientService) {
    super(recipientService);
  }

  ngOnInit(): void { }

}
