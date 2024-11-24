import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnouncementService } from '../services/announcement.service';
import { Announcement } from 'src/app/core/models/announcement';

@Component({
  selector: 'app-detail-announcement',
  templateUrl: './detail-announcement.component.html',
  styleUrls: ['./detail-announcement.component.css']
})
export class DetailAnnouncementComponent implements OnInit {
  announcement: Announcement;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private announcementService: AnnouncementService
  ) {}

  ngOnInit(): void {
    // Récupération de l'ID depuis l'URL
    const id: number = Number(this.route.snapshot.params['id']);
    this.announcementService.getAnnouncementbyID(id).subscribe(
      (data: Announcement) => {
        this.announcement = data;
      },
      (err: any) => {
        console.error('Erreur lors de la récupération de l’annonce :', err);
      }
    );
  }

  deleteAnnouncement(): void {
       this.announcementService.deleteAnnouncement(this.announcement.id).subscribe(
        () => {
          alert('Annonce supprimée avec succès.');
          this.router.navigate(['/announcement/list']); 
        },
        (err: any) => {
          console.error('Erreur lors de la suppression :', err);
          
        }
      );
    
  }
  updateAnnouncement(): void {
    this.router.navigate(['/announcement/edit', this.announcement.id]); //redirect to form with id
    console.log(this.announcement.id)
  }
}
