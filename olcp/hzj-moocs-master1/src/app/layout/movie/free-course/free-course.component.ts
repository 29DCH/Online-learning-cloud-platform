import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {freeCourse} from '../../../entity/freeCourse';
import {FreeCourseService} from '../../../service/free-course.service';

@Component({
  selector: 'app-free-course',
  templateUrl: './free-course.component.html',
  styleUrls: ['./free-course.component.scss']
})
export class FreeCourseComponent implements OnInit {

  //标记地址是否传有数据
  first: boolean = true;
  //表示当前分页, 默认值是 1
  current: number = 1;
  //分页总数
  allCurrent: number;
  //存储课程信息
  courses: freeCourse;
  //表示是最新
  maxNew: boolean = true;
  //表示最热的课程
  maxHot: boolean = false;
  //难度选择的参数,  这个数据要传到后台, 默认值是 0
  choice_difficult: string = '0';
  //选择方向
  choice_direction = '全部';
  //选择方向的参数, 默认值是 all
  direction_link = 'all';
  //选择分类
  choice_classification = '全部';

  course_direction: any[] = [
    {direction: '全部', link: 'all'},
    {direction: '前沿技术', link: 'nt'},
    {direction: '前端开发', link: 'fe'},
    {direction: '后端开发', link: 'be'},
    {direction: '移动开发', link: 'mobile'},
    {direction: '算法&数学', link: 'algorithm'},
    {direction: '云计算&大数据', link: 'cb'},
    {direction: '运维&测试', link: 'op'},
    {direction: '数据库', link: 'data'},
    {direction: 'UI设计', link: 'photo'},
    {direction: '游戏', link: 'game'},
  ];

  course_type: any[] = [
    {direction: '微服务', link: 'wff', ascription: '前沿技术'},
    {direction: '区块链', link: 'blockchain', ascription: '前沿技术'},
    {direction: '以太坊', link: 'ethereum', ascription: '前沿技术'},
    {direction: '人工智能', link: 'ai', ascription: '前沿技术'},
    {direction: '机器学习', link: 'machine', ascription: '前沿技术'},
    {direction: '深度学习', link: 'deep', ascription: '前沿技术'},
    {direction: '计算机视觉', link: 'pcvision', ascription: '前沿技术'},
    {direction: '数据分析&挖掘', link: 'datafxwj', ascription: '前沿技术'},
    {direction: 'HTML/css', link: 'html', ascription: '前端开发'},
    {direction: 'JavaScript', link: 'javascript', ascription: '前端开发'},
    {direction: 'Vue.js', link: 'vuejs', ascription: '前端开发'},
    {direction: 'React.JS', link: 'reactjs', ascription: '前端开发'},
    {direction: 'Angular', link: 'angular', ascription: '前端开发'},
    {direction: 'Node.js', link: 'nodejs', ascription: '前端开发'},
    {direction: 'jQuery', link: 'jquery', ascription: '前端开发'},
    {direction: 'Bootstrap', link: 'bootstrap', ascription: '前端开发'},
    {direction: 'Sass/Less', link: 'sassless', ascription: '前端开发'},
    {direction: 'WebApp', link: 'webapp', ascription: '前端开发'},
    {direction: '前端工具', link: 'fetool', ascription: '前端开发'},
    {direction: 'Java', link: 'java', ascription: '后端开发'},
    {direction: 'SpringBoot', link: 'springboot', ascription: '后端开发'},
    {direction: 'Python', link: 'python', ascription: '后端开发'},
    {direction: '爬虫', link: 'crawler', ascription: '后端开发'},
    {direction: 'Django', link: 'django', ascription: '后端开发'},
    {direction: 'Go', link: 'go', ascription: '后端开发'},
    {direction: 'PHP', link: 'php', ascription: '后端开发'},
    {direction: 'C', link: 'c', ascription: '后端开发'},
    {direction: 'C++', link: 'cplusplus', ascription: '后端开发'},
    {direction: 'C#', link: 'csharp', ascription: '后端开发'},
    {direction: 'Ruby', link: 'ruby', ascription: '后端开发'},
    {direction: 'Android', link: 'android', ascription: '移动开发'},
    {direction: 'iOS', link: 'ios', ascription: '移动开发'},
    {direction: 'React native', link: 'reactnative', ascription: '移动开发'},
    {direction: 'WEEX', link: 'weex', ascription: '移动开发'},
    {direction: '算法与数据结构', link: 'algorithmds', ascription: '算法&数学'},
    {direction: '数学', link: 'maths', ascription: '算法&数学'},
    {direction: '大数据', link: 'bigdata', ascription: '云计算&大数据'},
    {direction: 'Hadoop', link: 'hadoop', ascription: '云计算&大数据'},
    {direction: 'Spark', link: 'spark', ascription: '云计算&大数据'},
    {direction: 'Hbase', link: 'hbase', ascription: '云计算&大数据'},
    {direction: 'Storm', link: 'storm', ascription: '云计算&大数据'},
    {direction: '云计算', link: 'cloudcomputing', ascription: '云计算&大数据'},
    {direction: 'AWS', link: 'aws', ascription: '云计算&大数据'},
    {direction: 'Docker', link: 'docker', ascription: '云计算&大数据'},
    {direction: 'Kubernetes', link: 'kubernetes', ascription: '云计算&大数据'},
    {direction: '运维', link: 'dba', ascription: '运维&测试'},
    {direction: '自动化运维', link: 'oma', ascription: '运维&测试'},
    {direction: 'Linux', link: 'linux', ascription: '运维&测试'},
    {direction: '测试', link: 'test', ascription: '运维&测试'},
    {direction: '功能测试', link: 'gntest', ascription: '运维&测试'},
    {direction: '性能测试', link: 'xntest', ascription: '运维&测试'},
    {direction: '自动化测试', link: 'zdhtest', ascription: '运维&测试'},
    {direction: '接口测试', link: 'jktest', ascription: '运维&测试'},
    {direction: '安全测试', link: 'aqtest', ascription: '运维&测试'},
    {direction: 'MySQL', link: 'mysql', ascription: '数据库'},
    {direction: 'Redis', link: 'redis', ascription: '数据库'},
    {direction: 'MongoDB', link: 'mongodb', ascription: '数据库'},
    {direction: 'Oracle', link: 'oracle', ascription: '数据库'},
    {direction: 'SQL Server', link: 'sqlserver', ascription: '数据库'},
    {direction: 'NoSql', link: 'nosql', ascription: '数据库'},
    {direction: '模型制作', link: 'modelmaking', ascription: 'UI设计'},
    {direction: '动效动画', link: 'dxdh', ascription: 'UI设计'},
    {direction: '设计基础', link: 'uijc', ascription: 'UI设计'},
    {direction: '设计工具', link: 'uitool', ascription: 'UI设计'},
    {direction: 'APPUI设计', link: 'uiapp', ascription: 'UI设计'},
    {direction: '产品交互', link: 'ixd', ascription: 'UI设计'},
    {direction: 'Unity 3D', link: 'unity3d', ascription: '游戏'},
    {direction: 'Cocos2d-x', link: 'cocos2dx', ascription: '游戏'},

  ];

