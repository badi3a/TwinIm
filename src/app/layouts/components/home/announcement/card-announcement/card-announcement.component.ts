import { Component , Input } from '@angular/core';
import { Announcement } from 'src/app/core/models/announcement';

@Component({
  selector: 'app-card-announcement',
  templateUrl: './card-announcement.component.html',
  styleUrls: ['./card-announcement.component.css']
})
export class CardAnnouncementComponent {

  @Input() announcement: Announcement;

}
