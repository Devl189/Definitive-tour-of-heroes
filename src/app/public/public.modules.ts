import {SharedModule} from '../shared/shared.module';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {HeroesComponent} from './components/heroes/heroes.component';
import {HeroesServices} from './services/heroes.services';
import {HeroDetailComponent} from './components/hero-details/hero-details.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {MenusServices} from './services/menus.services';

const publicComponents = [
  HeroesComponent,
  HeroDetailComponent,
  DashboardComponent
];

@NgModule({
  imports: [SharedModule],
  exports: publicComponents,
  declarations: publicComponents,
  providers: [HeroesServices, MenusServices],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class PublicModules {
}
