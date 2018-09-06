/**
 * 发表评论的实体
 */
export class Disscuss {

  /**
   * 评论用户名
   */
  username: string;
  /**
   * 评论时间
   */
  time: string;
  /**
   * 评论点赞数
   */
  likes: number;
  /**
   * 评论来源章节
   */
  fromc: string;
  /**
   * 评论内容
   */
  content: string;
  /**
   * 用户头像
   */
  image: string;
  /**
   * 评论用户Id
   */
   userid: number;
  /**
   * 课程尾号
   */
  coursetailnum: number;
  disscuss: any;
}
