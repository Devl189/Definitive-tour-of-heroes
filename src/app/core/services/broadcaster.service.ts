import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {filter} from 'rxjs/operators';
import {map} from 'rxjs/internal/operators';

interface BroadcastEvent {
  key?: any;
  data?: any;
}

@Injectable()
export class BroadcasterService {
  private _eventBus: Subject<BroadcastEvent>;

  constructor() {
    this._eventBus = new BehaviorSubject<BroadcastEvent>({});
  }

  broadcast(key: any, data?: any): void {
    this._eventBus.next({key, data});
  }

  on<T>(key: any): Observable<T> {
    /*return this._eventBus.asObservable()
      .filter(event => event.key === key)
      .map(event => <T>event.data);*/
    return this._eventBus.asObservable()
      .pipe(filter(event => event.key === key), map(event => <T>event.data));
  }
}
