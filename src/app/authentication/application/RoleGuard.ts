import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

import { AUTHENTICATION } from '@/app/authentication/AuthenticationInjection';
import { Authentication } from '@/app/authentication/domain/Authentication';
import { RoleUtilisateur } from '@/app/utilisateurrole/domain/RoleUtilisateur';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(@Inject(AUTHENTICATION) private authentication: Authentication, private readonly router: Router) {}

  public async canActivate(route: ActivatedRouteSnapshot) {
    const requiredRole = route.data['role'];

    if (requiredRole == null) {
      return true;
    }

    const roleUtilisateur: RoleUtilisateur = await this.authentication.getRoleUtilisateur();
    if (requiredRole === roleUtilisateur) {
      return true;
    } else {
      return this.router.parseUrl('forbidden');
    }
  }
}
