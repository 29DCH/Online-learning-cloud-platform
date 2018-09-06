/**
 * 问答评论的实体
 */
export class Question {
  /**
   * 问答用户名
   */
   username: string;

  /**
   * 问答时间
   */
   time: string;

  /**
   * 问答数
   */
   ansnum: number;
  /**
   * 浏览数
   */
   scannum: number;
  /**
   * 问答来源章节
   */
   fromc: number;
  /**
   * 问答内容
   */
   content: string;
  /**
   * 用户头像
   */
   image: string;
  /**
   * 问答用户Id
   */
   userid: number;
  /**
   * 课程尾号
   */
   coursetailnum: string;
   question: any;
}
