import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProblemHomeComponent} from './problem/problem-home/problem-home.component';

const routes: Routes = [
  {path: '', component: ProblemHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnswerRoutingModule { }
