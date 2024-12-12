import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layouts/home/home.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NotFoundComponent } from './layouts/not-found/not-found.component';
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "./shared/shared.module";
import { AnnouncementService } from './features/announcement/services/announcement.service';
import { AnnouncementModule } from "./features/announcement/announcement.module";
import { RouterModule } from '@angular/router';
import { AdminComponent } from './features/admin/admin.component';
import { ClientComponent } from './features/client/client.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    AdminComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    AnnouncementModule,
    RouterModule
  ],
  providers: [AnnouncementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
