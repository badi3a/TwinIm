import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from 'src/app/core/models/User';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css'],
})
export class DashboardAdminComponent implements OnInit{
  constructor( private userService: UserService) {}

  users : User [] ;

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (data : User[]) : void => {
        this.users = data;
      }
    )
  }

  
  
  
}
