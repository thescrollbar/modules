import { Action } from '@ngrx/store';

import { LoginRequestData, LoginResponseData } from '../models/auth.model';

export const LOGIN_REQUEST = '[bubbles/Auth] Login Request';
export const LOGIN_LOCAL_SUCCESS = '[bubbles/Auth] Login Local Success';
export const LOGIN_FAIL = '[bubbles/Auth] Login Fail';

export class LoginRequest implements Action {
  readonly type = LOGIN_REQUEST;

  constructor(public payload: LoginRequestData) { }
}

export class LoginLocalSuccess implements Action {
  readonly type = LOGIN_LOCAL_SUCCESS;

  constructor(public payload: LoginResponseData) { }
}

export class LoginFail implements Action {
  readonly type = LOGIN_FAIL;
}

export type Actions
  = LoginRequest
  | LoginLocalSuccess
  | LoginFail;
