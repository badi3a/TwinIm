import { Router } from '@angular/router';
import { AnnoucementService } from './../services/annoucement.service';
import {Component, OnInit} from '@angular/core';
import {Announcement} from "../../../core/models/announcement";

import {Router} from "@angular/router";
import {AnnouncementService} from "../services/announcement.service";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
   announcement:Announcement;
   constructor(private AnnoucementService: AnnoucementService , private Router:Router ) { }

   ngOnInit() {
     this.announcement = new Announcement();
   }
  save(){
     this.announcementService.addAnnouncement(this.announcement).subscribe(
       ()=>{
         this.router.navigateByUrl("announcement/list");
       }
     )
     //insert object into list
    //this.announcementService.list.push(this.announcement);
    //console.log(this.announcementService.list)
    this.AnnoucementService.addannouncement(this.announcement).subscribe(
        () : void =>{
          this.Router.navigateByUrl("/announcement/list");
        }
    )
   }
}
