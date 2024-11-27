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
import { AnnouncementDetailComponent } from './announcement-detail/announcement-detail.component';
import { AnnouncementSearchComponent } from './announcement-search/announcement-search.component';
import { CardAnnouncementComponent } from './card-announcement/card-announcement.component';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    AnnouncementComponent,
    FormComponent,
    ListeComponent,
    AnnouncementDetailComponent,
    AnnouncementSearchComponent,
    CardAnnouncementComponent
  ],
  imports: [
    CommonModule,
    AnnouncementRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    NgxPaginationModule
  ]
  ,
  providers:[AnnouncementService]

})
export class AnnouncementModule { }
