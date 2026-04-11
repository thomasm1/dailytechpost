import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { WritingComponent } from './writing.component';
import { CurrentWritingComponent } from './current-writing/current-writing.component';
import { NewWritingComponent } from './new-writing/new-writing.component';
import { PastWritingsComponent } from './past-writings/past-writings.component';
import { GridWritingsComponent } from './grid-writings/grid-writings.component';
import { StopWritingComponent } from './current-writing/stop-writing.component';
import { MaterialModule } from '../../material.module'; 
import { writingReducer } from '../../reducers/writing.reducer';
import { categoryReducer } from '../../reducers/category.reducer';

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
        RouterModule,
        MaterialModule, 
        StoreModule.forFeature('writing', writingReducer),
        StoreModule.forFeature('category', categoryReducer)
    ]
})
export class WritingModule {}
