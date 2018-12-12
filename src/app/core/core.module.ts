import {CUSTOM_ELEMENTS_SCHEMA, NgModule, Optional, SkipSelf} from '@angular/core';
import {throwIfAlreadyLoaded} from './guards/module-import.guard';
import {SharedModule} from '../shared/shared.module';
import {BroadcasterService} from './services/broadcaster.service';
import {NavigationGroupComponent} from './components/navigation-group/navigation-group.component';
import {loggerFactory} from './factories/logger.factory';
import {LoggerService} from './services/logger.service';
import {BottomActionsComponent} from './components/bottom-actions/bottom-actions.component';

const coreComponents = [
  NavigationGroupComponent,
  BottomActionsComponent
];

@NgModule({
  imports: [SharedModule],
  exports: coreComponents,
  declarations: coreComponents,
  providers: [
    BroadcasterService,
    {provide: LoggerService, useFactory: loggerFactory}
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() coreModule: CoreModule) {
    throwIfAlreadyLoaded(coreModule, 'CoreModule');
  }
}
