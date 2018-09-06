import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  title: string = '';

  //得到传过来的数据data
  //@Inject(MAT_DIALOG_DATA) private data
  constructor(@Inject(MAT_DIALOG_DATA) private data,
              private dialogRef: MatDialogRef<NewProjectComponent>) { }

  ngOnInit() {
    //通过data.属性名获取相应的值
    this.title = this.data.title;
    console.log(this.data.dark)
    // this.oc.themeClass = this.data.dark ? 'unicorn-dark-theme': null;


  }


  //在close的时候将数据传回去
  onSave() {
    this.dialogRef.close('我接受到了你的消息');
  }

}
