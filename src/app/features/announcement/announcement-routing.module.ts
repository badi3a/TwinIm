import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementComponent } from './announcement.component';
import { FormComponent } from './form/form.component';
import { ListeComponent } from './liste/liste.component';
import { AnnouncementDetailComponent } from './announcement-detail/announcement-detail.component'; // Add this import

const routes: Routes = [
  { path: '', component: AnnouncementComponent },
  { path: 'new', component: FormComponent },
  { path: 'list', component: ListeComponent },
  { path: 'details/:id', component: AnnouncementDetailComponent }  // Add this line for the details route
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnouncementRoutingModule { }
