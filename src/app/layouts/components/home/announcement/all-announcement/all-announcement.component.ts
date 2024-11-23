import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from 'src/app/features/announcement/services/announcement.service';
import { Announcement } from 'src/app/core/models/announcement';

@Component({
  selector: 'app-all-announcement',
  templateUrl: './all-announcement.component.html',
  styleUrls: ['./all-announcement.component.css']
})
export class AllAnnouncementComponent implements OnInit {

  list: Announcement[] = [];
  originalList: Announcement[] = [];
  nbRooms: number = 0;
  searchQuery: string = '';
  isAvailable: boolean = false;

  constructor(private announcementService: AnnouncementService) {}

  ngOnInit() {
    this.announcementService.getAllAnnouncements().subscribe(
      (data: Announcement[]) => {
        this.list = data;
        this.originalList = [...data];
        this.nbRooms = this.list.length;
      }
    );
  }

  search() {
    const query = this.searchQuery.toLowerCase().trim();

    this.list = this.originalList.filter((announcement) =>
      (query ?
        announcement.title.toLowerCase().includes(query) ||
        announcement.category.toLowerCase().includes(query) ||
        announcement.address.toLowerCase().includes(query)
        : true) &&
      (this.isAvailable ? announcement.status === 'disponible' : true)
    );

    this.nbRooms = this.list.length;
  }

  sortByPrice(order: string) {
    if (order) {
      this.list = this.list.sort((a, b) => {
        return order === 'asc' ? a.price - b.price : b.price - a.price;
      });
    }
  }

  resetSearch() {
    this.searchQuery = '';
    this.isAvailable = false;
    this.list = [...this.originalList];
    this.nbRooms = this.list.length;
  }
}
