import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { UserService } from '../user/services/user.service';
import { AnnouncementService } from '../announcement/services/announcement.service';
import { User } from '../../core/models/User';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @ViewChild('userRoleChart') userRoleChart!: ElementRef;
  @ViewChild('announcementStatusChart') announcementStatusChart!: ElementRef;

  currentUser: User | null = null;
  totalUsers: number = 0;
  userRoleData: {admin: number, client: number} = {admin: 0, client: 0};
  announcementStatusData: {available: number, notAvailable: number} = {available: 0, notAvailable: 0};

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
    // Load Users
    this.userService.getAllUsers().subscribe({
      next: (users: User[]) => {
        this.totalUsers = users.length;
        this.userRoleData = {
          admin: users.filter(u => u.role === 'admin').length,
          client: users.filter(u => u.role === 'client').length
        };
        this.createUserRoleChart();
      },
      error: (err) => console.error('Error loading users:', err)
    });

    // Load Announcements
    this.announcementService.getAllAnnouncements().subscribe({
      next: (announcements) => {
        this.announcementStatusData = {
          available: announcements.filter(a => a.status === 'available').length,
          notAvailable: announcements.filter(a => a.status !== 'available').length
        };
        this.createAnnouncementStatusChart();
      },
      error: (err) => console.error('Error loading announcements:', err)
    });
  }

  createUserRoleChart() {
    const ctx = this.userRoleChart.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Administrateurs', 'Clients'],
        datasets: [{
          data: [this.userRoleData.admin, this.userRoleData.client],
          backgroundColor: ['#007bff', '#28a745'],
          hoverBackgroundColor: ['#0056b3', '#218838']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Répartition des utilisateurs par rôle'
          }
        }
      }
    });
  }

  createAnnouncementStatusChart() {
    const ctx = this.announcementStatusChart.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Annonces disponibles', 'Annonces non disponibles'],
        datasets: [{
          data: [this.announcementStatusData.available, this.announcementStatusData.notAvailable],
          backgroundColor: ['#17a2b8', '#dc3545'],
          hoverBackgroundColor: ['#138496', '#a71d2a']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Statut des annonces'
          }
        }
      }
    });
  }
}