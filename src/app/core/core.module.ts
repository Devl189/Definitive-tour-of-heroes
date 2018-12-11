import {CUSTOM_ELEMENTS_SCHEMA, NgModule, Optional, SkipSelf} from '@angular/core';
import {throwIfAlreadyLoaded} from './guards/module-import.guard';
import {SharedModule} from '../shared/shared.module';
import {DashboardComponent} from '../public/components/dashboard/dashboard.component';
import {BroadcasterService} from './services/broadcaster.service';
import {NavigationGroupComponent} from './components/navigation-group/navigation-group.component';

const coreComponents = [
  DashboardComponent,
  NavigationGroupComponent
];

@NgModule({
  imports: [SharedModule],
  exports: coreComponents,
  declarations: coreComponents,
  providers: [BroadcasterService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() coreModule: CoreModule) {
    throwIfAlreadyLoaded(coreModule, 'CoreModule');
  }
}
