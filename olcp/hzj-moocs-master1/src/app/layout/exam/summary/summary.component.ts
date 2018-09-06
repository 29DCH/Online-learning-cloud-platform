import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ExamType} from '../../../entity/exam-type';
import {ExamTypeService} from '../../../service/exam-type.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  paperid: number;

  examType: ExamType;

  peopelInfo: any[] = [
    {rank: 1, imgUrl: 'assets/img/avatar01.jpg', name: 'ART_ZY', grade: '100分'},
    {rank: 2, imgUrl: 'assets/img/avatar01.jpg', name: 'ART_ZY', grade: '100分'},
    {rank: 3, imgUrl: 'assets/img/avatar01.jpg', name: 'ART_ZY', grade: '100分'},
    {rank: 4, imgUrl: 'assets/img/avatar01.jpg', name: 'ART_ZY', grade: '100分'},
    {rank: 5, imgUrl: 'assets/img/avatar01.jpg', name: 'ART_ZY', grade: '100分'},
    {rank: 6, imgUrl: 'assets/img/avatar01.jpg', name: 'ART_ZY', grade: '100分'},
    {rank: 7, imgUrl: 'assets/img/avatar01.jpg', name: 'ART_ZY', grade: '100分'},


  ];

  constructor(private activateRoute: ActivatedRoute,
              private examTypeScript: ExamTypeService) { }

  ngOnInit() {
    this.activateRoute.queryParams
      .subscribe((params: Params) => {
        this.paperid = +params['type'];
        if (localStorage.getItem('paperid')) {
          localStorage.removeItem('paperid');
        }
        localStorage.setItem('paperid', String(this.paperid));
        this.getExamTypeValue();
      });
  }


  getExamTypeValue() {
    this.examTypeScript.getExamTypeValue(this.paperid)
      .subscribe((data: ExamType) => {
        this.examType = data;
      });
  }




}
