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
  searchQuery: string ;
  surfaceQuery : number = 150 ;
  constructor (private announcementService:AnnouncementService){}

  ngOnInit(): void {
    this.announcementService.getAllAnnouncements().subscribe(
      (data:Announcement[]) : void =>{this.list=data;
       this.nbRooms = this.list.length;
      },
    )
  }
  search() {
    const query = this.searchQuery.toLowerCase().trim(); // make searchQuery lower case and use trim to remove space
    this.list = this.list.filter(announcement =>
      (announcement.title.toLowerCase().includes(query) ||  //if title contain query or not
      announcement.category.toLowerCase().includes(query) ||
      announcement.address.toLowerCase().includes(query))
    );
    this.nbRooms = this.list.length;
    console.log(this.searchQuery)
  }


  sortByPrice(order: String): void {
    if (order) {
      this.list = this.list.sort((a, b) => {
        if (order === 'asc') {
          return a.price - b.price;
        } else if (order === 'desc') {
          return b.price - a.price;
        }
        return 0;   //exit
      });
    }
  }

  searchByStatus() {

  }

  resetSearch() {

  }

}
