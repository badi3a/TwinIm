import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthentificationService } from 'src/app/core/services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = "";
  password: string= "";

  constructor(private authService: AuthentificationService,private router:Router){
  }
  login(): void {
  this.authService.login({"email": this.email, "password": this.password}).subscribe(
  (response) => {
  // Stockez le jeton JWT dans le stockage local
  localStorage.setItem('access_token', response.accessToken);
   localStorage.setItem('role', response.user.role);
   console.log(response);
   if(response.user.role =="ROLE_ADMIN"){
    console.log(response);
    this.router.navigateByUrl('user/dashboard');
   }
   else{
    this.router.navigateByUrl(`user/profile/${response.user.id}`);
   }
  
  }
  )

}}
