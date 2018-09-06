/**
 * 课程评论的实体
 */
export class MyRecord {

  userid: number;                 //用户Id
  usernickname: string;           //用户昵称
  coursepicture: string;          //图片路径
  coursename: string;             //课程名
  changedate: string;                 //更新时间
  studied: string;                //进度
  spendtime: string;              //花费分钟
  studytochapter: string;         //学到的章节
  notenumber: number;             //笔记数量
  codenumber: number;             //代码数量
  questionnumber: number;         //问题数量
  time: string;                   //时间
  coursetailnum: string;          //课程尾号
  record: any;
}
