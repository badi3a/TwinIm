import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnnouncementService } from '../services/announcement.service';
import { Announcement } from '../../../core/models/announcement';

@Component({
  selector: 'app-announcement-search',
  templateUrl: './announcement-search.component.html',
  styleUrls: ['./announcement-search.component.css']
})
export class AnnouncementSearchComponent implements OnInit {
  searchQuery: string = '';
  searchResults: Announcement[] = [];
  filteredResults: Announcement[] = [];
  page: number = 1;

  filters = {
    minPrice: null as number | null,
    maxPrice: null as number | null,
    roomsNumber: '',
    category: '',
    status: ''
  };

  constructor(
    private route: ActivatedRoute,
    private announcementService: AnnouncementService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['query'];
      if (this.searchQuery) {
        this.performSearch();
      }
    });
  }

  private performSearch() {
    this.announcementService.searchAnnouncements(this.searchQuery)
      .subscribe(results => {
        this.searchResults = results;
        this.applyFilters();
      });
  }

  applyFilters() {
    this.filteredResults = this.searchResults.filter(announcement => {
      let matches = true;

      if (this.filters.minPrice) {
        matches = matches && announcement.price >= this.filters.minPrice;
      }
      if (this.filters.maxPrice) {
        matches = matches && announcement.price <= this.filters.maxPrice;
      }
      if (this.filters.roomsNumber) {
        matches = matches && announcement.roomsNumber === parseInt(this.filters.roomsNumber);
      }
      if (this.filters.category) {
        matches = matches && announcement.category.toLowerCase() === this.filters.category.toLowerCase();
      }
      if (this.filters.status) {
        matches = matches && announcement.status.toLowerCase() === this.filters.status.toLowerCase();
      }

      return matches;
    });
  }

  addLike(announcement: any): void {
    if (announcement) {
      announcement.isLiked = !announcement.isLiked;
      announcement.nbrLike += announcement.isLiked ? 1 : -1;

      this.announcementService.updateAnnouncement(announcement.id, announcement)
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
}
