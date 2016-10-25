/*
 * Angular Imports
 */
import { enableProdMode } from "@angular/core";
import { platformBrowser } from '@angular/platform-browser';

/*
 * The app module
 */
import { AppModuleNgFactory } from "./app/app.module.ngfactory";

/**
 * Import styles
 */
import "./assets/ecommerce.scss";

if (process.env.NODE_ENV === "production") {
  enableProdMode();
}

/*
 * Bootstrap out application
 */
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);