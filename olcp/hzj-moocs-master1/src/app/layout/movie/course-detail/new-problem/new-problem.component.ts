import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {NewCommentComponent} from '../new-comment/new-comment.component';

@Component({
  selector: 'app-new-problem',
  templateUrl: './new-problem.component.html',
  styleUrls: ['./new-problem.component.scss']
})
export class NewProblemComponent implements OnInit {

  content = '<p>Hello <strong>World !</strong></p>';
  conf: any = {
    uiColor: '#66AB16',
    filebrowserBrowseUrl: '/browser/browse.php',
    filebrowserUploadUrl: '/uploader/upload.php',
    extraPlugins: `clipboard,lineutils,lineheight,widget,dialog,codesnippet`,
    codeSnippet_theme: 'monokai_sublime',
    easyimage_toolbar: [ 'EasyImageAlignLeft', 'EasyImageAlignCenter', 'EasyImageAlignRight' ]
    // easyimage_toolbar: ['EasyImageAlignLeft', 'EasyImageAlignCenter', 'EasyImageAlignRight'],

    // extraPlugins: `clipboard,lineutils,lineheight,widget,dialog,codesnippet`,
    // codeSnippet_theme: 'monokai_sublime',
  };

  change(event): void {
    console.log(event);
  }


  problem: FormGroup;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<NewProblemComponent>,
              @Inject(MAT_DIALOG_DATA) private data) { }

  ngOnInit() {
    this.problem = this.fb.group({
      title: ['', Validators.required]
    })
  }

  submitClick({value, valid}, ev: Event) {
    this.dialogRef.close();
  }

  dialogCloseClick() {
    this.dialogRef.close();
  }

}
