import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-live-form-dialog',
  templateUrl: './live-form-dialog.component.html',
  styleUrls: ['./live-form-dialog.component.css']
})
export class LiveFormDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<LiveFormDialogComponent>
  ) {}

  cancel(): void {
    this.dialogRef.close();
  }
}
