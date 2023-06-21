import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthInterceptor, AuthModule, LogLevel, OidcSecurityService, StsConfigHttpLoader, StsConfigLoader } from 'angular-auth-oidc-client';
import { map } from 'rxjs';

import { UnauthorizedComponent } from './infrastructure/primary/unauthorized/unauthorized.component';

import { PropertiesService } from '../configuration/application/properties.service';
import OidcAuthentication from './infrastructure/secondary/OidcAuthentication';
import { AUTHENTICATION } from './AuthenticationInjection';
import { AuthenticationInterceptor } from './application/AuthenticationInterceptor';
import { ForbiddenComponent } from './infrastructure/primary/forbidden/forbidden.component';

const authenticationFactory = (
  oidcSercurityService: OidcSecurityService,
  http: HttpClient
) => {
  return new OidcAuthentication(oidcSercurityService);
};

const configurationFactory = (propertiesService: PropertiesService) => {
  const configurationOidcClient = propertiesService.loadProperties().pipe(
    map(properties => {
      return {
        secureRoutes: ['/api'],
        postLoginRoute: '/home',
        forbiddenRoute: '/forbidden',
        unauthorizedRoute: '/unauthorized',
        logLevel: LogLevel.Debug,
        historyCleanupOff: false,
        authority: properties.oidc.issuerUri,
        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin + '/home',
        clientId: properties.oidc.clientId,
        scope: properties.oidc.scope.join(' '),
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
      };
    })
  );

  return new StsConfigHttpLoader(configurationOidcClient);
};

@NgModule({
  declarations: [ForbiddenComponent, UnauthorizedComponent],
  imports: [
    AuthModule.forRoot({
      loader: {
        provide: StsConfigLoader,
        useFactory: configurationFactory,
        deps: [PropertiesService],
      },
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true },
    {
      provide: AUTHENTICATION,
      useFactory: authenticationFactory,
      deps: [OidcSecurityService, HttpClient],
    },
  ],
  exports: [AuthModule],
})
export class AuthConfigModule {}
