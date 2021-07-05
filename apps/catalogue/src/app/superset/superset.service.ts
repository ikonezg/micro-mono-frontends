import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SupersetResponse } from './superset-response';

@Injectable()
export class SupersetService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  private _token: string;

  constructor(private _httpClient: HttpClient) {}

  supersetLogin(username: string, password: string) {
    return this._httpClient.post(
      ` http://10.135.11.155:8088/api/v1/security/login`,
      { provider: 'db', refresh: true, username, password }
    );
  }

  setToken(token: string) {
    this._token = token;
  }

  getToken() {
    return this._token;
  }

  getWidgetList() {
    return this._httpClient.get<SupersetResponse>(
      `http://10.135.11.155:8088/api/v1/chart/`
    );
  }
}
