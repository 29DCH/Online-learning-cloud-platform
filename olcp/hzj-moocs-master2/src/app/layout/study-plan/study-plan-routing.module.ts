import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudyPlanComponent} from './study-plan.component';
import {ProjectListComponent} from './project/project-list/project-list.component';
import {TaskHomeComponent} from './task/task-home/task-home.component';

const routes: Routes = [
  {path: '', component: StudyPlanComponent, children: [
      {path: 'project', component: ProjectListComponent},
      {path: 'tasklist', component: TaskHomeComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudyPlanRoutingModule { }
