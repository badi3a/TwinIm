import { Router } from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {AnnouncementService} from "../services/announcement.service";
import {Announcement} from "../../../core/models/announcement";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
   announcement:Announcement;
   constructor(private announcementService: AnnouncementService , private router:Router ) { }

   ngOnInit() {
     this.announcement = new Announcement();
   }
  save() {
    this.announcementService.addAnnouncement(this.announcement).subscribe(
      () => {
        this.router.navigateByUrl("announcement/list");
      }
    )
  }
}
