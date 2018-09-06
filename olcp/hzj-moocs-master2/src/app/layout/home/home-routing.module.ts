import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';
const routes: Routes = [
  {path: '', component: HomeComponent, children: [
      {path: 'study', loadChildren: 'app/layout/movie/movie.module#MovieModule'},
      {path: 'blog', loadChildren: 'app/layout/blog/blog.module#BlogModule'},
      {path: 'answer', loadChildren: 'app/layout/answer/answer.module#AnswerModule'},
      {path: 'plan', loadChildren: 'app/layout/study-plan/study-plan.module#StudyPlanModule'},
      {path: 'exam', loadChildren: 'app/layout/exam/exam.module#ExamModule'},
      {path: '', redirectTo: '/study', pathMatch: 'full'},
    ]}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
