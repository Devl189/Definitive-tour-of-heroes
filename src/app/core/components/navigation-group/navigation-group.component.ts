import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {MenusServices} from '../../../public/services/menus.services';

@Component({
  selector: 'app-navigation-group',
  templateUrl: './navigation-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationGroupComponent {
  public menuItems: MenuItem[] = [];

  constructor(private menusService: MenusServices,
              private _changeDetectorRef: ChangeDetectorRef) {
    this.getMenuItems();
  }

  private getMenuItems() {
    this.menusService.findAll().subscribe((menuItems: MenuItem[]) => {
      this.menuItems = menuItems;
      this._changeDetectorRef.markForCheck();
    });
  }
}
