import { OidcConfiguration } from '../../domain/OidcConfiguration';

export interface OidcConfigurationJson {
  issuerUri: string;
  clientId: string;
  scope: string[];
}

export const toOidcConfiguration = (oidcConfigurationJson: OidcConfigurationJson): OidcConfiguration => {
  return {
    issuerUri: oidcConfigurationJson.issuerUri,
    clientId: oidcConfigurationJson.clientId,
    scope: oidcConfigurationJson.scope,
  };
};
