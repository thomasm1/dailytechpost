import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { WritingComponent } from './components/writing/writing.component';
import { CurrentWritingComponent } from './components/writing/current-writing/current-writing.component';
import { NewWritingComponent } from './components/writing/new-writing/new-writing.component';
import { PastWritingsComponent } from './components/writing/past-writings/past-writings.component';
import { StopWritingComponent } from './components/writing/current-writing/stop-writing.component';
import { MaterialModule } from './material.module'; 
// import { WritingRoutingModule } from './writing-routing.module';

@NgModule({
  declarations: [
    WritingComponent,
    CurrentWritingComponent,
    NewWritingComponent,
    PastWritingsComponent,
    StopWritingComponent
  ],
  imports: [ 
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    // WritingRoutingModule
  ],
  entryComponents: [StopWritingComponent]
})
export class WritingModule {}
