import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from './authentification-service.service';


@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {

  constructor(private authService: AuthentificationService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.getRole('ROLE_ADMIN')) {
      return true; // Si l'utilisateur a le rôle ROLE_ADMIN, l'accès est autorisé
    }
    this.authService.logOut();
    this.router.navigate(['/login']); // Redirection vers la page de login si l'utilisateur n'a pas le bon rôle
    return false;
  }
}
