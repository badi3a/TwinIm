import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../../../core/models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string = "http://localhost:3000";
  
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users?email=${email}&password=${password}`);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  addUser(user: User): Observable<User> {
    const newUser = {
      ...user,
      role: 'client'
    };
    return this.http.post<User>(`${this.apiUrl}/users`, newUser);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/users/${user.id}`, user,)
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.apiUrl}/users/${id}`)
  }
}
