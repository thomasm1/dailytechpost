import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { WritingService } from '../../../service/writing.service';
import { WritingBlog } from '../../../models/writing-blogs.model';

@Component({
  selector: 'app-new-writing',
  templateUrl: './new-writing.component.html',
  styleUrls: ['./new-writing.component.css']
})
export class NewWritingComponent implements OnInit, OnDestroy {
  // @Output() writingStart = new EventEmitter<void>();
  // writingBlogs: WritingBlog[] = [];
  // writingBlogs: Observable<WritingBlog[]>; 
  writingBlogs: WritingBlog[];
  writingSubscription: Subscription;

  constructor(private writingService: WritingService) { }

  ngOnInit() {
    this.writingSubscription = this.writingService.writingsChanged.subscribe(
      writingBlogs => (this.writingBlogs = writingBlogs)
    );
    this.writingService.fetchAvailableWritingBlogs();
  }

  onStartWriting(form: NgForm) {
    // this.writingStart.emit();
    this.writingService.startWriting(form.value.writing);
  }

  ngOnDestroy() {
    this.writingSubscription.unsubscribe();
  }
}
