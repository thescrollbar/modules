import { Route } from '@angular/router';

import { ScrlAuthLoginPage } from './pages/auth.login/auth.login.page';

export const AUTH_ROUTES_IDENTS = {
  root: '[Scrollbar/auth] Login'
};

export const ROUTES: Route[] = [
  {
    path: 'login',
    component: ScrlAuthLoginPage,
    data: {
      ident: AUTH_ROUTES_IDENTS.root
    }
  }
];
