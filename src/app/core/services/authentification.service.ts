import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  roleAS : any;

  constructor(private http:HttpClient) { }

  login(data:any):Observable<any>{
    return this.http.post<any>("http://localhost:3000/signin",data);
  }

  _is_logged(): boolean {
    return !!localStorage.getItem('access_token');
    }

    getRole(role:String) {
      this.roleAS = localStorage.getItem('role');
      if(this.roleAS==role)
      return true;
      return false
      }

    logout(){
      localStorage.clear(); }
    
}
