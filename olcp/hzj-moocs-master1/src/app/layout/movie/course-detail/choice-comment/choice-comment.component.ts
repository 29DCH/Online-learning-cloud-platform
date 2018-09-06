import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-choice-comment',
  templateUrl: './choice-comment.component.html',
  styleUrls: ['./choice-comment.component.scss']
})
export class ChoiceCommentComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
              private dialogRef: MatDialogRef<ChoiceCommentComponent>) { }

  ngOnInit() {
  }

  dialogCloseClick(value: string): void {
    this.dialogRef.close(value)
  }

}
