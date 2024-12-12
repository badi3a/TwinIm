import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const data = this.loginForm.value;

    this.login(data);
  }

  login(d: any): void {
    this.userService.login(d).subscribe(
      (response) => {
        localStorage.setItem('access_token', response.accessToken);
        localStorage.setItem('role', response.user.role);

        if (response.user.role === 'ROLE_ADMIN') {
          this.router.navigateByUrl('user/dashboard');  
        }
        if (response.user.role === 'userSimple') {
          this.router.navigateByUrl('user/profile');  
        } 
      },
      (error) => {
        this.errorMessage = 'Invalid email or password.';
      }
    );
   
  }
}
