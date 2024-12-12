import { authentificationGuard } from './authentification.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import {RegisterComponent} from "./register/register.component";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from 'src/app/layouts/home/home.component';
import { roleGuardGuard } from './role-guard.guard';

const routes: Routes = [
  { path: '', component: UserComponent },
    { path:'home',component: HomeComponent},
  
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  { path: 'dashboard', component: HomeComponent, canActivate: [authentificationGuard, roleGuardGuard]}, 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
