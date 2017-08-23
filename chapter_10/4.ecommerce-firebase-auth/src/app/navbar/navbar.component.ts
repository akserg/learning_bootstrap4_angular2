/*
 * Angular Imports
 */
import { Component } from "@angular/core";
import { Router } from "@angular/router";
/*
 * Components
 */
import { AuthService } from "../auth/auth.service";

export interface NavItem {
  // Navigation link
  href: string;
  // Navigation Label
  label: string;
  // Status of Navigation Item
  active: boolean;
  // queryParams
  queryParams?: any;
  //
  fun?: Function;
}

@Component({
  selector: 'db-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent { 
  // App name
  appName: string = 'Dream Bean';
  // Navgation items
  navItems: NavItem[] = [
    {href: 'welcome', label: 'Home', active: true, fun: this.noop},
    {href: 'products', label: 'Products', active: false, queryParams: { category: 1 }, fun: this.noop},
    {href: 'checkout', label: 'Checkout', active: false, fun: this.noop},
    {href: '', label: 'Sign out', active: false, fun: this.logout}
  ];
 
  get self() { return this; }

  constructor(private authService: AuthService, private router: Router) { }

  noop() { }
  
  logout() {
    this.authService.signOut();
    this.router.navigateByUrl("/login");
  }
}

