import {ChangeDetectionStrategy, Component, HostListener, Input, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-bottom-actions',
  templateUrl: './bottom-actions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BottomActionsComponent {

  @Input() goTopBtnClass = 'scrollToTop-displayed';
  @ViewChild('goTopBtn') private _goTopBtn;

  constructor(private _renderer: Renderer2) {
  }

  @HostListener('document:scroll')
  onScroll() {
    const scrollingElement = window.scrollY || document.documentElement.scrollTop,
      targetElement = this._goTopBtn.nativeElement, goTopBtnClass = this.goTopBtnClass,
      targetAction = scrollingElement > 47 ? 'addClass' : 'removeClass';
    this._renderer[targetAction](targetElement, goTopBtnClass);
  }

  // takes the scroll from the page to the top
  goTop() {
    window.scrollTo(0, 0);
  }
}
