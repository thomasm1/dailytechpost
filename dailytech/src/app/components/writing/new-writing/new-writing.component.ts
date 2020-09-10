import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { NgForm } from '@angular/forms';
import { WritingService } from '../../../service/writing.service';
import { WritingBlog } from '../../../models/writing-blogs.model';
import { Observable } from 'rxjs'; 
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-new-writing',
  templateUrl: './new-writing.component.html',
  styleUrls: ['./new-writing.component.css']
})
export class NewWritingComponent implements OnInit {
  // @Output() writingStart = new EventEmitter<void>();
  // writingBlogs: WritingBlog[] = [];
  writingBlogs: Observable<WritingBlog>[];

  constructor(private writingService: WritingService, private db: AngularFirestore) { }

  ngOnInit() {
    // this.writingBlogs = this.writingService.getAvailableWritingBlogs()
    //  this.writingBlogs = 
     this.db.collection('writing-blogs')
      .snapshotChanges()
      .pipe(map(docArray => {
        return docArray.map(doc => {
          return {
            id: doc.payload.doc.id,
            // spread operator pulling objects out of payload, and adding to object returned
            name: doc.payload.doc.data()['name'],
            news: doc.payload.doc.data()['news'],
            durationalGoal: doc.payload.doc.data()['durationalGoal'],
            wordCount: doc.payload.doc.data()['wordCount'],
            date: doc.payload.doc.data()['date'],
            state: doc.payload.doc.data()['state']

          }
        })
      })
      ).subscribe(result => {
        console.log(result)
      });
    // .valueChanges();

    // .subscribe(result => {
    //   console.log(result);
    // });
  }

  onStartWriting(form: NgForm) {
    // this.writingStart.emit();
    this.writingService.startWriting(form.value.writing);
  }

}
