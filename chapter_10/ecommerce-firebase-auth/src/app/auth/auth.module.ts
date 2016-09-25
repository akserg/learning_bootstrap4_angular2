import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './sign-in.component';
import { AuthGuard } from './auth.guard';
import { UnauthGuard } from './unauth.guard';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [CommonModule],
  providers: [
    AuthGuard,
    AuthService,
    UnauthGuard
  ]
})

export class AuthModule {}

export { AuthGuard };
export { AuthService };
export { UnauthGuard };
