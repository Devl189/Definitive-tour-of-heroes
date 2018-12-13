import {Component, Inject} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {BroadcasterService} from './core/services/broadcaster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(@Inject('defaultLanguage') private defaultLanguage: string,
              private translate: TranslateService,
              private _broadcastService: BroadcasterService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang(defaultLanguage);
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(localStorage['language'] || defaultLanguage);
    // proof of concept of data transmission for broadcast service
    this._broadcastService.broadcast('serviceTest', true);
  }
}
