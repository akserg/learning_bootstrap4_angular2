import {Injectable} from '@angular/core';
import {AuthProviders, FirebaseAuth, FirebaseAuthState} from 'angularfire2';

@Injectable()
export class AuthService {
  private authState: FirebaseAuthState = null;

  constructor(public firebaseAuth: FirebaseAuth) {
    firebaseAuth.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  get uid(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  signIn(email: string, password: string): firebase.Promise<FirebaseAuthState> {
    return this.firebaseAuth.login({email: email, password: password});
  }

  signOut(): void {
    this.firebaseAuth.logout();
  }
}
