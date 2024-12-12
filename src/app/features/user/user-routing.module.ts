import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import {RegisterComponent} from "./register/register.component";
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthentificationGuard } from 'src/app/authentification.guard';
import { roleGuardGuard } from 'src/app/role-guard.guard';
import { PROFILEComponent } from './profile/profile.component';

const routes: Routes = [
  
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
 
    {
      path: 'dashboard',
      component: DashboardComponent,
      canActivate: [AuthentificationGuard, roleGuardGuard]
    },
    {
      path: 'profile',
      component: PROFILEComponent ,
      canActivate: [AuthentificationGuard]
    },
    { path: '', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
