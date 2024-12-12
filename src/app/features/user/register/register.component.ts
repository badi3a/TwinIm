import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../core/models/User';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup;
  user: User = new User();

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.formRegister = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      address: new FormGroup({
        street: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        zipCode: new FormControl('', [Validators.required]),
      }),
      phoneNumbers: new FormArray([this.createPhoneControl()]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      role: new FormControl('', [Validators.required]),

    });
  }

  createPhoneControl() {
    return new FormControl('', [Validators.pattern(/^[0-9]{8}$/)]);
  }

  addPhoneNumber() {
    this.phoneNumbers.push(this.createPhoneControl());
  }

  removePhoneNumber(i: number) {
    this.phoneNumbers.removeAt(i);
  }

  get phoneNumbers() {
    return this.formRegister.get('phoneNumbers') as FormArray;
  }
     save(){
       //backend
       this.user = this.formRegister.getRawValue();
       this.userService.addUser(this.user).subscribe(
         (data:User)=>{this.router.navigateByUrl('user/profile');}
       )
        console.log(this.formRegister.getRawValue())
     }


     
}
