import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {Hero} from '../../../core/models/core-api';
import {HeroesServices} from '../../services/heroes.services';
import {ActivatedRoute, Router} from '@angular/router';
import {paths} from '../../../app-settings-definitions/path.definition';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroDetailComponent {

  public hero: Hero;

  constructor(private heroesService: HeroesServices,
              private _route: ActivatedRoute,
              private router: Router,
              private _changeDetectorRef: ChangeDetectorRef) {
    this.getHeroDetails();
  }

  private getHeroDetails(): void {
    this._route.params.subscribe(params => {
      const id = params['id'];
      this.heroesService.findById(id).subscribe(hero => {
        this.hero = hero;
        this._changeDetectorRef.markForCheck();
      });
    });
  }

  public goBack(): void {
    this.router.navigate([paths.heroes])
      .catch(err => {
        console.log(`Error navigating to ${paths.heroes}`);
        console.log(err);
      });
  }

  public save(): void {
    this.heroesService.update(this.hero, 'id').subscribe( hero => {
        this.hero = hero;
      }
    );
  }
}
