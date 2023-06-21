import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { PropertiesPort } from '../../domain/PropertiesPort';
import { Properties } from '../../domain/Properties';


@Injectable()
export class PropertiesHttpAdapter implements PropertiesPort {
  constructor(private http: HttpClient) {
  }

  get(): Observable<Properties> {
    let oidc = {
      oidc: {
        issuerUri: 'https://offeringsolutions-sts.azurewebsites.net',
        clientId: 'angularCodeRefreshTokens',
        scope: ['openid', 'profile', 'email', 'offline_access'],
      }
    };
    return from(Promise.resolve(oidc));

    //this.http.get<PropertiesJson>('/api/properties').pipe(map(toConfiguration), shareReplay(1));
  }
}
