import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';  // Assurez-vous que le chemin est correct
import { User } from '../../../core/models/User';  // Assurez-vous que ce modèle est correct

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: User[] = []; 
  totalUsers: number = 0;  

  constructor(private userService: UserService) {}

  ngOnInit(): void {
   
    this.userService.getAllUsers().subscribe((data) => {
      this.users = data; 
      this.totalUsers = this.users.length;
    });
  }
}
