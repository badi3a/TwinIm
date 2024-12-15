import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from './core/services/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardGuard implements CanActivate {
  constructor(private authService:AuthentificationService ) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.authService.getRole('ROLE_ADMIN') ) {
        return true; // L'utilisateur est authentifié, autorisez l'accès à la route
        //(rôle admin)
        
        }
        if (this.authService.getRole('ROLE_SIMPLE')) {
          return true; // L'utilisateur est authentifié, autorisez l'accès à la route
          //(rôle admin)
          }
          this.authService.logout();
          return false;
        }
    

        
      }
    
       
          
  

  

