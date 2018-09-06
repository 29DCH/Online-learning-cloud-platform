import {Component, HostBinding, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewTaskComponent} from '../new-task/new-task.component';
import {CopyTaskComponent} from '../copy-task/copy-task.component';
import {ConfirmDialogComponent} from '../../../shared/confirm-dialog/confirm-dialog.component';
import {NewTaskListComponent} from '../new-task-list/new-task-list.component';
import {slideToRight} from '../../../../anims/router.anim';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations: [
    slideToRight
  ]
})
export class TaskHomeComponent implements OnInit {

  @HostBinding('@routeAnim') state;

  tasklists = [
    {
      id: 1,
      name: '待办',
      tasks: [
        {
          id: 1,
          desc: '任务一: 去星巴克买杯咖啡',
          completed: true,
          priority: 3,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: '任务二: 完成老板布置的PPT作业',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: '李四',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
        },
      ]
    },
    {
      id: 2,
      name: '进行中',
      tasks: [
        {
          id: 1,
          desc: '任务一: 去星巴克买杯咖啡',
          completed: true,
          priority: 2,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
        {
          id: 2,
          desc: '任务二: 完成老板布置的PPT作业',
          completed: false,
          priority: 1,
          owner: {
            id: 1,
            name: '李四',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          reminder: new Date(),

        },
      ]
    }
  ];
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  /**
   * 打开NewTaskDialog组件, 并向NewTaskDialog组件返送数据 title: '新建任务'
   */
  launchNewTaskDialog() {
    const dialogRef = this.dialog.open(NewTaskComponent, {
      data: {
        title: '新建任务'
      }
    });
  }

  /**
   * 打开CopyTaskDialog组件, 并向CopyTaskDialog发送数据 lists: this.tasklists
   */
  launchCopyTaskDialog() {
    const dialogRed = this.dialog.open(CopyTaskComponent, {
      data: {
        lists: this.tasklists
      }
    })
  }

  /**
   * 打开NewTaskComponent组件, 该组件是新建任务列表
   * @param task
   */
  launchUpdateTaskDialog(task: any) {
    const dialogRed = this.dialog.open(NewTaskComponent, {
      data: {
        title: '修改任务',
        task: task
      }
    })
  }

  /**
   * 打开ConfirmDialog组件, 该组件是给出是否删除任务列表
   */
  launchConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: '删除列表:',
        content: '你确定要删除列表吗?'
      }
    });
    dialogRef.afterClosed()
      .subscribe(result => {
        console.log(result);
      })
  }

  /**
   * 打开NewTaskListDialog组件
   */
  launchNewTaskListDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, {
      data: {
        title: '更改列表名称'
      }
    })
  }

  /**
   * 打开NewTaskListComponent组件
   */
  launchNewTasListkDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, {
      data: {
        title: '新键列表'
      }
    })
  }

}
