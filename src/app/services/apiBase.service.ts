import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Cookie } from 'ng2-cookies/ng2-cookies';

import { MessageService } from './message.service';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
class ApiBase {

  private readonly API = environment.API;

  constructor(private httpClient: HttpClient,
              private messageService: MessageService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Cookie.get('JwtToken')}`
    })
  };

  get<T>(route: string): Observable<T[]> {
    return this.httpClient.get<T[]>(this.API + route, this.httpOptions)
                          .pipe(
                            retry(3),
                            catchError(this.handleError<T[]>('get'))
                          );
  }

  getById<T>(route: string): Observable<T> {
    return this.httpClient.get<T>(this.API + route, this.httpOptions)
                          .pipe(
                            retry(3),
                            catchError(this.handleError<T>('getById'))
                          );
  }

  update<T>(Entity: T, route: string): Observable<T> {
    return this.httpClient.put<T>(this.API + route, Entity, this.httpOptions)
                          .pipe(
                            retry(3),
                            catchError(this.handleError<T>('update', Entity))
                          );
  }

  save<T>(Entity: T, route: string): Observable<T> {
    return this.httpClient.post<T>(this.API + route, Entity, this.httpOptions)
                          .pipe(
                            retry(3),
                            catchError(this.handleError<T>('save', Entity))
                          );
  }

  delete<T>(id: number, route: string): Observable<T> {
    return this.httpClient.delete<T>(this.API + route, this.httpOptions)
                          .pipe(
                            retry(3),
                            catchError(this.handleError<T>('delete'))
                          );
  }

  private handleError<T>(operation = 'Operation', result?: T) {

    console.log('passei aqui')

    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`ApiBase: ${message}`);
  }
}

export default ApiBase;
