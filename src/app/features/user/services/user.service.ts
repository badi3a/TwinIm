import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../../core/models/User';
import { catchError } from 'rxjs/operators'; // Ajoutez ceci
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  api: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // Méthode pour ajouter un utilisateur
  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.api}/users`, user);
  }

  // Méthode pour récupérer tous les utilisateurs
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.api}/users`);
  }

  // Méthode pour mettre à jour un utilisateur
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.api}/users/${user.id}`, user);
  }

  // Méthode pour supprimer un utilisateur
  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.api}/users/${id}`);
  }

  authenticate(email: string, password: string): Observable<any> {
    return this.http
      .post<any>(`${this.api}/auth/login`, { email, password })
      .pipe(
        catchError((error) => {
          console.error('Erreur d\'authentification', error);
          return throwError(error);
        })
      );
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.api}/users/${id}`);
  }
}
