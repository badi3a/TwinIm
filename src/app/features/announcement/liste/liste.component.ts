import { Component, OnInit } from '@angular/core';
import { Announcement } from 'src/app/core/models/announcement';
import { AnnouncementService } from "../services/announcement.service";

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  list: Announcement[] = []; // Initialize with empty array

  // New properties for deletion
  showDeleteModal = false;
  announcementToDelete: Announcement | null = null;

  constructor(private announcementService: AnnouncementService) {}

  ngOnInit(): void {
    this.loadAnnouncements();
  }

  loadAnnouncements(): void {
    this.announcementService.getAllAnnouncements().subscribe({
      next: (data: Announcement[]) => {
        this.list = data;
        console.log(this.list);
      },
      error: (error: Error) => {
        console.error('Error loading announcements:', error);
      }
    });
  }

  // Method to open delete confirmation modal
  confirmDelete(announcement: Announcement): void {
    this.announcementToDelete = announcement;
    this.showDeleteModal = true;
  }

  // Method to cancel deletion
  cancelDelete(): void {
    this.showDeleteModal = false;
    this.announcementToDelete = null;
  }

  // Method to perform deletion
  deleteAnnouncement(): void {
    if (this.announcementToDelete && this.announcementToDelete.id) {
      this.announcementService.deleteAnnouncement(this.announcementToDelete.id).subscribe({
        next: () => {
          // Remove the announcement from the list
          this.list = this.list.filter(a => a.id !== this.announcementToDelete?.id);

          // Close the modal
          this.showDeleteModal = false;
          this.announcementToDelete = null;

          // Optional: Show a success message
          console.log('Announcement deleted successfully');
        },
        error: (error: Error) => {
          console.error('Error deleting announcement:', error);
          // Optional: Show an error message to the user
          alert('Failed to delete the announcement');
        }
      });
    }
  }

  // Existing like methods remain the same
  addLike(a: Announcement): void {
    a.isLiked = !a.isLiked;
    a.nbrLike += a.isLiked ? 1 : -1;
    this.updateAnnouncement(a.id, a);
  }

  updateAnnouncement(id: number | string, announcement: Announcement): void {
    this.announcementService.updateAnnouncement(id, announcement).subscribe({
      next: () => {
        console.log('Announcement updated successfully:', announcement);
      },
      error: (error: Error) => {
        console.error('Error updating announcement:', error);
        alert('An error occurred while updating the announcement');
      }
    });
  }
}
