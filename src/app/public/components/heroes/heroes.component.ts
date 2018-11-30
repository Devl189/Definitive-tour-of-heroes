import {Component} from '@angular/core';
import {Hero} from '../../../core/models/core-api';
import {HeroesServices} from '../../services/heroes.services';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent {

  public heroes: Hero[];
  public selectedHero: Hero;

  constructor(private heroesService: HeroesServices) {
    this.getHeroes();
  }

  private getHeroes() {
    this.heroesService.findHeroes().subscribe((heroes: Hero[]) => {
      this.heroes = heroes;
    });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
