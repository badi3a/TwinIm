import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/services/user.service';
import { User } from '../../core/models/User';
import { AnnouncementService } from '../announcement/services/announcement.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  currentUser: User | null = null;
  totalUsers: number = 0;
  availableAnnouncements: number = 0;

  constructor(
    private userService: UserService,
    private announcementService: AnnouncementService
  ) {}

  ngOnInit() {
    const userStr = localStorage.getItem('currentUser');
    if (userStr) {
      this.currentUser = JSON.parse(userStr);
    }
    this.loadStats();
  }

  loadStats() {
    this.userService.getAllUsers().subscribe({
      next: (users: User[]) => {
        this.totalUsers = users.length;
      },
      error: (err) => console.error('Error loading users:', err)
    });

    this.announcementService.getAllAnnouncements().subscribe({
      next: (announcements) => {
        this.availableAnnouncements = announcements.filter(a => a.status === 'available').length;
      },
      error: (err) => console.error('Error loading announcements:', err)
    });
  }
}
