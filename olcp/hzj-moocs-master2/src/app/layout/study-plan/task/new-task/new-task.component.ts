import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  //表示是编辑学习任务还是新建学习任务
  title: string = '';
  //对学习任务的重要程度进行划分
  priorities = [
    {
      label: '紧急且重要',
      value: 1
    },
    {
      label: '重要不紧急',
      value: 2
    },
    {
      label: '紧急不重要',
      value: 3
    },
    {
      label: '不紧急不紧急',
      value: 4
    }
  ];


  constructor(@Inject(MAT_DIALOG_DATA) private data) { }


  ngOnInit() {
    this.title = this.data.title;
    console.log(this.data.task);
    // console.log(JSON.stringify(this.data.task));
  }

}
