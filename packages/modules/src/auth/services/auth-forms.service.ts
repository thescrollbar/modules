import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

export class LoginForm {
  instance = new FormGroup({
    mail: new FormControl('', [ Validators.required ]),
    password: new FormControl('', [ Validators.required ])
  });
}
