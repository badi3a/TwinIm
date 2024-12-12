import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from 'src/app/features/user/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class roleGuardGuard {
  
  constructor(private authService:UserService ) {
  }
  canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean| UrlTree> | boolean | UrlTree {
  if (this.authService.getRole('ROLE_ADMIN') ) {
  return true; 
  }
  this.authService.logOut();
  return false;
  }

}
