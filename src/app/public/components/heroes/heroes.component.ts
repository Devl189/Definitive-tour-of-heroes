import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {Hero} from '../../../core/models/core-api';
import {HeroesServices} from '../../services/heroes.services';
import {paths} from '../../../app-settings-definitions/path.definition';
import {Router} from '@angular/router';
import {CommonUtil} from '../../../core/utiles/common.utiles';
import {LoggerService} from '../../../core/services/logger.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroesComponent {

  public heroes: Hero[];
  public showAddNewHero = false;
  public heroName: string;

  constructor(private heroesService: HeroesServices,
              private router: Router,
              private _changeDetectorRef: ChangeDetectorRef,
              private _loggerService: LoggerService) {
    this.getHeroes();
  }

  private getHeroes(): void {
    this.heroesService.findAll().subscribe((heroes: Hero[]) => {
      this.heroes = heroes;
      this._changeDetectorRef.markForCheck();
    });
  }

  public goToHeroDetail(id): void {
    this.router.navigate([`${paths.heroes}/${paths.detail}`, id])
      .catch(err => {
        this._loggerService.info(`Error navigating to ${paths.detail}`);
        this._loggerService.info(err);
      });
  }

  public goDashboad(): void {
    this.router.navigate([paths.dashboard])
      .catch(err => {
        this._loggerService.info(`Error navigating to ${paths.dashboard}`);
        this._loggerService.info(err);
      });
  }

  public addNewHero(): void {
    const newHero: Hero = new Hero();
    newHero.name = this.heroName;
    this.heroesService.create(newHero).subscribe(() => {
        this.heroName = null;
        this.showDataHero();
        this.getHeroes();
      }
    );
  }

  public showDataHero(): void {
    this.showAddNewHero = !this.showAddNewHero;
  }

  public deleteHero(id): void {
    this.heroesService.remove(id).subscribe(() => {
      this.getHeroes();
    });
  }

  public isEmptyHeroName(): boolean {
    return CommonUtil.isEmpty(this.heroName);
  }
}
