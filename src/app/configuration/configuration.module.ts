import { NgModule } from '@angular/core';
import { CONFIGURATION_PORT } from './ConfigurationInjection';
import { PropertiesHttpAdapter } from './infrastructure/secondary/PropertiesHttpAdapter';


@NgModule({
  providers: [
    {
      provide: CONFIGURATION_PORT,
      useClass: PropertiesHttpAdapter,
    },
  ],
})
export class ConfigurationModule {}
