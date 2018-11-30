import {Component} from '@angular/core';
import {Hero} from '../../models/core-api';
import {HeroesServices} from '../../../public/services/heroes.services';
import {Router} from '@angular/router';
import {paths} from '../../../app-settings-definitions/path.definition';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  public topHeroes: Hero[];

  constructor(private heroesService: HeroesServices,
              private router: Router) {
    this.getHeroes();
  }


  private getHeroes() {
    this.heroesService.findHeroes().subscribe((heroes: Hero[]) => {
      this.topHeroes = heroes.slice(1, 5);
    });
  }

  public goToHeroDetail(id) {
    this.router.navigate([`${paths.heroes}/${paths.detail}`, id])
      .catch(err => {
        console.log(`Error navigating to ${paths.detail}`);
        console.log(err);
      });
  }
}
