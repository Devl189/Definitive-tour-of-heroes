import {Component, Input} from '@angular/core';
import {Hero} from '../../../core/models/core-api';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent {

  constructor() {
  }

  @Input() hero: Hero;

}
