/*
 * Angular Imports
 */
import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

import {FirebaseAuthState} from 'angularfire2';

/*
 * Observable Imports
 */
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

/*
 * Components
 */
import {AuthService} from './auth.service';

@Injectable()
export class UnAuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate() {
    return this.auth.firebaseAuth
      .map((authState: FirebaseAuthState) => {
        console.log('authState', authState);
        return !authState;
      })
      // .do((authenticated) => {
      //   console.log('authenticated', authenticated);
      //   if (authenticated) {
      //     this.router.navigate(['/welcome']);
      //   }
      // })
      .take(1);
  }
}
