import {CUSTOM_ELEMENTS_SCHEMA, NgModule, Optional, SkipSelf} from '@angular/core';
import {throwIfAlreadyLoaded} from './guards/module-import.guard';
import {SharedModule} from '../shared/shared.module';
import {MessagesComponent} from './components/messages/messages.component';
import {MessageService} from './services/message.service';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {BroadcasterService} from './services/broadcaster.service';

const coreComponents = [
  MessagesComponent,
  DashboardComponent
];
@NgModule({
  imports: [SharedModule],
  exports: coreComponents,
  declarations: coreComponents,
  providers: [MessageService, BroadcasterService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() coreModule: CoreModule) {
    throwIfAlreadyLoaded(coreModule, 'CoreModule');
  }
}
