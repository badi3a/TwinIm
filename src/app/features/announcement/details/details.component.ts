import { AnnouncementService } from './../services/announcement.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Announcement } from 'src/app/core/models/announcement';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit{

  announcement : Announcement;
  
  constructor(private activatedRoute: ActivatedRoute 
    , private announcementService: AnnouncementService , private router: Router) {
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
      if (confirm('supprimer cette annonce ?')) {
        this.announcementService.deletAnnoucement(id).subscribe(
          () => {
            console.log('Annonce supprimée avec succès');
            this.router.navigate(['/list']);  // Utilisation du Router pour la redirection
          },
          (error) => {
            console.error('Erreur lors de la suppression de l\'annonce :', error);
          }
        );
      }

    }
   
     


}