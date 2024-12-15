import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthentificationService } from 'src/app/core/services/authentification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service:UserService,private authservice:AuthentificationService){}

  ngOnInit(): void {

   


   
  }
      logOut(){
        this.authservice.logOut();
      }

  }


