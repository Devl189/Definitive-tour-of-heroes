import {Injectable} from '@angular/core';
import {Logger} from './logger.service';

const noop = (): any => undefined;

@Injectable()
export class NoneLoggerService implements Logger {

  get info() {
    return noop;
  }

  get warn() {
    return noop;
  }

  get error() {
    return noop;
  }

  get group() {
    return noop;
  }

  get groupEnd() {
    return noop;
  }

  invokeConsoleMethod(type: string, args?: any): void {
    const logFn: Function = (console)[type] || console.log || noop;
    logFn.apply(console, [args]);
  }
}
