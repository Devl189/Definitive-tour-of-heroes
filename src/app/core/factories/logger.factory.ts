// services
import {LoggerService} from '../services/logger.service';
import {ConsoleLoggerService} from '../services/console-logger.service';
// configurations
import {LoggerTypes} from './logger.type';
import {environment} from '../../../environments/environment';
import {NoneLoggerService} from '../services/none-logger.service';

// controls the instance of the service that controls the enablement of the console logs in the application
export function loggerFactory(): LoggerService {
  // TODO: Add file type, to save the bugs in a file
  switch (environment.apiConfig.loggerService) {
    case LoggerTypes.CONSOLE:
      return new ConsoleLoggerService();
    case LoggerTypes.NONE:
      return new NoneLoggerService();
    default:
      return new ConsoleLoggerService();
  }
}
