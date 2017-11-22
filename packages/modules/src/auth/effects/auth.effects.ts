import { Injectable } from '@angular/core';

import { tap, switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Actions, Effect } from '@ngrx/effects';

import * as Auth from '../actions/auth.actions';
import { AuthApiService } from '../services/auth-api.service';

@Injectable()
export class ScrlAuthEffects {

  @Effect()
  private _onLoginRequest$ = this._actions$
    .ofType<Auth.LoginRequest>(Auth.LOGIN_REQUEST)
    .pipe(
      switchMap(
        (action) => this._api
          .login(action.payload)
          .pipe(
            map((response) => new Auth.LoginLocalSuccess(response)),
            catchError(() => of(new Auth.LoginFail()))
          )
      )
    );

  constructor(
    private _actions$: Actions,
    private _api: AuthApiService
  ) {}
}
