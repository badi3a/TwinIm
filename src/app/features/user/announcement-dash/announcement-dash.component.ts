import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-announcement-dash',
  templateUrl: './announcement-dash.component.html',
  styleUrls: ['./announcement-dash.component.css']
})
export class AnnouncementDashComponent implements OnInit {
  constructor(private service:UserService){}
  totalAnnouncements:number=0;
  ngOnInit(): void {
    this.service.getAnnouncements().subscribe({
      next: (announcements) => {
        // Filter only available announcements
        const availableAnnouncements = announcements.filter(
          (announcement) => announcement.status === 'available'
        );
        this.totalAnnouncements = availableAnnouncements.length;
      },
      error: (err) => console.error('Error fetching announcements', err),
    });
  }

}
