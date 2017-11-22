import { AuthState } from '../models/auth.model';
import * as Auth from '../actions/auth.actions';
import { JwtHelper } from '../../util';

const initialState: AuthState = new AuthState();

export function authReducer(
  state = initialState,
  action: Auth.Actions
): AuthState {
  switch (action.type) {
    case Auth.LOGIN_LOCAL_SUCCESS:
      const helper = new JwtHelper();
      const decoded = helper.decodeToken(action.payload.token);

      return {
        ...state,
        authenticated: true,
        data: {
          name: decoded.name,
          surname: decoded.surname,
          mail: decoded.mail
        }
      };

    default:
      return state;
  }
}
