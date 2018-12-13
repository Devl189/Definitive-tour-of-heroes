// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import {LoggerTypes} from '../app/core/factories/logger.type';

const server = 'http://localhost:3000/';

export const environment = {
  // is used to define whether or not the project is in production
  production: false,
  envName: 'local',
  // defines the url where the http requests will be made
  server: server,
  buildVersion: '1.0.0-SNAPSHOT',
  buildTimestamp: new Date().toISOString(),
  // Defines the default language for translations
  defaultLanguage: 'en',
  apiConfig: {
    // defines whether the console logs are displayed or not (loggerFactory)
    loggerService: LoggerTypes.CONSOLE
  }
};
