import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementComponent } from './announcement.component';
import {FormComponent} from "./form/form.component";

import { ListeComponent } from './liste/liste.component';
import { DetailAnnouncementComponent } from './detail-announcement/detail-announcement.component';


const routes: Routes = [
  { path: '', component: AnnouncementComponent },
  {path:'new', component:FormComponent},

  {path: 'list', component:ListeComponent},
  {path: 'detail/:id', component:DetailAnnouncementComponent},
  { path: 'edit/:id', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  
})
export class AnnouncementRoutingModule { }