  course_difficult: any[] = [
    {name: '全部', link: '0'},
    {name: '入门', link: '1'},
    {name: '初级', link: '2'},
    {name: '中级', link: '3'},
    {name: '高级', link: '4'},
  ];
  constructor(private freeCourseService: FreeCourseService,
              private routeInfo: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // this.getNewCourseByCondition();
    this.routeInfo.queryParams.subscribe(queryParams => {
      //得到当前页数参数
      this.current = queryParams['page'];
      //得到方向的参数
      this.direction_link = queryParams['direction'];
      //得到难度的参数
      this.choice_difficult = queryParams['is_easy'];
      //如果单前页数的参数为undefined,给一个默认值 1
      if(!this.current) {
        this.current = 1;
      }
      //如果方向有值, 设置choice_direction(方向) 和 choice_classification(分类)
      //如果方向没有值, 给方向一个默认值 all
      if (this.direction_link && this.direction_link != 'all') {
        for (let di of this.course_direction) {
          if (di.link == this.direction_link) {
            this.choice_direction = di.direction;
            this.choice_classification = '全部';
          }
        }
        for (let di of this.course_type) {
          if (di.link == this.direction_link) {
            this.choice_direction = di.ascription;
            this.choice_classification = di.direction;
          }
        }
      } else {
        this.direction_link = 'all';
      }
      // 如果难度没有值, 给予一个默认值 0
      if (!this.choice_difficult) {
        this.choice_difficult = '0';
      }
      //得到数据
      this.showData();
    });
  }
  /**
   * 得到最新课程,通过页数
   */
  getNewcoursesIndex() {
    this.freeCourseService.getNewcoursesIndex(this.current-1)
      .subscribe((data: freeCourse) => {
        //得到数据
        this.courses = data;
        //设置单前分页数  this.courses.number  是以0开头
        this.current = this.courses.number + 1;
        //设置总的分页数
        this.allCurrent = this.courses.totalPages + 1;
        console.log(this.allCurrent);
        this.setCourses();
      });
  }

  /**
   * 得到最新课程, 通过页数, 方向, 难度
   */
  getNewCourseByCondition() {
    this.freeCourseService.getNewCourseByCondition(this.current - 1, this.direction_link, this.choice_difficult)
      .subscribe(data => {
        console.log(data);
        //得到数据
        this.courses = data;
        //设置单前分页数  this.courses.number  是以0开头
        this.current = this.courses.number + 1;
        //设置总的分页数
        this.allCurrent = this.courses.totalPages + 1;
        console.log(this.allCurrent);
        this.setCourses();
      });
  }

  /**
   * 得到最热课程 通过分页
   */
  getHotCourseIndex() {
    this.freeCourseService.getHotCourseIndex(this.current - 1)
      .subscribe((data: freeCourse) => {
        //得到数据
        this.courses = data;
        //设置单前分页数  this.courses.number  是以0开头
        this.current = this.courses.number + 1;
        //设置总的分页数
        this.allCurrent = this.courses.totalPages + 1;
        this.setCourses();
      })
  }

