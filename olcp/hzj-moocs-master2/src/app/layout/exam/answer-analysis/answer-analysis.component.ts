import { Component, OnInit } from '@angular/core';
import {ExamTypeService} from '../../../service/exam-type.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Userexam} from '../../../entity/userexam';

@Component({
  selector: 'app-answer-analysis',
  templateUrl: './answer-analysis.component.html',
  styleUrls: ['./answer-analysis.component.scss']
})
export class AnswerAnalysisComponent implements OnInit {

  selected = 'java工程师';

  // 得到考试信息  考试成绩, 答对题数
  evaluation_report: Userexam;

  //课程尾号
  problemTailnum: string;

  chartOption = {
    tooltip: {
      trigger: 'axis'
    },
    radar: [
      {
        indicator: [
          {text: 'java', max: '100'},
          {text: '编程基础', max: '100'},
          {text: 'Spring', max: '100'},
          {text: 'Linux', max: '100'},
          {text: '网络编程', max: '100'}
        ],
        center: ['50%', '30%'],
        radius: 80,
        shape: 'circle',
      }

    ],
    series: [
      {
        type: 'radar',
        tooltip: {
          trigger: 'item'
        },
        itemStyle: {normal: {areaStyle: {type: 'default'}}},
        data: [
          {
            value: [60,73,85,40, 60],
            name: '开始的讲课费四大皆空'
          }
        ]
      }
    ]
  };

  pages: number[] = [1, 2, 3, 4, 5, 6 ,7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  choicePage: number = 1;

  constructor(private examTypeService: ExamTypeService,
              private activateRourte: ActivatedRoute) { }

  ngOnInit() {

    if ('程序计数器是一个比较小的内存区域，用于指示当前线程所执行的字节码执行到了第几'.indexOf('用于指示当前线程所执行的字节码执行到了第几')) {
      console.log('程序计数器是一个比较小的内存区域');
    }
    this.activateRourte.params
      .subscribe((params: Params) => {
        this.problemTailnum = params['id'];
        this.getEvaluationReport();
        this.getAllAnswers();
      });
  }

  pageClick(page) {
    this.choicePage = page;
  }

  /**
   * 得到所有的答案
   */
  getAllAnswers() {
    this.examTypeService.getAllAnswers(this.problemTailnum)
      .subscribe(data => {
        console.log(data);
      });
  }


  /**
   * 得到考试的结果
   */
  getEvaluationReport() {
    this.examTypeService.getExamInfo(1, this.problemTailnum, 0)
      .subscribe((data: any) => {
        console.log(data);
        this.evaluation_report = data.content[0];
        console.log(this.evaluation_report);
      })
  }
}
