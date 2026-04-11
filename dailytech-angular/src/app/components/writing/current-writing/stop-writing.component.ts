import { Component, Injector } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';

@Component({
  selector: 'app-stop-writing',
  template: `<h1>Are you sure?</h1>
            <div>
              <p>Your current session can be kept as a local draft.</p>
            </div>
            <div>
              <button mat-button type="button" (click)="closeDialog('discard')">Yes, don't save</button>
              <button mat-button type="button" (click)="closeDialog('draft')">Yes, keep session draft</button>
              <button mat-button type="button" (click)="closeDialog('resume')">No</button>
            </div>
  `,
  styles: [
  ]
})
export class StopWritingComponent   {
  passedData: any;

  constructor(
    private injector: Injector,
    private dialogRef: MatDialogRef<StopWritingComponent>
  ) {
    this.passedData = this.injector.get(MAT_DIALOG_DATA, {});
  }

  closeDialog(result: 'discard' | 'draft' | 'resume'): void {
    this.dialogRef.close(result);
  }

 
} 