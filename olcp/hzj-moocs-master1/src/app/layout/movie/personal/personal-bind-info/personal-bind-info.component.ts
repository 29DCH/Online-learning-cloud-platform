import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-bind-info',
  templateUrl: './personal-bind-info.component.html',
  styleUrls: ['./personal-bind-info.component.scss']
})
export class PersonalBindInfoComponent implements OnInit {

  list_item: any[] = [
    {icon: 'email-outline', name: '邮箱', description: '未绑定（绑定邮箱可得一积分）', notice: '可用邮箱加密码登录慕课网，可用邮箱找回密码', operation: '立即绑定'},
    {icon: 'iphone', name: '手机', description: '152******86', notice: '可用手机号加密码登录慕课网，可通过手机号找回密码', operation: '更改'},
    {icon: 'beenhere', name: '密码', description: '已设置', notice: '用于保护账号信息和登录安全', operation: '修改'},
    {icon: 'announcement', name: '社交账号', description: '', notice: '绑定第三方帐号，可以直接登录，还可以将内容同步到以下平台，与更多好友分享', operation: ''}
  ];

  constructor() { }

  ngOnInit() {
  }

}
