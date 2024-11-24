
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
  this.announcementService.updateAnnouncement(a.id, a)
  .subscribe(
    (updatedAnnouncement) => {
      console.log('Announcement updated successfully:', updatedAnnouncement);
    },
    (error) => {
      console.error('Error updating announcement:', error);
    }
  );
}
}
// addLike(announcement: any): void {

//     announcement.isLiked = !announcement.isLiked;

//     // Update likes count
//     announcement.nbrLike += announcement.isLiked ? 1 : -1;

//     // Update in database
//     this.announcementService.updateAnnouncement(announcement.id, announcement)
//       .subscribe(
//         (updatedAnnouncement) => {
//           console.log('Announcement updated successfully:', updatedAnnouncement);
//         },
//         (error) => {
//           console.error('Error updating announcement:', error);
//         }
//       );
//   }
// }





