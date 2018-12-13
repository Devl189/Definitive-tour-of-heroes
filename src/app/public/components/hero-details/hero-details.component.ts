import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {Hero} from '../../../core/models/core-api';
import {HeroesServices} from '../../services/heroes.services';
import {ActivatedRoute, Router} from '@angular/router';
import {paths} from '../../../app-settings-definitions/path.definition';
import {LoggerService} from '../../../core/services/logger.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroDetailComponent {

  public hero: Hero;
  heroForm: FormGroup;

  constructor(private heroesService: HeroesServices,
              private _route: ActivatedRoute,
              private router: Router,
              private _changeDetectorRef: ChangeDetectorRef,
              private _loggerService: LoggerService,
              private fb: FormBuilder) {
    this.heroForm = this.fb.group({
      'heroname': new FormControl('', Validators.required)
    });
    this.getHeroDetails();
  }

  private getHeroDetails(): void {
    this._route.params.subscribe(params => {
      const id = params['id'];
      this.heroesService.findById(id).subscribe(hero => {
        this.hero = hero;
        this.updateHero();
        this._changeDetectorRef.markForCheck();
      });
    });
  }

  public goBack(): void {
    this.router.navigate([paths.heroes])
      .catch(err => {
        this._loggerService.info(`Error navigating to ${paths.heroes}`);
        this._loggerService.info(err);
      });
  }

  public onSave(value: any): void {
    this.hero.name = value.heroname;
    this.heroesService.update(this.hero, 'id').subscribe(hero => {
        this.hero = hero;
      }
    );
  }

  private updateHero() {
    this.heroForm.setValue({['heroname']: this.hero.name});
  }
}
