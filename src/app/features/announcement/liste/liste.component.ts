
import { Component, OnInit } from '@angular/core';
import { Announcement } from 'src/app/core/models/announcement';
import {AnnouncementService} from "../services/announcement.service";

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  list: Announcement[];
  constructor (private announcementService:AnnouncementService){}

ngOnInit(): void {

  this.announcementService.getAllAnnouncements().subscribe(
    (data:Announcement[]) : void =>{this.list=data;
     console.log(this.list)

    },
  )

}

addLike(a: any): void {
  a.isLiked = !a.isLiked;
  if (a.isLiked) {
    a.nbrLike += 1;
  } else {
    a.nbrLike -= 1;
  }
}



}
