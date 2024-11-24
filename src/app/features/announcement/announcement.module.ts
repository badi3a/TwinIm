import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementRoutingModule } from './announcement-routing.module';
import { AnnouncementComponent } from './announcement.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { ListeComponent } from './liste/liste.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {AnnouncementService} from "./services/announcement.service";
import { DetailsComponent } from './details/details.component';
@NgModule({
  declarations: [
    AnnouncementComponent,
    FormComponent,
    ListeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    AnnouncementRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule  // Import the HTTP client module une atre fois dans cette classe
  ]
  ,
  providers:[AnnouncementService]

})
export class AnnouncementModule { }
