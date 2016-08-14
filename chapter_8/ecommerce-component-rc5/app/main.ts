/*
 * Angular Imports
 */
// import {bootstrap} from '@angular/platform-browser-dynamic';
// import {provide} from '@angular/core';
// import {disableDeprecatedForms, provideForms} from '@angular/forms';
// The browser platform with a compiler
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

/*
 * The app module
 */
// import {APP_ROUTER_PROVIDER} from './app.routes';
import {AppModule} from './app.module';

/*
 * Bootstrap out application
 */
// bootstrap(AppComponent, [
//     APP_ROUTER_PROVIDER,
//     disableDeprecatedForms(),
//     provideForms()
// ]);

// Compile and launch the module
platformBrowserDynamic().bootstrapModule(AppModule);
