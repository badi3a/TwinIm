import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../../../core/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.userService.login(email, password).subscribe({
        next: (users: User[]) => {
          if (users && users.length > 0) {
            const user = users[0];
            localStorage.setItem('currentUser', JSON.stringify(user));
            if (user.role === 'admin') {
              this.router.navigate(['/admin']);
              console.log('Redirecting to admin');
            } else {
              this.router.navigate(['/client']);
            }
          } else {
            console.error('Invalid credentials');
          }
        },
        error: (error) => {
          console.error('Login failed', error);
        }
      });
    }
  }
}
