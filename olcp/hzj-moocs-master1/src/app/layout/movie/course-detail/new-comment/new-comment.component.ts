import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.scss']
})
export class NewCommentComponent implements OnInit {

  comment: FormGroup;


  constructor(private dialogRef: MatDialogRef<NewCommentComponent>,
              @Inject(MAT_DIALOG_DATA) private data,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.comment = this.fb.group({
      content: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  /**
   * 点击关闭按钮
   */
  dialogCloseClick() {
    this.dialogRef.close('');
  }

  /**
   * 点击提交按钮, 将评论内容返回给 AnswerCommentComponent 组件 answer-comment
   * @param {any} value
   * @param {any} valid
   * @param {Event} ev
   */
  submitClick({value, valid}, ev: Event) {
    ev.preventDefault();
    if (valid) {
      this.dialogRef.close(value.content);
    }
  }

}
