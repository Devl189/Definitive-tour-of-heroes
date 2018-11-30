import {Component} from '@angular/core';
import {Hero} from '../../../core/models/core-api';
import {HeroesServices} from '../../services/heroes.services';
import {paths} from '../../../app-settings-definitions/path.definition';
import {Router} from '@angular/router';
import {CommonUtil} from '../../../core/utiles/common.utiles';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent {

  public heroes: Hero[];
  public showAddNewHero = false;
  public heroName: string;
  public CommonUtil = CommonUtil;

  constructor(private heroesService: HeroesServices,
              private router: Router) {
    this.getHeroes();
  }

  private getHeroes() {
    this.heroesService.findHeroes().subscribe((heroes: Hero[]) => {
      this.heroes = heroes;
    });
  }

  public goToHeroDetail(id) {
    this.router.navigate([`${paths.heroes}/${paths.detail}`, id])
      .catch(err => {
        console.log(`Error navigating to ${paths.detail}`);
        console.log(err);
      });
  }

  public goDashboad() {
    this.router.navigate([paths.dashboard])
      .catch(err => {
        console.log(`Error navigating to ${paths.detail}`);
        console.log(err);
      });
  }

  public addNewHero() {
    this.heroesService.addNewHero(this.heroName).subscribe(() => {
        this.heroName = null;
        this.showDataHero();
        this.getHeroes();
      }
    );
  }

  public showDataHero() {
    this.showAddNewHero = !this.showAddNewHero;
  }

  public deleteHero(id) {
    this.heroesService.deleteHero(id).subscribe(() => {
      this.getHeroes();
    });
  }
}
