import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import {RegisterComponent} from "./register/register.component";
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoleGuardGuard } from 'src/app/role-guard.guard';
import { AuthentificationGuard } from 'src/app/authentification.guard';
import { ProfileComponent } from './profile/profile.component';
import { UserDashComponent } from './user-dash/user-dash.component';
import { AnnouncementDashComponent } from './announcement-dash/announcement-dash.component';
import { ListusersComponent } from './listusers/listusers.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate:
    [AuthentificationGuard,RoleGuardGuard], children:[{path:'user-dash',component : UserDashComponent,children:[{path:'listusers',component : ListusersComponent}]},{path:'announcement-dash',component:AnnouncementDashComponent}]},
    { path: 'profile/:id', component: ProfileComponent, canActivate:
      [AuthentificationGuard,RoleGuardGuard]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
