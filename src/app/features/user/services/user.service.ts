import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {User} from "../../../core/models/User";

@Injectable()
export class UserService {
  api:string= "http://localhost:3000";
  constructor(private http:HttpClient) { }

  getAllUsers():Observable<User[]> {
    return this.http.get<User[]>(`${this.api}/users`);
  }
  //registerUser
  addUser(user:User):Observable<User> {
    return this.http.post<User>(`${this.api}/users`, user);
  }
  //updateProfile
  updateUser(user:User):Observable<User> {
    return this.http.put<User>(`${this.api}/users/${user.id}`, user,)
  }
  //deleteProfile
  deleteUser(id:number):Observable<User> {
    return this.http.delete<User>(`${this.api}/users/${id}`)
  }
  login(firstName: string, phoneNumber: string): Observable<User | null> {
    return this.http.get<User[]>(`${this.api}/users`).pipe(
      map((users) => {
        // Rechercher l'utilisateur avec le firstName et le phoneNumber
        const user = users.find(
          (u) =>
            u.firstName.toLowerCase() === firstName.toLowerCase() &&
            u.phoneNumbers.includes(phoneNumber)
        );
        return user || null; // Retourner l'utilisateur ou null si introuvable
      })
    );
  }

}
