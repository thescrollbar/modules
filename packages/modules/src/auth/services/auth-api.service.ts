import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import {
  LoginRequestData,
  LoginResponseData
} from '../models/auth.model';

@Injectable()
export class AuthApiService {
  constructor(private _http: HttpClient) { }

  login(data: LoginRequestData) {
    return this._http.post<LoginResponseData>(
      `/api/session`,
      JSON.stringify(data)
    );
  }
}
