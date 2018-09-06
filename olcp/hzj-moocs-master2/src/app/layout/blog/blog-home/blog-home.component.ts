import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.scss']
})
export class BlogHomeComponent implements OnInit {

  menus: any[] = [
    {menu: '推荐', link: '/personal'},
    {menu: '关注', link: 'setprofile'},
    {menu: '最新文章', link: 'oplog'},
    {menu: '人工智能', link: 'authenticate'},
    {menu: '云计算/大数据', link: 'certificate'},
    {menu: '前端开发', link: 'address'},
    {menu: '前端开发', link: 'address'},
    {menu: '后端开发', link: 'address'},
    {menu: '移动互联', link: 'address'},
    {menu: '工具资源', link: 'address'},
    {menu: '幽默段子', link: 'address'},
    {menu: '其他', link: 'address'},
    {menu: '前端开发', link: 'address'},
    {menu: '前端开发', link: 'address'},
    {menu: '前端开发', link: 'address'},
    {menu: '前端开发', link: 'address'},

  ];

  imgs: any = [
    {imgurl: 'assets/img/course01.png', link: '#'},
    {imgurl: 'assets/img/course01.png', link: '#'},
    {imgurl: 'assets/img/course01.png', link: '#'},
    {imgurl: 'assets/img/course01.png', link: '#'},
    {imgurl: 'assets/img/course01.png', link: '#'}

  ];




  constructor() { }

  ngOnInit() {
  }

}
