import { Component, OnInit } from '@angular/core';
import { AnimationComponent } from '../util/animation/animation.component';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.css']
})
export class NasaComponent implements OnInit {

  toState = 'state1';

  constructor() { }

  ngOnInit(): void {
  }

  changeState(state: any) {
    this.toState = state;
  }
}
