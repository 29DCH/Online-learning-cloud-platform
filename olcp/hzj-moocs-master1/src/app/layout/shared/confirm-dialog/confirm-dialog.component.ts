import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  template: `
    <h2 mat-dialog-title>{{title}}</h2>
    <mat-dialog-content>
      {{content}}
    </mat-dialog-content>
    <mat-dialog-actions>
      <button type="button" mat-raised-button color="primary" (click)="onClick(true)">确定</button>
      <button type="button" mat-dialog-close mat-button (click)="onClick(false)">取消</button>
    </mat-dialog-actions>
  `,
  styles: [`
  `]
})
export class ConfirmDialogComponent implements OnInit {

  title: string = '';
  content: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) private data: any
              ,private dialogRef: MatDialogRef<ConfirmDialogComponent>) { }

  ngOnInit() {
    this.title = this.data.title;
    this.content = this.data.content;
  }

  onClick(result: boolean) {
    this.dialogRef.close(result);

  }

}
