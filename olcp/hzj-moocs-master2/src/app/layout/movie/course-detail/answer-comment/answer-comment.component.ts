import {Component, Input, OnInit} from '@angular/core';
import {AnswerCommentService} from '../../../../service/answer-comment.service';
import {CommentPage} from '../../../../entity/comment-page';
import {MatDialog} from '@angular/material';
import {NewCommentComponent} from '../new-comment/new-comment.component';
import {ChoiceCommentComponent} from '../choice-comment/choice-comment.component';
import {NewProblemComponent} from '../new-problem/new-problem.component';
import {Disscuss} from '../../../../entity/disscuss';

@Component({
  selector: 'app-answer-comment',
  templateUrl: './answer-comment.component.html',
  styleUrls: ['./answer-comment.component.scss']
})
export class AnswerCommentComponent implements OnInit {

  //课程尾号, 课程的唯一标识
  @Input() coursetailnum;

  select_app: string = '评论';
  //存储评价的内容,
  commentPage: CommentPage;

  //发表的评论
  disscuss: Disscuss = new Disscuss();

  //AnswerCommentService  这是我写的一个服务, 在service文件夹下
  constructor(private answerComponentService: AnswerCommentService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.getAllDisscusses();

  }

  /**
   * 得到所用的评论信息
   */
  getAllDisscusses() {
    this.answerComponentService.getAllDisscusses( this.coursetailnum, 0)
      .subscribe((data: CommentPage) => {
        console.log(data);
        this.commentPage = data;
      })
  }

  /**
   * 点击我要评论按钮, 弹出选择框, 选择相应的内容(我要评论和我有问题), 再给出相应的弹窗
   */
  releaseClick() {
    //打开选择评论的弹窗  ChoiceCommentComponent组件 在choice-comment文件夹中
    const choiceDialogRef = this.dialog.open(ChoiceCommentComponent, {
      width: '40%'    //设置弹窗的宽度
    });
    choiceDialogRef.afterClosed()
      .subscribe(result => {
        //返回的结果是我要评论, 打开我要评论的弹窗 NewCommentComponent组件  在new-comment文件夹中
        if (result === '我要评论') {
          const commentDialogRef = this.dialog.open(NewCommentComponent, {
            width: '50%'      //设置打开弹窗的宽度
          });
          commentDialogRef.afterClosed()
            .subscribe(result => {
              console.log(result);
              //现在还未登录, 使用的用户名是自己定义的
              this.disscuss.username = "hzj";
              var date = new Date();
              let time: string = date.getFullYear()+'年'+(date.getMonth()+1)+'月'+date.getDay()+'日'+date.getHours()+':'+date.getMinutes() + '分' + date.getUTCSeconds() + '秒';
              this.disscuss.time = time;
              this.disscuss.likes = 0;
              this.disscuss.fromc = '';
              this.disscuss.image = 'assets/img/avatar01.jpg';
              this.disscuss.userid = 666;
              this.disscuss.coursetailnum = this.coursetailnum;
              // console.log("当前时间是   " +ddd.getMonth() + 1 +ddd.getDay());
              this.disscuss.content = result;
              this.answerComponentService.addDisscusses(this.disscuss)
                .subscribe(data => {
                  console.log(data);
                  this.getAllDisscusses();

                });
              console.log(this.disscuss.content);
            });
        } //返回的结果是我有问题, 打开我又问题的弹窗  NewProblemComponent组件 在new-problem文件夹中
        else if (result === '我有问题') {
          const problemDialogRef = this.dialog.open(NewProblemComponent, {
            width: '50%'      //设置打开弹窗的宽度
          });
        }
      });
  }

  /**
   * 点击评论或者问答
   * @param value
   */
  changeAppClick(value: string) {
    this.select_app = value;
  }

}
