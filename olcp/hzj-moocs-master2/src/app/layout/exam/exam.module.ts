import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamRoutingModule } from './exam-routing.module';
import { ExamHomeComponent } from './exam-home/exam-home.component';
import {NgxEchartsModule} from 'ngx-echarts';
import { ChoiceDifficultComponent } from './choice-difficult/choice-difficult.component';
import { DoHomeworkComponent } from './do-homework/do-homework.component';
import {SharedModule} from '../shared/shared.module';
import { LoginExamHomeComponent } from './login-exam-home/login-exam-home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SummaryComponent } from './summary/summary.component';
import { AnswerAnalysisComponent } from './answer-analysis/answer-analysis.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ExamRoutingModule,
    NgxEchartsModule,
    NgbModule
  ],
  declarations: [
    ExamHomeComponent,
    ChoiceDifficultComponent,
    DoHomeworkComponent,
    LoginExamHomeComponent,
    SummaryComponent,
    AnswerAnalysisComponent
  ],
  entryComponents: [
    ChoiceDifficultComponent
  ]
})
export class ExamModule { }
