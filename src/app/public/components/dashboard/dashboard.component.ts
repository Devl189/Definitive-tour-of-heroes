import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {Hero} from '../../../core/models/core-api';
import {HeroesServices} from '../../services/heroes.services';
import {Router} from '@angular/router';
import {paths} from '../../../app-settings-definitions/path.definition';
import {BroadcasterService} from '../../../core/services/broadcaster.service';

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
              private _changeDetectorRef: ChangeDetectorRef) {
    this.getHeroes();
    this._broadcastService.on('loco')
      .subscribe((visible) => {
        console.log(visible);
      }, error2 => {
        console.log(error2);
      });
  }


  private getHeroes() {
    this.heroesService.findAll().subscribe((heroes: Hero[]) => {
      this.topHeroes = heroes.slice(0, 4);
      this._changeDetectorRef.markForCheck();
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
