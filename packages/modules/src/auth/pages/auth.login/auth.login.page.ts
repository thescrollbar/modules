import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import * as Auth from '../../actions/auth.actions';
import { selectData, selectAuthenticationState } from '../../selectors/auth.selector';
import { AuthState, AuthData, LoginRequestData } from '../../models/auth.model';
import { LoginForm } from '../../services/auth-forms.service';

@Component({
  selector: 'scrl-auth-login-page',
  templateUrl: './auth.login.page.html'
})
export class ScrlAuthLoginPage {
  form = new LoginForm();
  authData$ = this._store.select(selectData);
  isAuthenticated$ = this._store.select(selectAuthenticationState);

  constructor(private _store: Store<any>) { }

  login(data: LoginRequestData) {
    this._store.dispatch(new Auth.LoginRequest(data));
  }
}
