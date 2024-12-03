import { AnnouncementService } from './../services/announcement.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Announcement } from 'src/app/core/models/announcement';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit{

  announcement : Announcement;
  isEditing: boolean = false; // Pour savoir si on est en mode édition
  imagePreview: string | ArrayBuffer | null = null;

  
  constructor(private activatedRoute: ActivatedRoute 
    , private announcementService: AnnouncementService 
    , private notificationService:NotificationService ,
    public router: Router) {
  }
    
    ngOnInit() {

      let id:any=this.activatedRoute.snapshot.params['id']

      this.announcementService.getAnnoucementBYID(id).subscribe(
        (data: Announcement) => {

          this.announcement=data;
          console.log(this.announcement);
          

        }


      )
    }

    deleteAnnouncement(id: any): void {
      this.announcementService.deletAnnoucement(id).subscribe({
        next: () => {
          console.log('Annonce supprimée avec succès');
          // Pass a success message to the list page via query parameters
          this.router.navigate(['/announcement/list'], {
            queryParams: { message: 'Annonce supprimée avec succès' },
          });
        },
        error: (error) => {
          console.error('Erreur lors de la suppression de l\'annonce :', error);
        },
        complete: () => {
          console.log('Suppression terminée');
        }
      });
    }
    
   
    confirmDelete(announcementId: number): void {
      const confirmed = window.confirm('Êtes-vous sûr de vouloir supprimer ?');
      if (confirmed) {
        this.deleteAnnouncement(announcementId);
      }
    }

    toggleEdit(): void {
      this.isEditing = !this.isEditing; // Permet de passer en mode édition ou non
    }



    onImageSelect(event: any): void {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.imagePreview = e.target.result;
          this.announcement.picture = this.imagePreview as string; // Mettre à jour l'image dans l'annonce
        };
        reader.readAsDataURL(file);
      }
    }



    updateAnnouncement(): void {
      const id = this.activatedRoute.snapshot.params['id'];
      this.announcement.datePublication = new Date(); // Mettre à jour la date de publication
      this.announcementService.updateAnnouncement(id, this.announcement).subscribe(
        () => {
          this.isEditing = false; // Désactive le mode édition
          this.router.navigate(['/announcement/list']); // Redirige vers la liste des annonces
        }
      );
    }


   
   
     


}