import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  personal_info: any[] = [
    {title: '昵称', value: '慕少1238709'},
    {title: '职位', value: '未设置'},
    {title: '城市', value: '未设置'},
    {title: '性别', value: '保密'},
    {title: '个性签名', value: '未设置'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
