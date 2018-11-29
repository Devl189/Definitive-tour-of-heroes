import {Hero} from '../../core/models/core-api';
import {BaseService} from '../../core/services/base.service';
import {Injectable} from '@angular/core';

@Injectable()
export class HeroesServices extends BaseService<Hero[]> {
  constructor() {
    super('HEROES_SERVICE');
  }
}
