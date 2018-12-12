import {Injectable} from '@angular/core';
import {BaseService} from '../../core/services/base.service';
import {MenuItem} from 'primeng/api';

@Injectable()
export class MenusServices extends BaseService<MenuItem> {
  constructor() {
    super('MENUS_SERVICE');
  }
}