  /**
   * 得到最新课程, 通过页数, 方向, 难度
   */
  getHotCourseByCondition() {
    this.freeCourseService.getHotCourseByCondition(this.current - 1, this.direction_link, this.choice_difficult)
      .subscribe(data => {
        console.log(data);
        //得到数据
        this.courses = data;
        //设置单前分页数  this.courses.number  是以0开头
        this.current = this.courses.number + 1;
        //设置总的分页数
        this.allCurrent = this.courses.totalPages + 1;
        console.log(this.allCurrent);
        this.setCourses();
      });
  }

  /**
   * 选择分页
   */
  pageClick(page: number) {
    this.current = page;
    this.sendParameter(this.direction_link, this.choice_difficult, this.current);
  }

  /**
   * 显示数据
   */
  showData() {
    console.log('是接口方式打开'+this.direction_link);
    if (this.maxNew) {    //如果是最新课程
      if (this.direction_link == 'all' && this.choice_difficult == '0') {
        this.getNewcoursesIndex();
      } else {
        this.getNewCourseByCondition();
      }
    } else if (this.maxHot) {   //如果是最热课程
      if (this.direction_link == 'all' && this.choice_difficult == '0') {
        this.getHotCourseIndex();
      } else {
        this.getHotCourseByCondition();
      }
    }
  }


  /**
   * 选择最新
   */
  getNewCourse() {
    this.current = 1;
    this.maxNew = true;
    this.maxHot = false;
    this.showData();
  }

  /**
   * 选择最热
   */
  getHotCourses() {
    //将最热设置为true
    this.maxHot = true;
    //将最新设置为false
    this.maxNew = false;
    this.current = 1;
    this.showData();
  }

  /**
   * 选择方向
   * @param value
   */
  directionChoiceClick(value: any):void {
    //重置页数
    this.current = 1;
    //重置难度
    this.choice_difficult = '0';
    //设置选择方向的参数
    this.direction_link = value.link;
    //设置当前选择的方向
    this.choice_direction = value.direction;
    //重置选择的类别
    this.choice_classification = '全部';
    //传递参数
    this.sendParameter(this.direction_link, this.choice_difficult, this.current);
  }

  /**
   * 选择类型
   * @param value
   */
  classificationChoiceClick(value: any) {
    //重置页数
    this.current = 1;
    //重置难度
    this.choice_difficult = '0';
    //设置选择的方向参数
    this.direction_link = value.link;
    //设置选择参数
    this.choice_direction = value.ascription;
    //设置选择的分类
    this.choice_classification = value.direction;
    //传递参数
    this.sendParameter(this.direction_link, this.choice_difficult, this.current);
  }

  /**
   * 选择难度
   * @param value
   */
  difficultChoiceClick(value: any): void {
    //重置页数
    this.current = 1;
    //设置难度的参数
    this.choice_difficult = value.link;
    this.sendParameter(this.direction_link, this.choice_difficult, this.current);
  }


  /**
   * 发送参数
   * @param {string} direction
   * @param {string} is_easy
   * @param {number} page
   */
  sendParameter(direction: string, is_easy: string, page: number) {
    if (direction == 'all') {
      if (is_easy == '0') {
        if (page == 1) {
          this.router.navigate(['/study/freeCourse']);
        } else {
          this.router.navigate(['/study/freeCourse'], {
            queryParams: {
              page: this.current
            }
          });
        }
      } else {
        this.router.navigate(['/study/freeCourse'], {
          queryParams: {
            is_easy: this.choice_difficult,
            page: this.current
          }
        });
      }
    } else if (is_easy == '0') {
      if (page == 1) {
        this.router.navigate(['/study/freeCourse'], {
          queryParams: {
            direction: this.direction_link
          }
        });
      } else {
        this.router.navigate(['/study/freeCourse'], {
          queryParams: {
            direction: this.direction_link,
            page: this.current
          }
        });
      }
    } else if (page == 1) {
      this.router.navigate(['/study/freeCourse'], {
        queryParams: {
          direction: this.direction_link,
          is_easy: this.choice_difficult
        }
      });
    } else {
      this.router.navigate(['/study/freeCourse'], {
        queryParams: {
          direction: this.direction_link,
          is_easy: this.choice_difficult,
          page: this.current,
        }
      });
    }
  }


  /**
   * 这里设置下课程的难度, 由于返回的数据是1, 2, 3, 4
   */
  setCourses() {
    this.courses.content.forEach((value, index) => {
      if (value.coursedifficulty === '1') {
        value.coursedifficulty = '入门';
      } else if (value.coursedifficulty === '2') {
        value.coursedifficulty = '初级';
      } else if (value.coursedifficulty === '3') {
        value.coursedifficulty = '中级';
      } else if (value.coursedifficulty === '4') {
        value.coursedifficulty = '高级';
      }
    })
  }

}
