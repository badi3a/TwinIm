import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Announcement} from "../../../core/models/announcement";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // FormGroup: class that match the form tag in the Template && is a collection of inputs
     formRegister: FormGroup;
     ngOnInit() {
       this.formRegister= new FormGroup(
         //FormControl: class that match an input in the form
         {firstName: new FormControl('',[Validators.required, Validators.minLength(3)]),
         lastName: new FormControl('',[Validators.required, Validators.minLength(3)]),
         address: new FormGroup(
           { street: new FormControl('',[Validators.required]),
             city: new FormControl('',[Validators.required]),
             zipCode: new FormControl('',[Validators.required])
           },
         ),
           phoneNumbers: new FormArray([this.createPhoneControl()])
         }

       );
     }
     //Helper method
     createPhoneControl(){
       return new FormControl('', [Validators.pattern(/^[0-9]{8}$/)]);
  }
  addPhoneNumber(){
       this.phoneNumbers.push(this.createPhoneControl());
  }
  removePhoneNumber(i:number){
    this.phoneNumbers.removeAt(i);
  }
     //the method save to be executed after the submit event (ngSubmit)
      get phoneNumbers(){
       return (this.formRegister.get('phoneNumbers') as FormArray);
      }
     save(){
       //backend
       //get the set of value of each input in the form
        console.log(this.formRegister.getRawValue())
     }
}
