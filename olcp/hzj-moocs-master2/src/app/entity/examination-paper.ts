/**
 * 试卷实体
 */
import {Topic} from './topic';

export class ExaminationPaper {
  id: number;     //
  pro: Topic;
  protype: string;
  tailnum: number;
  proname: string;    //题目名称
  kind: string;
  problem: any;       //这个不用管
}
