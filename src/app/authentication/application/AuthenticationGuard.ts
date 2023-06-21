import { Inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Authentication } from '../infrastructure/domain/Authentication';
import { AUTHENTICATION } from '../AuthenticationInjection';


@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(@Inject(AUTHENTICATION) private authentication: Authentication, private readonly router: Router) {}

  canActivate(): Promise<boolean> {
    return this.authentication.authenticated().then(authenticated => {
      if (authenticated) {
        return true;
      }
      // FIXME return parseUrl directement (bug avec l'authentification)
      this.router.parseUrl('/unauthorized');
      return false;
    });
  }
}
