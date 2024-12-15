import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import {RegisterComponent} from "./register/register.component";
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoleGuardGuard } from 'src/app/role-guard.guard';
import { AuthentificationGuard } from 'src/app/authentification.guard';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate:
    [AuthentificationGuard,RoleGuardGuard]},
    { path: 'profile/:id', component: ProfileComponent, canActivate:
      [AuthentificationGuard,RoleGuardGuard]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
