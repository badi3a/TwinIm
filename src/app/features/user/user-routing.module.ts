import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import {RegisterComponent} from "./register/register.component";
import { LoginComponent } from './login/login.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';


const routes: Routes = [
  { path: '', component: UserComponent },
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  { path: 'update/:id', component: UpdateProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
