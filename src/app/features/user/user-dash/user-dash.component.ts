import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.css']
})
export class UserDashComponent implements OnInit {
  showTable: boolean = false; // Variable pour contrôler l'affichage de la table

  constructor(private service:UserService){}
  totalUsers: number = 0;
  ngOnInit(): void {
       // Fetch and count users
    this.service.getUsers().subscribe({
      next: (users) => {
        // Exclude users with role 'admin'
        const nonAdminUsers = users.filter((user) => user.role !== 'ROLE_ADMIN');
        this.totalUsers = nonAdminUsers.length; 
      },
      error: (err) => console.error('Error fetching users', err),
    });

    
  }

  toggleTableVisibility() {
    this.showTable = !this.showTable; // Inverse l'état de la visibilité
  }

  

}
