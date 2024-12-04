import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.loginForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{8}$/)]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { firstName, phoneNumber } = this.loginForm.value;

      // Appeler le service pour la connexion
      this.userService.login(firstName, phoneNumber).subscribe((user) => {
        if (user) {
          console.log('Connexion réussie', user.firstName);
          // Redirection vers le profil utilisateur ou une autre page
          this.router.navigate(['/user/profile', user.id]);
        } else {
          console.error('Utilisateur introuvable');
          alert('Nom ou numéro de téléphone incorrect.');
        }
      });
    } else {
      console.error('Formulaire invalide');
    }
  }
}
