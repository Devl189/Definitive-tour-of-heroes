import {LoggerTypes} from '../app/core/factories/logger.type';

const server = 'http://localhost:3000/';

export const environment = {
  production: true,
  envName: 'production',
  server: server,
  buildVersion: '1.0.0-SNAPSHOT',
  buildTimestamp: new Date().toISOString(),
  // Defines the default language for translations
  defaultLanguage: 'en',
  apiConfig: {
    loggerService: LoggerTypes.NONE
  }
};
