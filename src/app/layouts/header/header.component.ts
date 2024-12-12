import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  // Check if current route is client or admin page
  isAuthPage(): boolean {
    return this.router.url.includes('/client') || this.router.url.includes('/admin');
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/user/login']);
  }
}
