import {Component, Inject} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {BroadcasterService} from './core/services/broadcaster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public title = 'tour_of_heroes';

  constructor(@Inject('defaultLanguage') private defaultLanguage: string,
              private translate: TranslateService,
              private _broadcastService: BroadcasterService) {
    translate.setDefaultLang(defaultLanguage);
    translate.use(localStorage['language'] || defaultLanguage);
    this._broadcastService.broadcast('loco', true);
  }
}
