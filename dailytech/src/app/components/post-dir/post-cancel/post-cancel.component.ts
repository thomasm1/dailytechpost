import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogContent } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-post-cancel',
    template: `<h1 mat-dialog-title>Are you sure?</h1>
            <mat-dialog-content>
              <p>You already got {{ passedData.progress }}% left of writing ...</p>
            </mat-dialog-content>
            <mat-dialog-actions>
              <button mat-button [mat-dialog-close]="true">Yes</button>
              <button mat-button [mat-dialog-close]="false">No</button>
            </mat-dialog-actions>`,
  styles: [
    `
    `
  ]
})
export class PostCancelComponent   {

  constructor(@Inject(MAT_DIALOG_DATA) public passedData: any) {}

 

}
