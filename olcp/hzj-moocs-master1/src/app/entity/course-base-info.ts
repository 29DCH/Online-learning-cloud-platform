export class CourseBaseInfo {
  courseid1: number;            //课程序号
  coursesummary: string;        //课程描述
  coursetype: string;           //课程类型
  coursedifficulty: string;     //课程难度
  coursestudypeople: string;    //学习人数
  coursename: string;           //课程名
  coursetailnum: string;        //课程网址尾数
  picturepath: string;          //图片路径


  constructor(courseid1: number, coursesummary: string, coursetype: string, coursedifficulty: string, coursestudypeople: string, coursename: string, coursetailnum: string, picturepath: string) {
    this.courseid1 = courseid1;
    this.coursesummary = coursesummary;
    this.coursetype = coursetype;
    this.coursedifficulty = coursedifficulty;
    this.coursestudypeople = coursestudypeople;
    this.coursename = coursename;
    this.coursetailnum = coursetailnum;
    this.picturepath = picturepath;
  }
}
