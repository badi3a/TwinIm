import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Announcement } from 'src/app/core/models/announcement';

@Component({
  selector: 'app-card-announcement',
  templateUrl: './card-announcement.component.html',
  styleUrls: ['./card-announcement.component.css']
})
export class CardAnnouncementComponent {
  @Input() announcement: Announcement;
  @Output() likeClicked = new EventEmitter<Announcement>();

  onLikeClick(): void {
    this.likeClicked.emit(this.announcement);
  }
}
