import {mergeApplicationConfig, ApplicationConfig,} from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
//import {HttpClient} from "@angular/common/http";
import { appConfig } from './app.config';


const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
