import { OidcConfigurationJson, toOidcConfiguration } from './OidcConfigurationJson';
import { Properties } from '../../domain/Properties';

export interface PropertiesJson {
  oidc: OidcConfigurationJson;
}

export const toConfiguration = (configurationJson: PropertiesJson): Properties => {
  return {
    oidc: toOidcConfiguration(configurationJson.oidc),
  };
};
