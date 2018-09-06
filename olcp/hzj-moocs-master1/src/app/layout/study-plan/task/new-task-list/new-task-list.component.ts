import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-new-task-list',
  templateUrl: './new-task-list.component.html',
  styleUrls: ['./new-task-list.component.scss']
})
export class NewTaskListComponent implements OnInit {


  //表示是编辑列表名称还是新建列表名称
  title: string = '';
  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
              private dialogRef: MatDialogRef<NewTaskListComponent>) { }

  ngOnInit() {
    this.title = this.data.title;
  }

}
