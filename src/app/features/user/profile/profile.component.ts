import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/core/models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   user:User;

  constructor( private route:ActivatedRoute,private userService:UserService,    private router: Router){}
  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.params['id']);

    this.userService.getUserById(id).subscribe(
      (data:User)=>{
        this.user=data
        console.log(id)
      },
      (err: any) => {
        console.error('Erreur lors de la récupération de user :', err);
      }
    );
  }
    

    
  }


