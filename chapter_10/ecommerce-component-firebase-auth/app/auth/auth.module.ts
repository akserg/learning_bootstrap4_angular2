import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {SignInComponent} from './sign-in.component';
import {AuthGuard} from './auth-guard.service';
import {AuthService} from './auth.service';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
    declarations: [SignInComponent],
    exports: [SignInComponent, AuthGuard, AuthService],
    providers: [AuthService, AuthGuard]
})
export class AuthModule {}