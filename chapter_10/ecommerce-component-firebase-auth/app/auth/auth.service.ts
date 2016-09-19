import { Injectable } from '@angular/core';
import { AuthProviders, FirebaseAuth, FirebaseAuthState, AuthMethods } from 'angularfire2';

@Injectable()
export class AuthService {
  private authState: FirebaseAuthState = null;

  constructor(public firebaseAuth: FirebaseAuth) {
    firebaseAuth.subscribe((state: FirebaseAuthState) => {
      console.log('state', state);
      this.authState = state;
    });
    this.signOut();
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  get uid(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  signIn(email: string, password: string): firebase.Promise<FirebaseAuthState> {
    return this.firebaseAuth.login({ 
      email: email, 
      password: password 
    },{
      provider: AuthProviders.Password,
      method: AuthMethods.Password,
    });
  }

  signOut(): void {
    this.firebaseAuth.logout();
  }
}
