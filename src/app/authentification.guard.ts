import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/features/user/services/user.service'; 
@Injectable({
  providedIn: 'root',  
})
export class AuthentificationGuard  {

  constructor(private authService: UserService) {
  }
  canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean
  | UrlTree> | boolean | UrlTree {
  if (this.authService._is_logged() ) {
  return true
  }
  return false;
  }
}
