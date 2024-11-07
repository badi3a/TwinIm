import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnouncementRoutingModule } from './announcement-routing.module';
import { AnnouncementComponent } from './announcement.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AnnouncementComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    AnnouncementRoutingModule,
    FormsModule
  ]
})
export class AnnouncementModule { }
