import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './sign-in.component';
import { AuthGuardService } from './auth-guard.service';
import { UnAuthGuardService } from './unauth-guard.service';
import { AuthService } from './auth.service';

export { AuthGuardService } from './auth-guard.service';
export { UnAuthGuardService } from './unauth-guard.service';
export { AuthService } from './auth.service';

// const routes: Routes = [
//     { path: '', component: SignInComponent, canActivate: [UnAuthGuardService] }
// ];
//  RouterModule.forChild(routes)
@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [SignInComponent],
    exports: [SignInComponent]
})
export class AuthModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AuthModule,
            providers: [AuthService, UnAuthGuardService, AuthGuardService]
        };
    }
}