import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ScrlLoginFormComponent } from './login-form.component';

@NgModule({
  imports: [
    ReactiveFormsModule
  ],
  declarations: [
    ScrlLoginFormComponent
  ],
  exports: [
    ScrlLoginFormComponent
  ]
})
export class ScrlLoginFormModule { }
