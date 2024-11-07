import {Component, OnInit} from '@angular/core';
import {Announcement} from "../../../core/models/announcement";
import {AnnouncementService} from "../../../shared/services/announcement.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
   announcement:Announcement;
   constructor(private announcementService: AnnouncementService) { }
   ngOnInit() {
     this.announcement = new Announcement();
   }
  save(){
     //insert object into list
    this.announcementService.list.push(this.announcement);
    console.log(this.announcementService.list)

   }
}
