import { Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { firstValueFrom, map, tap } from 'rxjs';
import { Authentication } from '../domain/Authentication';


@Injectable()
export default class OidcAuthentication implements Authentication {
  public constructor(private oidcSecurityService: OidcSecurityService) {}

  checkAuthAndLogin(): Promise<boolean> {
    return firstValueFrom(
      this.oidcSecurityService.checkAuth().pipe(
        map(auth => {
          if (!auth?.isAuthenticated) {
            this.login();
            return false;
          }
          return true;
        })
      )
    ).then();
  }

  login(): void {
    return this.oidcSecurityService.authorize();
  }

  logout(): Promise<unknown> {
    return firstValueFrom(this.oidcSecurityService.logoff());
  }

  authenticated(): Promise<boolean> {
    return firstValueFrom(this.oidcSecurityService.isAuthenticated());
  }
}
