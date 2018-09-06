export class ExamType {
  /**
   * 考试Id
   */
  paperid: number;
  /**
   * 考试名称
   */
  examname: string;
  /**
   * 考试类型
   */
  examtype: string;
  /**
   * 考试时间
   */
  time: string;
  /**
   * 图片路径
   */
   image: string;
  /**
   * 考试难度
   */
  difficulty: string;
  /**
   * 总分
   */
  totalscore: string;

  tailnum: string;  //试卷尾号
  exam: any;          //这个数据是空的, 不用管
}
