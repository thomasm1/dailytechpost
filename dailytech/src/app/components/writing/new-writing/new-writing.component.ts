import { Component, OnInit,   OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { WritingService } from '../../../service/writing.service';
import { WritingBlog } from '../../../models/writing-blogs.model';
import { UiService } from '../../../service/ui.service';

@Component({
  selector: 'app-new-writing',
  templateUrl: './new-writing.component.html',
  styleUrls: ['./new-writing.component.scss']
})
export class NewWritingComponent implements OnInit, OnDestroy {
  // @Output() writingStart = new EventEmitter<void>();
  // writingBlogs: WritingBlog[] = [];
  // writingBlogs: Observable<WritingBlog[]>; 
  isLoading = true;
  writingBlogs: WritingBlog[];
  writingSubscription: Subscription;
  private loadingSubscription: Subscription;

  constructor(private writingService: WritingService, private uiService: UiService) { }

  ngOnInit() { 
    this.loadingSubscription = this.uiService.loadingStateChanged.subscribe(
      isLoading => { this.isLoading = isLoading;  }
    );
    this.writingSubscription = this.writingService.writingsChanged.subscribe(
      writingBlogs => { this.writingBlogs = writingBlogs; }
    );
  this.fetchWritings();
  }

  fetchWritings() {
    this.writingService.fetchAvailableWritingBlogs();
  }

  onStartWriting(form: NgForm) { 
    this.writingService.startWriting(form.value.writing);
  }

  ngOnDestroy() {
    if (this.loadingSubscription) {
      this.loadingSubscription.unsubscribe();
    }
    if (this.writingSubscription) {
      this.writingSubscription.unsubscribe();
    }
  }
}
