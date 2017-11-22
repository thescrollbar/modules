import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { LoginForm } from '../../services/auth-forms.service';
import { LoginRequestData } from '../../models/auth.model';

@Component({
  selector: 'scrl-login-form-component',
  templateUrl: './login-form.component.html'
})
export class ScrlLoginFormComponent {
  @Input()
  form: LoginForm;

  @Output()
  login = new EventEmitter<LoginRequestData>(false);

  onLogin() {
    if (this.form.instance.valid) {
      this.login.emit(this.form.instance.value);
    }
  }
}
