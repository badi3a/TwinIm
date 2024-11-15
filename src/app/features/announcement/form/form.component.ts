import { Router } from '@angular/router';
import { AnnoucementService } from './../services/annoucement.service';
import {Component, OnInit} from '@angular/core';
import {Announcement} from "../../../core/models/announcement";


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
