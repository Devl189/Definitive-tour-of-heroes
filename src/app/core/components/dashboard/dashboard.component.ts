import {Component} from '@angular/core';
import {Hero} from '../../models/core-api';
import {HeroesServices} from '../../../public/services/heroes.services';
import {Router} from '@angular/router';
import {paths} from '../../../app-settings-definitions/path.definition';
import {BroadcasterService} from '../../services/broadcaster.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  public topHeroes: Hero[];

  constructor(private heroesService: HeroesServices,
              private router: Router,
              private _broadcastService: BroadcasterService) {
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
