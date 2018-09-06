import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss']
})
export class TaskHeaderComponent implements OnInit {

  //接收从父组件传过来的数据,  父组件是TaskHomeComponent
  @Input() header = '';

  //将点击事件传给父组件
  @Output() newTask = new EventEmitter<void>();
  @Output() moveAll = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();
  @Output() edit = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  /**
   * 点击新任务,将这个点击事件传给父组件  TaskHomeComponent
   */
  onNewTaskClick() {
    this.newTask.emit();
  }

  /**
   * 点击移动本列表中的所用内容, 将这个点击事件传给父组件  TaskHomeComponent
   */
  onMoveAllClick() {
    this.moveAll.emit();

  }

  /**
   * 点击删除删除列表, 将这个点击事件传给父组件 TaskHomeComponent
   */
  onDelTaskListClick() {
    this.delete.emit();
  }

  /**
   * 点击修改列表名称, 将这个点击事件传给父组件
   */
  onEditListClick() {
    this.edit.emit();
  }
}
