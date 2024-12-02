import { NgModule } from '@angular/core';

import { UserComponent } from './user.component';
import {RegisterComponent} from "./register/register.component";
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: UserComponent },
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'profile/:id', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
