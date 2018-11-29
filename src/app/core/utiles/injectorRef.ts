import {Injector} from '@angular/core';

let _injectorRef: Injector;
export const injectorRef = (injector?: Injector): Injector => {
  if (injector) {
    _injectorRef = injector;
  }
  return _injectorRef;
};
