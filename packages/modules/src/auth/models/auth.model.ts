export class AuthState {
  data: AuthData;
  authenticated: boolean;

  constructor() {
    this.data = new AuthData();
    this.authenticated = false;
  }
}

export class AuthData {
  name: string;
  surname: string;
  mail: string;

  constructor() {
    this.name = undefined;
    this.surname = undefined;
    this.mail = undefined;
  }
}

export class LoginRequestData {
  mail: string;
  password: string;
}

export class LoginResponseData {
  token: string;
}
