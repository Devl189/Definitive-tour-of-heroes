import { Component, OnInit } from '@angular/core';
import {Hero} from '../../../core/models/core-api';
import {HeroesServices} from '../../services/heroes.services';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  public heroes: Hero[];
  public selectedHero: Hero;
  constructor(private heroesService: HeroesServices) {
    this.heroesService.findAll().subscribe((heroes: Hero[]) => {
      this.heroes = heroes;
    });
  }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
