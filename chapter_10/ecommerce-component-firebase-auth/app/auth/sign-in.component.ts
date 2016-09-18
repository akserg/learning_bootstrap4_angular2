/*
 * Angular Imports
 */
import {Component} from '@angular/core';
import {Router} from '@angular/router';

/*
 * Components
 */
import {AuthService} from './auth.service';

@Component({
    selector: 'db-signin',
    //templateUrl: 'app/auth/sign-in.component.html'
    template: `Hello`
})
export class SignInComponent {
    model: any = {};
    loading = false;
    error = '';

    constructor(private auth: AuthService, private router: Router) { }

    signIn(): void {
        this.loading = true;
        this.auth.signIn(this.model.email, this.model.password)
            .then(() => this.postSignIn())
            .catch((error) => {
                this.error = 'Username or password is incorrect';
                this.loading = false;
            });
    }

    private postSignIn(): void {
        this.router.navigate(['/welcome']);
    }
}
