import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {paths} from './app-settings-definitions/path.definition';
import {HeroesComponent} from './public/components/heroes/heroes.component';
import {DashboardComponent} from './core/components/dashboard/dashboard.component';
import {HeroDetailComponent} from './public/components/hero-detail/hero-detail.component';

const rootRoutes: Routes = [
  {path: paths.root, redirectTo: paths.dashboard, pathMatch: 'full'},
  {
    path: paths.heroes,
    component: HeroesComponent
  },
  {
    path: paths.dashboard,
    component: DashboardComponent
  },
  {
    path: `${paths.heroes}/${paths.detail}/${paths.id}`,
    component: HeroDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(rootRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
