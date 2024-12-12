import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from '../services/authentification-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthentificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  login(d: any): void {
    this.authService.signin(d).subscribe(
      (response: any) => {
       
        if (response && response.user && response.user.id) {
          
          localStorage.setItem('access_token', response.accessToken);
          localStorage.setItem('role', response.user.role);

          if (response.user.role === 'Admin') {
            this.router.navigate(['/user/dashboard']);
          } else if (response.user.role === 'userSimple') {
            this.router.navigate([`/user/profile/${response.user.id}`]);
          } 
        } 
      }
    );
  }
  
  
  
}
