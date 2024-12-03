// src/app/core/services/notification.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
   private successMessageSubject = new Subject<string>();
  
   successMessage$ = this.successMessageSubject.asObservable();

  constructor() { }

  // Method to set a success message
  setSuccessMessage(message: string): void {
    this.successMessageSubject.next(message);
  }

  // Method to clear the success message
  clearSuccessMessage(): void {
    this.successMessageSubject.next('');
  }
}
