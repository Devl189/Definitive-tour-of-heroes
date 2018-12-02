// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const server = 'http://localhost:3000/';

export const environment = {
  // is used to define whether or not the project is in production
  production: false,
  envName: 'local',
  server: server,
  buildVersion: '1.0.0-SNAPSHOT',
  buildTimestamp: new Date().toISOString(),
  // Defines the default language for translations
  defaultLanguage: 'en',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
