import { Component, OnInit, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-new-writing',
  templateUrl: './new-writing.component.html',
  styleUrls: ['./new-writing.component.css']
})
export class NewWritingComponent implements OnInit {
  @Output() writingStart = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onStartWriting() {
    this.writingStart.emit();
  }

}
