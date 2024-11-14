import {Component, OnInit} from '@angular/core';
import {Announcement} from "../../../core/models/announcement";
import {AnnouncementService} from "../services/announcement.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
    list:Announcement[];
    constructor(private announcementService: AnnouncementService) {
    }
    ngOnInit() {
    this.announcementService.getAllAnnouncements().subscribe(
      (data:Announcement[])=>{
        this.list=data;
        console.log('response received')
        console.log(this.list)
        },
    )

    }
}
