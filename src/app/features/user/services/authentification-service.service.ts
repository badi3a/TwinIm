import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  accessToken: string;
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  private apiUrl = 'http://localhost:3000/signin';

  constructor(private http: HttpClient) {}

  signin(data: any): Observable<User> {
    return this.http.post<User>(this.apiUrl, data);
  }

  isLogged(): boolean {
    return !!localStorage.getItem('access_token');
  }

  getRole(role: string): boolean {
    const roleAs = localStorage.getItem('role');
    return roleAs === role;
  }

  logOut(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('role');
  }
}
