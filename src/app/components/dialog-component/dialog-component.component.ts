import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.css']
})
export class DialogComponentComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    data.dialogData.resultado1="";
    data.dialogData.resultado2="";
  }

  onNoClick(): void {
    this.dialogRef.close();
  }




}
