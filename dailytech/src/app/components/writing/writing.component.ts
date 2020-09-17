import { Component, OnInit } from '@angular/core'; 
import { Subscription } from 'rxjs'; 

import { WritingService } from '../../service/writing.service';

@Component({
  selector: 'app-writing',
  templateUrl: './writing.component.html',
  styleUrls: ['./writing.component.css']
})
export class WritingComponent implements OnInit {
  ongoingWriting = false;
  writingSubscription: Subscription;

  constructor(private writingService: WritingService) { }

  ngOnInit() {
    this.writingSubscription = this.writingService.writingChanged.subscribe(
      writing => {
        if (writing) {
          this.ongoingWriting = true;
        } else {
          this.ongoingWriting = false;
        }
      }
    );
  }

  ngOnDestroy() {
    if (this.writingSubscription) {
      this.writingSubscription.unsubscribe();
    }
  }
}
