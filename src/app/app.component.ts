import {Component, Inject} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public title = 'tour_of_heroes';

  constructor(@Inject('defaultLanguage') private defaultLanguage: string,
              private translate: TranslateService) {
    translate.setDefaultLang(defaultLanguage);
    translate.use(localStorage['language'] || defaultLanguage);
  }
}
