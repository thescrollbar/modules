import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ScrlAuthLoginPage } from './pages/auth.login/auth.login.page';
import { authReducer } from './reducers/auth.reducer';
import { ROUTES } from './auth.routes';
import { ScrlAuthEffects } from './effects/auth.effects';
import { AuthApiService } from './services/auth-api.service';
import { ScrlLoginFormModule } from './components/login-form/login-form.module';

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),

    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([
      ScrlAuthEffects
    ]),

    CommonModule,
    ScrlLoginFormModule
  ],
  declarations: [
    ScrlAuthLoginPage
  ],
  providers: [ AuthApiService ]
})
export class ScrlAuthModule { }
