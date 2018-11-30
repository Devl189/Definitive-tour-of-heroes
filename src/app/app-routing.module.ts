import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {paths} from './app-settings-definitions/path.definition';
import {HeroesComponent} from './public/components/heroes/heroes.component';

const rootRoutes: Routes = [
  {path: paths.root, redirectTo: paths.heroes, pathMatch: 'full'},
  {
    path: paths.heroes,
    component: HeroesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(rootRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
