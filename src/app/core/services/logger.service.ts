import {Injectable} from '@angular/core';

export interface Logger {
  info: (msg: string, ...optionalParams: any[]) => undefined;
  warn: (msg: string, ...optionalParams: any[]) => undefined;
  error: (msg: string, ...optionalParams: any[]) => undefined;
  group: (groupTitle?: string, ...optionalParams: any[]) => undefined;
  groupEnd: () => undefined;
}

@Injectable()
export class LoggerService implements Logger {

  info = (message?: any, ...optionalParams: any[]) => undefined;
  warn = (message?: any, ...optionalParams: any[]) => undefined;
  error = (message?: any, ...optionalParams: any[]) => undefined;
  group = (groupTitle?: string, ...optionalParams: any[]) => undefined;
  groupEnd = () => undefined;

  invokeConsoleMethod(type: string, args?: any): void {}
}
