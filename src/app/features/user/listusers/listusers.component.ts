import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {
  users: any[] = [];
  @Input() showTable: boolean;
  constructor(private service:UserService){}
  ngOnInit(): void {
    this.service.getAllUsers().subscribe({
      next: (data) => (this.users = data),
      error: (err) => console.error('Error fetching users', err),

    })
      
  }
 

}
