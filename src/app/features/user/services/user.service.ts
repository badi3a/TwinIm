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

  singin(data:any):Observable<User> {

  return this.http.post<User>('http://localhost:3000/signiin', data);


  }

  

  login(credentials: { email: string, password: string }): Observable<{ access_token: string, role: string }> {
    return this.http.post<{ access_token: string, role: string }>(`${this.api}/login`, credentials);
  }

  _is_logged(): boolean {
    return !!localStorage.getItem('access_token');
  }

 
  logOut(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('role');
  }


 getRole(role: string): boolean {
    return localStorage.getItem('role') === role;
  }
  getAccessToken(): string | null {
    return localStorage.getItem('access_token');
  }

  getRoleFromLocalStorage(): string | null {
    return localStorage.getItem('role');
  }

}
