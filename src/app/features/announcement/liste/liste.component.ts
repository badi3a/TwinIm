
import { Component, OnInit } from '@angular/core';
import { Announcement } from 'src/app/core/models/announcement';
import {AnnouncementService} from "../services/announcement.service";
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  list: Announcement[];
  constructor (private route: ActivatedRoute
    ,  private notificationService: NotificationService
    ,private announcementService:AnnouncementService){}
  successMessage: string | null = null;


  listWithDropdown: Array<{ announcement: Announcement, showDropdown: boolean }> = [];
  deleteAnnouncement(id: number): void {
    this.announcementService.deletAnnoucement(id).subscribe(
      () => {
        console.log('Annonce supprimée avec succès');
        // Set the success message using the notification service
        this.notificationService.setSuccessMessage('Annonce supprimée avec succès');
        // Remove the deleted announcement from the list
        this.listWithDropdown = this.listWithDropdown.filter(a => a.announcement.id !== id);
      },
      (error) => {
        console.error('Erreur lors de la suppression de l\'annonce :', error);
      }
    );
  }

  // Confirm deletion before calling deleteAnnouncement
 confirmDelete(announcementId: number): void {
    const confirmed = window.confirm('Êtes-vous sûr de vouloir supprimer ?');
    if (confirmed) {
      this.deleteAnnouncement(announcementId);
    }
  }


ngOnInit(): void {

//dropdown 
this.announcementService.getAllAnnouncements().subscribe(
  (data: Announcement[]) => {
    this.listWithDropdown = data.map(announcement => ({
      announcement,          // Store the original announcement
      showDropdown: false    // Initialize showDropdown as false
    }));
    console.log(this.listWithDropdown);
  }
);









//handling success message methode classique
this.route.queryParams.subscribe((params) => {
  this.successMessage = params['message'] || null;
  if (this.successMessage) {
    setTimeout(() => {
      this.successMessage = null;  // Clear the success message after 2 seconds
    }, 2000);   
  }
});

// methode plus optimisé !!
this.notificationService.successMessage$.subscribe((message) => {
  this.successMessage = message;
  if (this.successMessage) {
    setTimeout(() => {
      this.successMessage = null;  // Clear message after 2 seconds
    }, 2000);
  }
});




this.announcementService.getAllAnnouncements().subscribe(
  (data: Announcement[]) => {
    this.listWithDropdown = data.map(announcement => ({
      announcement,          // Store the original announcement
      showDropdown: false    // Initialize showDropdown as false
    }));
    console.log(this.listWithDropdown);
  }
);

////////////////////////////////////
 

}
////////////////////////////////////******************************************************/////////////////////////////
addLike(a: Announcement): void {
  // Basculer l'état de "like"
  a.isLiked = !a.isLiked;

  // Mettre à jour le nombre de likes
  if (a.isLiked) {
    a.nbrLike += 1;
  } else {
    a.nbrLike -= 1;
  }

  // Mettre à jour l'annonce côté serveur
  this.updateAnnouncement(a.id, a);
}

// Mettre à jour une annonce sur le serveur
updateAnnouncement(id: any, announcement: Announcement): void {
  this.announcementService.updateAnnouncement(id, announcement).subscribe(
    () => {
      console.log('Annonce mise à jour avec succès:', announcement);
    },
    (error) => {
      console.error('Erreur lors de la mise à jour de l\'annonce :', error);
      alert('Une erreur est survenue lors de la mise à jour.');
    }
  );
}




}
