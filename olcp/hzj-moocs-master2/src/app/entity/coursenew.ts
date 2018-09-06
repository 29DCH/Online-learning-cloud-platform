import {Label} from './label';
import {Directory} from './directory';

export interface coursenew {
  /**
   * 课程序号, 唯一标识
   */
  coursenewid: number;
  /**
   * 课程描述
   */
  coursesummary: string;
  /**
   * 课程类型
   */
  coursetype: string;
  /**
   * 课程时长
   */
  coursetime: string;
  /**
   * 课程难度
   */
  coursedifficulty: string;
  /**
   * 学习人数
   */
  coursestudypeople: string;
  /**
   * 课程名
   */
  coursename: string;
  /**
   * 课程网址尾数
   */
  coursetailnum: string;
  /**
   * 老师图片路径
   */
  teacherpicturepath: string;
  /**
   * 老师名字
   */
  teachername: string;
  /**
   * 老师职业方向
   */
  teacherjob: string;
  /**
   * 问答评论数量
   */
  qacommentnum: string;
  /**
   * 用户评论数量
   */
  user_evaluationnum: string;
  /**
   * 课程须知
   */
  coursenotes: string;
  /**
   * 老师告诉你能学到什么?
   */
  learncontent: string;
  /**
   * 热门专题标签
   */
  label: string;
  /**
   *　课程章节详细信息
   */
  chapter: string;
  //课程评价等级
  courseoverallrating: string;
}
