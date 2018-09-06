import { Component, OnInit } from '@angular/core';
import {ExamTypeService} from '../../../service/exam-type.service';
import {ExaminationPaper} from '../../../entity/examination-paper';
import {Proans} from '../../../entity/proans';
import {ActivatedRoute, Params, Route, Router} from '@angular/router';
import {Userexam} from '../../../entity/userexam';


class  ChoiceNumber{
  num: number;
  isCheck: boolean;

}

@Component({
  selector: 'app-do-homework',
  templateUrl: './do-homework.component.html',
  styleUrls: ['./do-homework.component.scss']
})
export class DoHomeworkComponent implements OnInit {


  proans: Proans[];
  //存储试卷
  examinationPaper: ExaminationPaper[];

  panelOpenState: boolean = false;
  //默认从第一题开始, 表示当前做的题号
  choice: number = 1;
  //总共的题目数量
  allProblem: number = 0;

  //分页数组
  numberChoice: ChoiceNumber[];

  //考试尾号
  problemTailnum: string;

  //试卷的id
  paperid: number;




  constructor(private examTypeService: ExamTypeService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    // this.proans[0] = new Proans();
    this.activatedRoute.params
      .subscribe((params: Params) => {
        this.problemTailnum = params['id'];
        this.getTopic(this.problemTailnum);
      });
    this.paperid = +localStorage.getItem('paperid');
  }



  /**
   * 从服务器得到数据,  数据是一套试卷
   * @param tailnum
   */
  getTopic(tailnum: string) {
    this.examTypeService.getTopic(tailnum)
      .subscribe(data => {
        console.log(data);
        this.numberChoice = data.map((value, index) => {
          let problems: ChoiceNumber = new ChoiceNumber();
          problems.num = index + 1;
          problems.isCheck = false;
          //将后台传过来的数据转化为JSON格式的数据
          value.pro = JSON.parse(value.pro)[0];
          //设置分页
          //设置总共的题目数量
          this.allProblem = index;
          return problems;
        });
        this.examinationPaper = data;
        this.examinationPaper.forEach((value, index) => {
          value.pro.pro.forEach((value1, index1) => {
            value1.status = false;
          })
        });
        console.log(this.examinationPaper);
      });
  }

  /**
   * 选择题目, 点击下一题或者点击题目序号
   * @param value
   */
  choiceProblem(value: number) {
    this.choice = value;
  }

  /**
   * 点击选项
   * @param problem
   * @param i
   */
  choiceClick(problemes: any, i: number, j: number) {
    let problem: any = problemes.pro;
    //题目为单选题的时候
    if (problem.protype === '单选题') {
      problem.pro.forEach((value, index) => {
        //将所用的选项设置为为选状态
        value.status = false;
        //将点击的选项设置为选择状态
        if (i === index) {
          value.status = true;
        }
      })
    } else if (problem.protype === '不定项选择题') {    //题目为多选题的时候
      problem.pro.forEach((value, index) => {
        //将选项的状态反转, 如果是选择变为未选, 如果是未选变为选择状态
        if (i === index) {
          value.status = !value.status;
        }
      })
    }
    this.setPageColor(problemes, j);
  }

  /**
   *  设置分页的状态, 如果做了, 系那是蓝色, 如果没做, 显示白色
   * @param problems
   */
  setPageColor(problems: ExaminationPaper, j: number) {
    let flag = false;
    problems.pro.pro.forEach((value , index) => {
      if (value.status) {
        flag = true;
      }
    });
    if (flag) {
      this.numberChoice[j].isCheck = true;
    } else {
      this.numberChoice[j].isCheck = false;

    }
  }

  /**
   * 提交试卷
   */
  submitTopic() {
    let grade = 0;
    this.proans = this.examinationPaper.map((value, index) => {
      let proan: Proans = new Proans();
      proan.id = value.id;
      proan.answer = '';
      value.pro.pro.forEach(value => {
        if (value.status) {
          proan.answer += value.content;
        }
      });
      return proan;
    });
    console.log(this.proans);
    let courseName = '';
    let difficult: number;
    this.examTypeService.getExamTypeValue(this.paperid)
      .subscribe(data => {
        courseName = data.examname;
        difficult = +data.difficulty;
        console.log(data);
      });
    this.examTypeService.getGrade(this.proans)
      .subscribe(data => {
        let today: Date = new Date();
        let endTime = today.getFullYear()+'-'+today.getMonth()+ '-' + today.getDay();
        let userExam = new Userexam(1, data[0].grade, data[0].correctnum, this.allProblem + 1, courseName, difficult, 30, this.problemTailnum, 0, endTime);
        this.examTypeService.addUserExam(userExam)
          .subscribe(data => {
            console.log(data);
            this.router.navigate(['/exam/analytic', this.problemTailnum]);
          });

      });
  }
}


