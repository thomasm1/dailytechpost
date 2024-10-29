import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';

import { WritingComponent } from './components/writing/writing.component';
import { CurrentWritingComponent } from './components/writing/current-writing/current-writing.component';
import { NewWritingComponent } from './components/writing/new-writing/new-writing.component';
import { PastWritingsComponent } from './components/writing/past-writings/past-writings.component';
import { GridWritingsComponent } from './components/writing/grid-writings/grid-writings.component';
import { StopWritingComponent } from './components/writing/current-writing/stop-writing.component';
import { MaterialModule } from './material.module';
// import { WritingRoutingModule } from './writing-routing.module';
import { writingReducer } from './reducers/writing.reducer';

@NgModule({
  declarations: [
    WritingComponent,
    CurrentWritingComponent,
    NewWritingComponent,
    PastWritingsComponent,
    GridWritingsComponent,
    StopWritingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    MaterialModule,
    FlexLayoutModule,
    // WritingRoutingModule
    StoreModule.forFeature('writing', writingReducer) //adding unique identifier
  ],
  entryComponents: [StopWritingComponent]
})
export class WritingModule {}
