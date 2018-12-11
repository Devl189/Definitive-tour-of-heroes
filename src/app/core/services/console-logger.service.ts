import {Injectable} from '@angular/core';
import {Logger} from './logger.service';

const noop = (): any => undefined;

@Injectable()
export class ConsoleLoggerService implements Logger {

  get info() {
    return console.info.bind(console);
  }

  get warn() {
    return console.warn.bind(console);
  }

  get error() {
    return console.error.bind(console);
  }

  get group() {
    return console.group.bind(console);
  }

  get groupEnd() {
    return console.groupEnd.bind(console);
  }

  invokeConsoleMethod(type: string, args?: any): void {
    const logFn: Function = (console)[type] || console.log || noop;
    logFn.apply(console, [args]);
  }
}
