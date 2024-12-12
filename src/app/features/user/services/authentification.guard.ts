import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from './authentification-service.service';
@Injectable({
  providedIn: 'root',
})
export class AuthentificationGuard implements CanActivate {
  constructor(private authService: AuthentificationService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isLogged()) {
      return true; // L'utilisateur est authentifié, autoriser l'accès
    }

    // Si l'utilisateur n'est pas authentifié, redirection vers la page de connexion
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
