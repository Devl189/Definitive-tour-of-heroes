import {environment} from '../../environments/environment';

const heroes = 'heroes';
const menus = 'menus';

export const apiUrls = {
  'HEROES_SERVICE': `${environment.server}${heroes}`,
  'MENUS_SERVICE': `${environment.server}${menus}`,
};
