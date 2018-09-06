import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyPlanRoutingModule } from './study-plan-routing.module';
import { StudyPlanComponent } from './study-plan.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { ProjectItemComponent } from './project/project-item/project-item.component';
import { NewProjectComponent } from './project/new-project/new-project.component';
import { InviteComponent } from './project/invite/invite.component';
import { TaskHomeComponent } from './task/task-home/task-home.component';
import { TaskHeaderComponent } from './task/task-header/task-header.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { TaskItemComponent } from './task/task-item/task-item.component';
import { NewTaskComponent } from './task/new-task/new-task.component';
import { CopyTaskComponent } from './task/copy-task/copy-task.component';
import { NewTaskListComponent } from './task/new-task-list/new-task-list.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    StudyPlanRoutingModule,
    SharedModule
  ],
  declarations: [
    StudyPlanComponent,
    ProjectListComponent,
    ProjectItemComponent,
    NewProjectComponent,
    InviteComponent,
    TaskHomeComponent,
    TaskHeaderComponent,
    TaskListComponent,
    TaskItemComponent,
    NewTaskComponent,
    CopyTaskComponent,
    NewTaskListComponent
  ],
  exports: [
  ],
  // 预加载
  entryComponents: [
    NewProjectComponent,
    InviteComponent,
    NewTaskComponent,
    CopyTaskComponent,
    NewTaskListComponent
  ]
})
export class StudyPlanModule { }
