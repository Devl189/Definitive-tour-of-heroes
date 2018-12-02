import {Hero} from '../../core/models/core-api';
import {BaseService} from '../../core/services/base.service';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {MessageService} from '../../core/services/message.service';

@Injectable()
export class HeroesServices extends BaseService<Hero[]> {
  constructor(private messageService: MessageService) {
    super('HEROES_SERVICE');
  }

  findHeroes(): Observable<any> {
    this.messageService.messages.length > 0 ? this.messageService.clear() : this.messageService.add('HeroService: fetched heroes');
    return this.findAll();
  }

  updateHero(hero: Hero): Observable<Hero> {
    return this._httpClient.put<Hero>(`${this._baseUrl}/${hero.id}`, hero);
  }

  addNewHero(nameHero: string): Observable<any> {
    return this._httpClient.post<any>(`${this._baseUrl}`, {name: nameHero});
  }

  deleteHero(id: any): Observable<any> {
    return this._httpClient.delete<any>(`${this._baseUrl}/${id}`);
  }
}
