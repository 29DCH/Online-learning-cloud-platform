import { Component, OnInit } from '@angular/core';
import {CourseBaseInfo} from '../../../entity/course-base-info';
import {ExamTypeService} from '../../../service/exam-type.service';
import {ExamType} from '../../../entity/exam-type';

@Component({
  selector: 'app-exam-home',
  templateUrl: './exam-home.component.html',
  styleUrls: ['./exam-home.component.scss']
})
export class ExamHomeComponent implements OnInit {

  examType: ExamType[];

  courseImgUrl: string = "assets/img/carousel/";
  carouseImg: any[] = [
    {img: this.courseImgUrl+"Offer神器.jpeg", color: "rgb(21, 119, 228)"},
    {img: this.courseImgUrl+"校招算法题.jpeg", color: "rgb(254, 206, 20)"},
    {img: this.courseImgUrl+"笔试干货.jpeg", color: "rgb(37, 33, 94)"},
    {img: this.courseImgUrl+"牛客职播.png", color: "rgb(25, 114, 233)"},
    {img: this.courseImgUrl+"笔经面经.jpg", color: "rgb(71, 80, 89)"},
  ];

  specialPracticeImgUrl: string = 'assets/img/special practice/';
  issues: any[] = [
    {img: this.specialPracticeImgUrl + 'java.png', title: 'Java工程师能力评估', link: 'summary'},
    {img: this.specialPracticeImgUrl + 'c++.png', title: 'C/C++工程师能力评估', link: 'summary'},
    {img: this.specialPracticeImgUrl + 'android.png', title: 'Android工程师能力评估  ', link: 'summary'},
    {img: this.specialPracticeImgUrl + 'iso.png', title: 'iOS工程师能力评估', link: 'summary'},
    {img: this.specialPracticeImgUrl + 'html.png', title: '前端工程师能力评估', link: 'summary'},
    {img: this.specialPracticeImgUrl + 'math.png', title: '算法工程师能力评估', link: 'summary'},
    {img: this.specialPracticeImgUrl + 'php.png', title: 'PHP工程师能力评估', link: 'summary'},
    {img: this.specialPracticeImgUrl + 'linux.png', title: '运维工程师能力评估', link: 'summary'},
  ];
  constructor(private examTypeService: ExamTypeService) { }

  ngOnInit() {
    this.getExamType();
  }

  getExamType() {
    this.examTypeService.getExamType()
      .subscribe((data: ExamType[]) => {
        this.examType = data;
      })
  }


}
