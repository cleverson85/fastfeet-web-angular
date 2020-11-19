import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Cookie } from 'ng2-cookies/ng2-cookies';

import { HandleErrorService } from './handleError.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
class ApiBase {

  private readonly API = environment.API;

  constructor(private httpClient: HttpClient,
              private handleErrorService: HandleErrorService) { }

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
                            catchError(this.handleErrorService.handleError<T[]>(`GET ${route}`))
                          );
  }

  getById<T>(route: string): Observable<T> {
    return this.httpClient.get<T>(this.API + route, this.httpOptions)
                          .pipe(
                            retry(3),
                            catchError(this.handleErrorService.handleError<T>(`GET_ID ${route}`))
                          );
  }

  update<T>(Entity: T, route: string): Observable<T> {
    return this.httpClient.put<T>(this.API + route, Entity, this.httpOptions)
                          .pipe(
                            retry(3),
                            catchError(this.handleErrorService.handleError<T>(`UPDATE ${route}`, Entity))
                          );
  }

  save<T>(Entity: T, route: string): Observable<T> {
    return this.httpClient.post<T>(this.API + route, Entity, this.httpOptions)
                          .pipe(
                            retry(3),
                            catchError(this.handleErrorService.handleError<T>(`SAVE ${route}`, Entity))
                          );
  }

  delete<T>(id: number, route: string): Observable<T> {
    return this.httpClient.delete<T>(this.API + route, this.httpOptions)
                          .pipe(
                            retry(3),
                            catchError(this.handleErrorService.handleError<T>(`DELETE ${route}`))
                          );
  }
}

export default ApiBase;
