import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { WritingService } from '../../service/writing.service';
import * as fromWriting from '../../reducers/writing.reducer';

@Component({
  selector: 'app-writing',
  templateUrl: './writing.component.html',
  styleUrls: ['./writing.component.scss']
})
export class WritingComponent implements OnInit { //, OnDestroy {
  // ongoingWriting = false;
  ongoingWriting$ : Observable<boolean>;
  // writingSubscription: Subscription;

  constructor(
    private writingService: WritingService,
    private store: Store<fromWriting.State>
    ) { }

  ngOnInit() {
    // this.writingSubscription = this.writingService.writingChanged.subscribe(
    //   writing => {
    //     if (writing) {
    //       this.ongoingWriting = true;
    //     } else {
    //       this.ongoingWriting = false;
    //     }
    //   }
    // );
    this.ongoingWriting$ = this.store.select(fromWriting.getIsWriting);
  }

  // ngOnDestroy() {
  //   if (this.writingSubscription) {
  //     this.writingSubscription.unsubscribe();
  //   }
  // }
}
