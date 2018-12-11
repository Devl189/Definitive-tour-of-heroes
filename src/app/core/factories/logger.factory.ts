// services
import {LoggerService} from '../services/logger.service';
import {ConsoleLoggerService} from '../services/console-logger.service';
// configurations
import {LoggerTypes} from './logger.type';
import {environment} from '../../../environments/environment';
import {NoneLoggerService} from '../services/none-logger.service';

export function loggerFactory(): LoggerService {
  // TODO: Añadir tipo file, para guardar los fallos en un fichero
  switch (environment.apiConfig.loggerService) {
    case LoggerTypes.CONSOLE:
      return new ConsoleLoggerService();
    case LoggerTypes.NONE:
      return new NoneLoggerService();
    default:
      return new ConsoleLoggerService();
  }
}
