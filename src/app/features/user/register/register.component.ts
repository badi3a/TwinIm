import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Announcement} from "../../../core/models/announcement";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
     formRegister: FormGroup;
     ngOnInit() {
       this.formRegister= new FormGroup(
         {firstName: new FormControl('',[Validators.required, Validators.minLength(3)])}
       );
     }
}
