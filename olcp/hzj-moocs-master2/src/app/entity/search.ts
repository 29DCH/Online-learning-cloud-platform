/**
 * 搜索内容实体
 */
export class Search {
  highlighted: Highlighted[];
  courseName: any;             //课程名
  content: any;                //内容
  numberOfElements: number;
  last: boolean;
  size: number;
  num: number;
  first: boolean;
  totalElements: number;
  totalPages: number;
}


class  Course {
  id: string;
  coursename: string;
  coursesummary: string;
  coursedifficulty: string;
  picturepath: string;
  coursetype: string;
  coursestudypeople: string;
  coursetailnum: string;
}

class Highlights {
  field: any;
  snipplets: any[];
  
}

class Highlighted {
  entity: Course;
  highlights: Highlights[];
}
