import { InjectionToken } from '@angular/core';
import { Authentication } from './infrastructure/domain/Authentication';

export const AUTHENTICATION = new InjectionToken<Authentication>('Authentication');
