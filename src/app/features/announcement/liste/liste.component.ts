
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
  paginatedList: Announcement[] = []; 
  currentPage: number = 1; 
  itemsPerPage: number = 4; 
  totalPages: number = 0; 
  pagesArray: number[] = []; 
  constructor (private announcementService:AnnouncementService){}

ngOnInit(): void {

  this.announcementService.getAllAnnouncements().subscribe(
    (data:Announcement[]) : void =>{
     this.list=data;
     console.log(this.list)
     this.calculatePagination();

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
  this.announcementService.updateLike(a,a.id).subscribe(
    (res)=>{
      console.log("post liked");
    }
  )
}
calculatePagination(): void {
  this.totalPages = Math.ceil(this.list.length / this.itemsPerPage);
  this.pagesArray = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  this.updatePaginatedItems();
}

updatePaginatedItems(): void {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  this.paginatedList = this.list.slice(startIndex, endIndex);
}

changePage(page: number): void {
  if (page >= 1 && page <= this.totalPages) {
    this.currentPage = page;
    this.updatePaginatedItems();
  }
}



}
