import { Component,  Inject } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';

@Component({
  selector: 'app-stop-writing',
  template: `<h1 mat-dialog-title>Are you sure?</h1>
            <mat-dialog-content>
              <p>You already got {{ passedData.progress }}% left of writing ...</p>
            </mat-dialog-content>
            <mat-dialog-actions>
              <button mat-button [mat-dialog-close]="true">Yes</button>
              <button mat-button [mat-dialog-close]="false">No</button>
            </mat-dialog-actions>
  `,
  styles: [
  ]
})
export class StopWritingComponent   {

  constructor(@Inject(MAT_DIALOG_DATA) public passedData: any) {}

 
} 