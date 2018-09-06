import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {LoginComponent} from '../../login/login.component';


@Component({
  selector: 'app-choice-difficult',
  templateUrl: './choice-difficult.component.html',
  styleUrls: ['./choice-difficult.component.scss']
})
export class ChoiceDifficultComponent implements OnInit {

  origins: any = [
    {type: '错题+新题', value: 1 },
    {type: '只出新题', value: 2 },
    {type: '只出错题', value: 3 },
    {type: '不限来源', value: 4 }
  ];

  amounts: any = [
    {amount: '5题', value: 5 },
    {amount: '10题', value: 10 },
    {amount: '20题', value: 20 },
    {amount: '30题', value: 30 },

  ];


  constructor(public dialogRef: MatDialogRef<LoginComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) { }
  ngOnInit() {
  }

  dialogClose(result: boolean) {
    this.dialogRef.close(result);
  }

}
