import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: any[] = [];  // Tableau pour stocker les utilisateurs

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Récupérer la liste des utilisateurs lors de l'initialisation du composant
    this.userService.getAllUsers().subscribe(
      (data) => {
        this.users = data;  // Stocker les utilisateurs récupérés
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
  }
}
