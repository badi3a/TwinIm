import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./services/user.service";

import { UpdateProfileComponent } from './update-profile/update-profile.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    UserComponent,
    RegisterComponent,
    LoginComponent,
    UpdateProfileComponent, 
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule     
  ],
  providers: [UserService]
})
export class UserModule { }
