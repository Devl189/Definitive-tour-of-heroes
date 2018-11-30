import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../../../core/models/core-api';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {

  constructor() { }

  @Input() hero: Hero;

  ngOnInit() {
  }

}
