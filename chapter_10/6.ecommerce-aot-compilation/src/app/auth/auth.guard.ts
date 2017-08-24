/*
 * Angular Imports
 */
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import "rxjs/add/operator/take";
import "rxjs/add/operator/first";
/*
 * Components
 */
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router) { }

    canActivate(): Observable<boolean>|boolean {
        if (this.auth.authenticated) {
            return true;
        } else {
            this.router.navigateByUrl("/login");
            return false;
        }
    }
}
