/*
 * Angular Imports
 */
import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide} from '@angular/core';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

/*
 * Components
 */
import {APP_ROUTER_PROVIDER} from './app.routes';
import {AppComponent} from './app.component';

/*
 * Bootstrap out application
 */
bootstrap(AppComponent, [
    APP_ROUTER_PROVIDER,
    disableDeprecatedForms(),
    provideForms()
]);
