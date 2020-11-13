import { Component, OnInit } from '@angular/core';
import { Observable, Subscribable } from 'rxjs';
import { Router } from '@angular/router';

import { IView } from './iViewt';
import ApiBase from '../../services/apiBase.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent<T> implements OnInit, IView<T> {

  route: string;

  constructor(private api: ApiBase) { }

  ngOnInit(): void { }

  save(Entity: T): Observable<T> {
    return this.api.save<T>(Entity, this.route);
  }

  update(Entity: T): Observable<T> {
    return this.api.update<T>(Entity, this.route);
  }

  delete(id: number): void {
    this.api.delete<T>(id, this.route).subscribe();
  }

  getById(id: number): Observable<T> {
    return this.api.getById<T>(this.route + '/' + id);
  }
}
