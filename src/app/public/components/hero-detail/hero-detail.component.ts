import {Component} from '@angular/core';
import {Hero} from '../../../core/models/core-api';
import {HeroesServices} from '../../services/heroes.services';
import {ActivatedRoute, Router} from '@angular/router';
import {paths} from '../../../app-settings-definitions/path.definition';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent {

  public hero: Hero;

  constructor(private heroesServices: HeroesServices,
              private _route: ActivatedRoute,
              private router: Router) {
    this._route.params.subscribe(params => {
      const id = params['id'];
      this.heroesServices.findById(id).subscribe(hero => {
        this.hero = hero;
      });
    });
  }

  goBack(): void {
    this.router.navigate([paths.heroes])
      .catch(err => {
        console.log(`Error navigating to ${paths.heroes}`);
        console.log(err);
      });
  }
}
