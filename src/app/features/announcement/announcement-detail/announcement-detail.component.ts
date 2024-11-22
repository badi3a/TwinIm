import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnnouncementService } from '../services/announcement.service'; // Adjust the path if necessary
import { Announcement } from '../../../core/models/announcement'; // Adjust the path as needed
import { Location } from '@angular/common';

@Component({
  selector: 'app-announcement-detail',
  templateUrl: './announcement-detail.component.html',
  styleUrls: ['./announcement-detail.component.css']
})
export class AnnouncementDetailComponent implements OnInit {
  announcement: Announcement | null = null;

  constructor(
    private route: ActivatedRoute,
    private announcementService: AnnouncementService,
    private location: Location // Inject Location service here
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.announcementService.getAnnouncementById(Number(id)).subscribe(
        (data: Announcement) => {
          this.announcement = data;
        },
        (error) => {
          console.error('Error fetching announcement:', error);
        }
      );
    }
  }

  toggleLike(): void {
    if (this.announcement) {
      // Toggle like status
      this.announcement.isLiked = !this.announcement.isLiked;

      // Update likes count
      this.announcement.nbrLike += this.announcement.isLiked ? 1 : -1;

      // Update in database
      this.announcementService.updateAnnouncement(this.announcement.id, this.announcement)
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

  deleteAnnouncement(): void {
    if (this.announcement) {
      this.announcementService.deleteAnnouncement(this.announcement.id).subscribe(
        () => {
          console.log('Announcement deleted successfully');
          this.location.back(); 
        },
        (error) => {
          console.error('Error deleting announcement:', error);
        }
      );
    }
  }
}
