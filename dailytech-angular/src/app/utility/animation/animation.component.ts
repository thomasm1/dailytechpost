import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations: [
    trigger('changeState', [
      state('state1', style({
        backgroundColor:'lightblue',
        transform: 'scale(1)'
      })),
      state('state2', style({
      backgroundColor:'red',
        transform: 'scale(1.5)'  
      })),
      transition('*=>state1', animate('300ms')),
      transition('*=>state2', animate('100ms')),
      
    ])
  ]
})
export class AnimationComponent implements OnInit {

  @Input() currentState;
  
  constructor() { }

  ngOnInit(): void {
  }

}
