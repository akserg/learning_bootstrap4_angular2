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
    {href: 'welcome', label: 'Home', active: true},
    {href: 'products', label: 'Products', active: false, queryParams: { category: 1 }},
    {href: 'checkout', label: 'Checkout', active: false},
  ];
 
  constructor(public authService: AuthService, private router: Router) { }

  logout() {
    this.authService.signOut();
    this.router.navigateByUrl("/login");
  }
}

