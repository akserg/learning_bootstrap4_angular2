/*
 * Components
 */
import {Component} from '@angular/core';

export class NavItem {
  // Navigation link
  href: string;
  // aAvigation Label
  label: string;
  // Status of Navigation Item
  active: boolean;
}

@Component({
  selector: 'db-navbar',
  templateUrl: 'app/shared/navbar/navbar.component.html'
})
export class NavbarComponent {
  // App name
  appName: string = 'Dream Bean';

  // Navgation items
  navItems: NavItem[] = [
    {href: '#', label: 'Home', active: true},
    {href: '#', label: 'Checkout', active: false},
    {href: '#', label: 'Create Account', active: false},
    {href: '#', label: 'Login', active: false}
  ];
}

