import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import { Authentication } from '@/app/authentication/domain/Authentication';
import { TypescriptUtilisateurs } from '@/app/utilisateur/infrastructure/primary/TypescriptUtilisateurs';
import { RoleUtilisateur } from '@/app/utilisateurrole/domain/RoleUtilisateur';

export default class TestAuthentication implements Authentication {
  public constructor(private readonly http: HttpClient, private typescriptUtilisateurs: TypescriptUtilisateurs) {}

  checkAuthAndLogin(): Promise<boolean> {
    return Promise.resolve(true);
  }

  login(): void {
    // do nothing
  }

  async logout(): Promise<unknown> {
    return firstValueFrom(this.http.post('/logout', {})).then();
  }

  async authenticated(): Promise<boolean> {
    return Promise.resolve(true);
  }

  async getRoleUtilisateur(): Promise<RoleUtilisateur> {
    await this.authenticated();
    return this.typescriptUtilisateurs.getCurrentUtilisateurRole();
  }
}
