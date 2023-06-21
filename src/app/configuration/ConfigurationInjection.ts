import { InjectionToken } from '@angular/core';
import { PropertiesPort } from './domain/PropertiesPort';

export const CONFIGURATION_PORT = new InjectionToken<PropertiesPort>('Configuration');
