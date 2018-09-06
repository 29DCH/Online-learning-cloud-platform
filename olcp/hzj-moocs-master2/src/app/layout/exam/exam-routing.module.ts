import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExamHomeComponent} from './exam-home/exam-home.component';
import {DoHomeworkComponent} from './do-homework/do-homework.component';
import {SummaryComponent} from './summary/summary.component';
import {LoginExamHomeComponent} from './login-exam-home/login-exam-home.component';
import {AnswerAnalysisComponent} from './answer-analysis/answer-analysis.component';

const routes: Routes = [
  {path: '', component: ExamHomeComponent},
  {path: 'homework/:id', component: DoHomeworkComponent},
  {path: 'summary', component: SummaryComponent},
  {path: 'loginhome', component: LoginExamHomeComponent},
  {path: 'analytic/:id', component: AnswerAnalysisComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamRoutingModule { }
