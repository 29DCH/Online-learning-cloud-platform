export class Userexam {
  /**
   * 用户Id
   */
   userid: number;

  /**
   * 成绩
   */
   grade: number;

  /**
   * 正确个数
   */
   correctnum: number;

  /**
   * 题目总数
   */
   total: number;

  /**
   * 试卷名字
   */
   examname: string;

  /**
   * 考试难度
   */
   difficulty: number;

  /**
   * 花费时间
   */
   time: number;

  /**
   * 考试尾号
   */
   tailnum: string;

  /**
   * 提交数量
   */
   submitnum: number;

  /**
   * 结束时间
   */
  endtime: string;

  userexam: any;


  constructor(userid: number, grade: number, correctnum: number, total: number, examname: string, difficulty: number, time: number, tailnum: string, submitnum: number, endtime: string) {
    this.userid = userid;
    this.grade = grade;
    this.correctnum = correctnum;
    this.total = total;
    this.examname = examname;
    this.difficulty = difficulty;
    this.time = time;
    this.tailnum = tailnum;
    this.submitnum = submitnum;
    this.endtime = endtime;
  }
}
