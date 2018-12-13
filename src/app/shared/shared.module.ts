import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {InputTextModule, MessagesModule} from 'primeng/primeng';
import {TranslateModule} from '@ngx-translate/core';
import {PanelModule} from 'primeng/panel';
import {MessageModule} from 'primeng/message';

@NgModule({
  /* CommonModule --> Exports all the basic Angular directives and pipes, such as NgIf, NgForOf, DecimalPipe, and so on.
   Re-exported by BrowserModule, which is included automatically in the root AppModule
   when you create a new app with the CLI new command. */
  /* FormsModule --> Exports the required providers and directives for template-driven forms,
  making them available for import by NgModules that import this module.*/
  imports: [TranslateModule, MenubarModule, ButtonModule, InputTextModule, PanelModule, MessagesModule, MessageModule],
  exports: [
    TranslateModule, CommonModule, FormsModule, MenubarModule, ButtonModule, PanelModule, ReactiveFormsModule, MessagesModule, MessageModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {
}
