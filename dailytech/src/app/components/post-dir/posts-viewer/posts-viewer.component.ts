import { Component, OnInit } from '@angular/core';
import { AnimationComponent } from '../../util/animation/animation.component';

@Component({
  selector: 'app-posts-viewer',
  templateUrl: './posts-viewer.component.html',
  styleUrls: ['./posts-viewer.component.css']
})
export class PostsViewerComponent implements OnInit {

  toState = 'state1';

  constructor() { }

  ngOnInit(): void {
  }

  changeState(state: any) {
    this.toState = state;
  }

}
