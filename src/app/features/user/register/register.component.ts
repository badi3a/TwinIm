import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service'; // Assurez-vous que l'importation est correcte

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['userSimple']  
    });
  }

  save(): void {
    if (this.formRegister.invalid) {
      return;
    }

    const newUser = this.formRegister.value;
    this.userService.addUser(newUser).subscribe(
      () => {
        this.router.navigate(['/user/login']);  
      },
      (error) => {
        console.error('L\'inscription a échoué', error);
        alert('Erreur lors de l\'inscription. Veuillez réessayer.');
      }
    );
  }
}
