import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementComponent } from './announcement.component';
import {FormComponent} from "./form/form.component";

const routes: Routes = [
  { path: '', component: AnnouncementComponent },
  {path:'new', component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnouncementRoutingModule { }
