import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {NewProjectComponent} from '../../project/new-project/new-project.component';

@Component({
  selector: 'app-copy-task',
  templateUrl: './copy-task.component.html',
  styleUrls: ['./copy-task.component.scss']
})
export class CopyTaskComponent implements OnInit {

  //存储学习任务列表名称
  lists: any[];


  constructor(@Inject(MAT_DIALOG_DATA) private data,
              private dialogRef: MatDialogRef<NewProjectComponent>) { }


  ngOnInit() {
    console.log(this.data);
    this.lists = this.data.lists;
  }

}
