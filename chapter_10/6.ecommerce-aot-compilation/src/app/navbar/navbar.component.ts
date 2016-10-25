
/*
 * Angular Imports
 */
import { Component } from "@angular/core";
import { Router } from "@angular/router";
/*
 * Components
 */
import { AuthService } from "../auth/auth.service";

@Component({
  selector: "db-navbar",
  template: "./navbar.component.html"
})
export class NavbarComponent {

  constructor(private authService: AuthService, private router: Router) { }

  logout() {
    this.authService.signOut();
    this.router.navigateByUrl("/login");
  }
}

