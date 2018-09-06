import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnswerRoutingModule } from './answer-routing.module';
import {ProblemHomeComponent} from './problem/problem-home/problem-home.component';
import {ProblemListComponent} from './problem/problem-list/problem-list.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AnswerRoutingModule
  ],
  declarations: [
    ProblemHomeComponent,
    ProblemListComponent
  ]
})
export class AnswerModule { }
