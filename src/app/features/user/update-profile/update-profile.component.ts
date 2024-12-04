import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../../../core/models/User';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  updateForm!: FormGroup;
  userId: string = '509a';

  constructor(
    private fb: FormBuilder, 
    private userService: UserService, 
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.userId = id;
      }
      this.fetchUserById();
    });

    this.updateForm = this.fb.group({
      id: [''],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required]],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        zipCode: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]]
      }),
      phoneNumbers: this.fb.array([this.createPhoneControl()]),
      picture: [''],
      birthday: ['', Validators.required]
    });
  }

  createPhoneControl() {
    return this.fb.control('', [Validators.pattern(/^[0-9]{8}$/)]);
  }

  addPhoneNumber(): void {
    this.phoneNumbers.push(this.createPhoneControl());
  }

  removePhoneNumber(index: number): void {
    this.phoneNumbers.removeAt(index);
  }

  get phoneNumbers(): FormArray {
    return this.updateForm.get('phoneNumbers') as FormArray;
  }

  fetchUserById(): void {
    if (!this.userId) {
      console.error('Please enter a valid user ID');
      return;
    }

    this.userService.getUserById(this.userId).subscribe(
      (user: User) => {
        const formattedBirthday = this.formatDate(user.birthday);
        this.updateForm.patchValue({
          ...user,
          birthday: formattedBirthday
        });
        this.phoneNumbers.clear();
        user.phoneNumbers.forEach((phoneNumber) => {
          this.phoneNumbers.push(this.fb.control(phoneNumber, Validators.pattern(/^[0-9]{8}$/)));
        });
      },
      (error) => {
        console.error('Error fetching user data', error);
      }
    );
  }

  private formatDate(date: Date | string): string {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  updateProfile(): void {
    if (this.updateForm.valid) {
      const updatedUser: User = this.updateForm.value;
      this.userService.updateUser(updatedUser).subscribe(
        (response) => {
          console.log('Profile updated successfully', response);
        },
        (error) => {
          console.error('Error updating profile', error);
        }
      );
    } else {
      this.showErrorMessages();
    }
  }

  showErrorMessages(): void {
    Object.keys(this.updateForm.controls).forEach(field => {
      const control = this.updateForm.get(field);
      if (control && control.invalid && (control.dirty || control.touched)) {
        let message = '';
        if (control.hasError('required')) {
          message = `${field} is required.`;
        } else if (control.hasError('minlength')) {
          message = `${field} must have a minimum length of ${control.errors?.['minlength'].requiredLength}.`;
        } else if (control.hasError('pattern')) {
          message = `${field} is invalid.`;
        }
        console.error(message);
      }
    });
  }
}
