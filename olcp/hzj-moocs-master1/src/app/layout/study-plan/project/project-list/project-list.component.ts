import {Component, HostBinding, OnInit} from '@angular/core';
import {InviteComponent} from '../invite/invite.component';
import {MatDialog} from '@angular/material';
import {NewProjectComponent} from '../new-project/new-project.component';
import {ConfirmDialogComponent} from '../../../shared/confirm-dialog/confirm-dialog.component';
import {slideToRight} from '../../../../anims/router.anim';
import {listAnimation} from '../../../../anims/list.anim';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [
    slideToRight,
    listAnimation
  ]
})
export class ProjectListComponent implements OnInit {

  @HostBinding('@routeAnim') state;
  projects =[
    {
      "id": 1,
      "name": "企业协作平台",
      "desc": "这是一个企业内部项目",
      "coverImg": "assets/img/covers/0.jpg"
    },
    {
      "id": 2,
      "name": "企业协作平台",
      "desc": "这是一个企业内部项目",
      "coverImg": "assets/img/covers/1.jpg"
    },
  ];
  //注入MatDialog
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  /**
   * 新建一个学习计划,弹窗为NewProjectComponent组件的内容
   */
  openNewProjectDialog() {
    //传递给dialog的数据
    const dialogRef = this.dialog.open(NewProjectComponent,{
      //通过键值对来传送数据,dark表示键, true表示值
      data: {
        title: '新建项目'
      }
    });

    //通过subscribe获取从dialog传过来的数据
    dialogRef.afterClosed().subscribe(result => {
      console.log(`返回的数据为${result}`);
      this.projects = [...this.projects, {id: 3, name: "企业协作平台",desc: "这是一个企业内部项目", coverImg: "assets/img/covers/4.jpg"}]
    })


  }

  /**
   * 要请他人加入这个学习计划， 打开弹窗 InviteComponent组件
   */
  launchInviteDialog() {
    //传递给dialog的数据
    const dialogRef = this.dialog.open(InviteComponent);
  }

  /**
   * 编辑项目， 打开NewProjectComponent组件,并把title: '编辑项目传给 NewProjectComponent
   */
  launchEditDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {
      data: {
        title: '编辑项目'
      }
    });
  }

  /**
   * 删除项目, 打开ConfirmDialogComponent组价, 这个组件是提示是否确认删除
   */
  launchConfirmDialog(project) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: '删除项目',
        content: '你确认要删除该项目吗?'
      }
    });

    //从ConfirmDialogComponent返回过来的数据
    dialogRef.afterClosed()
      .subscribe(result => {
        console.log(result);
        this.projects = this.projects.filter(pro => pro.id !== project.id)
      });
  }

}
