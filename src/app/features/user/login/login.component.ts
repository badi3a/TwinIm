import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router'; // Import correct

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";

  constructor(private authService: UserService, private router: Router) {} // Injectez correctement le Router

  login(d: any): void {
    this.authService.login({ email: this.username, password: this.password }).subscribe(
      (response) => {
        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('role', response.role);
        console.log(response);

        this.router.navigateByUrl('/home');


      }
    );
  }
}
