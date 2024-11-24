import { ActivatedRoute, Router } from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {AnnouncementService} from "../services/announcement.service";
import {Announcement} from "../../../core/models/announcement";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
   announcement:Announcement;
   imagePreview: string | ArrayBuffer | null = null;
   isEditMode: boolean = false;
   constructor(private announcementService: AnnouncementService , private router:Router ,  private route: ActivatedRoute) { }
  
   
   
   ngOnInit() {
     this.announcement = new Announcement();
     const id = this.route.snapshot.paramMap.get('id'); // Check 'id' 
     if (id) {
       this.isEditMode = true; 
       this.loadAnnouncement(id);
     }
   }
   loadAnnouncement(id: string) {
    this.announcementService.getAnnouncementbyID(id).subscribe((data: Announcement) => {
      this.announcement = data;
      this.imagePreview = this.announcement.picture; // get current image
    });
  }
  save() {
    this.announcement.datePublication=new Date();
    if (this.isEditMode) {
      // Update announcement
      this.announcementService.updateAnnouncement(this.announcement.id, this.announcement).subscribe(() => {
        this.router.navigateByUrl("announcement/list");
      });
    } else {
      // Add new announcement
      this.savePicture();
      this.announcementService.addAnnouncement(this.announcement).subscribe(() => {
        this.router.navigateByUrl("announcement/list");
      });
    }
  }

  onImageSelect(event: any) {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreview = e.target.result; // Set the preview to the reader result (image file)
        this.announcement.picture = this.imagePreview as string; // Assign the preview to the announcement object
      };
      reader.readAsDataURL(file); // Read the image file as a data URL
    }
  }

  savePicture()
  {
   
  }
}
