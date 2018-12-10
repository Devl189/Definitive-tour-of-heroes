import {Component} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navigation-group',
  templateUrl: './navigation-group.component.html'
})
export class NavigationGroupComponent {
  public menuItems: MenuItem[];

  constructor() {
    this.menuItems = [
      {
        label: 'Top Heroes',
        routerLinkActiveOptions: {exact: true},
        routerLink: 'dashboard'
      },
      {
        label: 'List of Heroes',
        icon: 'pi pi-fw pi-pencil',
        routerLinkActiveOptions: {exact: true},
        routerLink: 'heroes'
      }
    ];
  }
}
