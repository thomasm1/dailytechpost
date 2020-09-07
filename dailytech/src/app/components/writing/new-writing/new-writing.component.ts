import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WritingService } from '../../../service/writing.service';
import { WritingBlog } from '../../../models/writing-blogs.model';

@Component({
  selector: 'app-new-writing',
  templateUrl: './new-writing.component.html',
  styleUrls: ['./new-writing.component.css']
})
export class NewWritingComponent implements OnInit {
  // @Output() writingStart = new EventEmitter<void>();
   writingBlogs: WritingBlog[] = [];

  constructor(private writingService: WritingService) { }

  ngOnInit() {
    this.writingBlogs = this.writingService.getAvailableWritingBlogs()
  }

  onStartWriting(form: NgForm) {
    // this.writingStart.emit();
    this.writingService.startWriting(form.value.writing);
  }

}
