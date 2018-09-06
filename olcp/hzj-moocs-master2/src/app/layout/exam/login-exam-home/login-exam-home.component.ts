import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {ChoiceDifficultComponent} from '../choice-difficult/choice-difficult.component';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login-exam-home',
  templateUrl: './login-exam-home.component.html',
  styleUrls: ['./login-exam-home.component.scss']
})
export class LoginExamHomeComponent implements OnInit {

  selected = '前端工程师';

  chartOption = {
    tooltip: {
      trigger: 'axis'
    },
    radar: [
      {
        indicator: [
          {text: 'javaScript', max: '100'},
          {text: 'Jquery', max: '100'},
          {text: 'Html/Css', max: '100'},
          {text: 'Linux', max: '100'},
          {text: '网络基础', max: '100'},
          {text: '网络基础', max: '100'}
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
            value: [60,73,85,40, 60,100],
            name: '开始的讲课费四大皆空'
          }
        ]
      }
    ]
  };

  constructor(private dialog: MatDialog,
              private router: Router) { }

  ngOnInit() {
  }

  launchChoiceDialog() {
    const dialogRef = this.dialog.open(ChoiceDifficultComponent, {
      width: '75%'
    });

    dialogRef.afterClosed()
      .subscribe(result => {
        console.log(result);
        if (result) {
          this.router.navigate(["/exam/homework"]);
        }
      });
  }


}
