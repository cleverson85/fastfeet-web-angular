import { Component, OnInit } from '@angular/core';

import { Deliveryman } from './../../../models/deliveryman';

import { DeliverService } from '../../../services/deliver.service';

@Component({
  selector: 'app-deliver-list',
  templateUrl: './deliver-list.component.html',
  styleUrls: ['./deliver-list.component.css']
})
export class DeliverListComponent implements OnInit {

  delivers: Deliveryman[] = [];
  list: Deliveryman[] = [];

  constructor(private deliverService: DeliverService ) { }

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this.deliverService.get<Deliveryman>('deliveryman').subscribe((deliver) => {
      this.delivers = deliver;
      this.list = this.delivers.slice(0, 10);
    });
  }

  onPageChange(data) {
    this.list = data;
  }
}
