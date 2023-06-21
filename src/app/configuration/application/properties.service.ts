import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CONFIGURATION_PORT } from '../ConfigurationInjection';
import { PropertiesPort } from '../domain/PropertiesPort';
import { Properties } from '../domain/Properties';

@Injectable({
  providedIn: 'root',
})
export class PropertiesService {
  constructor(@Inject(CONFIGURATION_PORT) private propertiesPort: PropertiesPort) {}

  loadProperties(): Observable<Properties> {
    return this.propertiesPort.get();
  }
}
