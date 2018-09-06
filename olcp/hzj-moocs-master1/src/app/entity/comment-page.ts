import {Content} from './content';

export class CommentPage {
  content: Content[];           //评论内容
  sort: any[];
  last: boolean;                //时候是最后一页
  first: boolean;               //是否是第一页
  number: number;               //所在的页数
  size: number;                 //每页的最大数量
  numberOfElements: number;     //单前页的数量
  totalElements: number;        //总共的数量
  totalPages: number;           //分页的数量
}
