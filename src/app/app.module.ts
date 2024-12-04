import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layouts/home/home.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NotFoundComponent } from './layouts/not-found/not-found.component';
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "./shared/shared.module";
import { BannerComponent } from './layouts/components/home/banner/banner.component';
import { CardAnnouncementComponent } from './layouts/components/home/announcement/card-announcement/card-announcement.component';
import { AllAnnouncementComponent } from './layouts/components/home/announcement/all-announcement/all-announcement.component';
import { AnnouncementService } from './features/announcement/services/announcement.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//using this module our front App will be able to send http request
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    BannerComponent,
    CardAnnouncementComponent,
    AllAnnouncementComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule, // Import the HTTP client module
    SharedModule, BrowserAnimationsModule ,
  ],
  providers: [AnnouncementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
