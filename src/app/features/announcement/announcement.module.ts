import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnouncementRoutingModule } from './announcement-routing.module';
import { AnnouncementComponent } from './announcement.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from "@angular/forms";
import {AnnouncementService} from "./services/announcement.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AnnouncementComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    AnnouncementRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[AnnouncementService]
})
export class AnnouncementModule { }
