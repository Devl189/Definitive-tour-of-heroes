import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {Hero} from '../../../core/models/core-api';
import {HeroesServices} from '../../services/heroes.services';
import {Router} from '@angular/router';
import {paths} from '../../../app-settings-definitions/path.definition';
import {BroadcasterService} from '../../../core/services/broadcaster.service';
import {LoggerService} from '../../../core/services/logger.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  public topHeroes: Hero[];

  constructor(private heroesService: HeroesServices,
              private router: Router,
              private _broadcastService: BroadcasterService,
              private _changeDetectorRef: ChangeDetectorRef,
              private _loggerService: LoggerService) {
    this.getHeroes();

    // proof of concept of data reception for broadcast service
    this._broadcastService.on('serviceTest')
      .subscribe((visible) => {
        this._loggerService.info(visible);
      }, error2 => {
        this._loggerService.info(error2);
      });
  }

  // gets all the heroes and gets the first 4.
  private getHeroes(): void {
    this.heroesService.findAll().subscribe((heroes: Hero[]) => {
      this.topHeroes = heroes.slice(0, 4);
      this._changeDetectorRef.markForCheck();
    });
  }

  // navigates to the details of a particular hero from his identifier
  public goToHeroDetail(id): void {
    this.router.navigate([`${paths.heroes}/${paths.detail}`, id])
      .catch(err => {
        this._loggerService.info(`Error navigating to ${paths.heroes}/${paths.detail}`);
        this._loggerService.info(err);
      });
  }
}
