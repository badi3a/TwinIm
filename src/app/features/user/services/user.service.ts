import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../../core/models/User";

@Injectable()
export class UserService {
  api:string= "http://localhost:3000";
  constructor(private http:HttpClient) { }
  //getAllusers
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

  login(data:any): Observable<any> {
    return this.http.post<any>(`${this.api}/login`, data);
  }


  _is_logged(): boolean {
    return !!localStorage.getItem('access_token');
    }


    getRole(role: string): boolean {
      const userRole = localStorage.getItem('role');
      return userRole === role;
    }

      logOut(): void {
        localStorage.removeItem('access_token');
        localStorage.removeItem('role');
      }
}
