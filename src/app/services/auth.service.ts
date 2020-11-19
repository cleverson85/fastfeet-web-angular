import { Injectable  } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Cookie } from 'ng2-cookies/ng2-cookies';
import { environment } from './../../environments/environment';

import ConfigService from '../config/config-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly API = environment.API;

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  setToken() {
    if (!Cookie.get('JwtToken')) {
      this.httpClient.post(`${this.API}session`, JSON.stringify(ConfigService), this.httpOptions)
        .subscribe((res: any) => {
          const { token } = res;
          Cookie.set('JwtToken', token, 7);
        });
    }
  }
}
