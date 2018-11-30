import {SharedModule} from '../shared/shared.module';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {HeroesComponent} from './components/heroes/heroes.component';
import {HeroesServices} from './services/heroes.services';
import {HeroDetailComponent} from './components/hero-detail/hero-detail.component';

const publicComponents = [
  HeroesComponent,
  HeroDetailComponent
];

@NgModule({
  imports: [SharedModule],
  exports: publicComponents,
  declarations: publicComponents,
  providers: [HeroesServices],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class PublicModules {
}
