import { Component , OnInit } from '@angular/core';
import { AnnouncementService } from 'src/app/features/announcement/services/announcement.service';
import { Announcement } from 'src/app/core/models/announcement';

@Component({
  selector: 'app-all-announcement',
  templateUrl: './all-announcement.component.html',
  styleUrls: ['./all-announcement.component.css']
})
export class AllAnnouncementComponent implements OnInit {

  list: Announcement[];
  nbRooms : number = 0 ;
  constructor (private announcementService:AnnouncementService){}

  ngOnInit(): void {
    this.announcementService.getAllAnnouncements().subscribe(
      (data:Announcement[]) : void =>{this.list=data;
       this.nbRooms = this.list.length;
      },
    )
  }


}
