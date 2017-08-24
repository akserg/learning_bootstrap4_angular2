/*
 * Angular Imports
 */
import { Injectable } from "@angular/core";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
    user: firebase.User;

    constructor(public auth$: AngularFireAuth) {
        this.auth$.authState.subscribe((user: firebase.User) => {
            this.user = user;
        });
    }

    get authenticated(): boolean {
        return this.auth$.auth.currentUser !== null;
    }

    get uid(): string {
        return this.authenticated ? this.user.uid : "";
    }

    signIn(email: string, password: string): firebase.Promise<any> {
        return this.auth$.auth.signInWithEmailAndPassword(email, password);
    }

    signOut(): void {
        this.auth$.auth.signOut();
    }
}
