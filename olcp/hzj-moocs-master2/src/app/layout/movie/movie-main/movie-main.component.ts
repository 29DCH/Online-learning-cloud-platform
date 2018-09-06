import { Component, OnInit } from '@angular/core';
import {CourseBaseInfo} from '../../../entity/course-base-info';


@Component({
  selector: 'app-movie-main',
  templateUrl: './movie-main.component.html',
  styleUrls: ['./movie-main.component.scss']
})
export class MovieMainComponent implements OnInit {

  showNavigationArrows = false;
  showNavigationIndicators = false;

  show_menu: string = '';

  courseImgUrl: string = "assets/img/carousel/";
  carouseImg: any[] = [
    {img: this.courseImgUrl+"Offer神器.jpeg", color: "rgb(21, 119, 228)"},
    {img: this.courseImgUrl+"校招算法题.jpeg", color: "rgb(254, 206, 20)"},
    {img: this.courseImgUrl+"笔试干货.jpeg", color: "rgb(37, 33, 94)"},
    {img: this.courseImgUrl+"牛客职播.png", color: "rgb(25, 114, 233)"},
    {img: this.courseImgUrl+"笔经面经.jpg", color: "rgb(71, 80, 89)"},
  ];

  menu_link: any[] = [
    {value: '前沿 / 区块链 / 人工智能'},
    {value: '前端 / 小程序 / JS'},
    {value: '后端 / JAVA / Python'},
    {value: '移动 / Android / iOS'},
    {value: '云计算 / 大数据 / 容器'},
    {value: '运维 / 测试 / 数据库'},
    {value: 'UI设计 / 3D动画 / 游戏'},
  ];

  directions: any[] = [
    {title: 'Web前端攻城狮', subtitle: '互联网时代最火爆的技术', className: 'i-web', link: '#'},
    {title: 'Java攻城狮', subtitle: '综合就业排名第一', className: 'i-java', link: '#'},
    {title: 'Android攻城狮', subtitle: '移动设备市场份额第一', className: 'i-android', link: '#'},
    {title: 'PHP攻城狮', subtitle: '世界上最好的语言：）', className: 'i-php', link: '#'},
    {title: 'iOS攻城狮', subtitle: '可能是全球最好用的系统', className: 'i-ios', link: '#'},
  ];

  second_menu: any[] = [
    {
      menu: [
        {
          title: '前沿技术',
          value: [
            {direction: '微服务', link: 'wff'},
            {direction: '区块链', link: 'blockchain'},
            {direction: '以太坊', link: 'ethereum'},
            {direction: '人工智能', link: 'ai'},
            {direction: '机器学习', link: 'machine'},
            {direction: '深度学习', link: 'deep'},
            {direction: '计算机视觉', link: 'pcvision'},
            {direction: '数据分析&挖掘', link: 'datafxwj'},
          ]
        }
      ],
      ascription: '前沿 / 区块链 / 人工智能'
    },
    {
      menu: [
        {
          title: '前端开发',
          value: [
            {direction: 'HTML/css', link: 'html'},
            {direction: 'JavaScript', link: 'javascript'},
            {direction: 'Vue.js', link: 'vuejs'},
            {direction: 'React.JS', link: 'reactjs'},
            {direction: 'Angular', link: 'angular'},
            {direction: 'Node.js', link: 'nodejs'},
            {direction: 'jQuery', link: 'jquery'},
            {direction: 'Bootstrap', link: 'bootstrap'},
            {direction: 'Sass/Less', link: 'sassless'},
            {direction: 'WebApp', link: 'webapp'},
            {direction: '前端工具', link: 'fetool'},
          ]
        }
      ],
      ascription: '前端 / 小程序 / JS'
    },
    {
      menu: [
        {
          title: '后端开发',
          value: [
            {direction: 'Java', link: 'java'},
            {direction: 'SpringBoot', link: 'springboot'},
            {direction: 'Python', link: 'python'},
            {direction: '爬虫', link: 'crawler'},
            {direction: 'Django', link: 'django'},
            {direction: 'Go', link: 'go'},
            {direction: 'PHP', link: 'php'},
            {direction: 'C', link: 'c', ascription: '后端开发'},
            {direction: 'C++', link: 'cplusplus'},
            {direction: 'C#', link: 'csharp'},
            {direction: 'Ruby', link: 'ruby'},
          ]
        }
      ],
      ascription: '后端 / JAVA / Python'
    },
    {
      menu: [
        {
          title: '移动开发',
          value: [
            {direction: 'Android', link: 'android'},
            {direction: 'iOS', link: 'ios'},
            {direction: 'React native', link: 'reactnative'},
            {direction: 'WEEX', link: 'weex'},
          ]
        }
      ],
      ascription: '移动 / Android / iOS'
    },
    {
      menu: [
        {
          title: '算法&数学',
          value: [
            {direction: '算法与数据结构', link: 'algorithmds'},
            {direction: '数学', link: 'maths'},
          ]
        },
        {
          title: '云计算&大数据',
          value: [
            {direction: '大数据', link: 'bigdata'},
            {direction: 'Hadoop', link: 'hadoop'},
            {direction: 'Spark', link: 'spark'},
            {direction: 'Hbase', link: 'hbase'},
            {direction: 'Storm', link: 'storm'},
            {direction: '云计算', link: 'cloudcomputing'},
            {direction: 'AWS', link: 'aws'},
            {direction: 'Docker', link: 'docker'},
            {direction: 'Kubernetes', link: 'kubernetes'},

          ]
        }
      ],
      ascription: '云计算 / 大数据 / 容器'
    },
    {
      menu: [
        {
          title: '运维&测试',
          value: [
            {direction: '运维', link: 'dba'},
            {direction: '自动化运维', link: 'oma'},
            {direction: 'Linux', link: 'linux'},
            {direction: '测试', link: 'test'},
            {direction: '功能测试', link: 'gntest'},
            {direction: '性能测试', link: 'xntest'},
            {direction: '自动化测试', link: 'zdhtest'},
            {direction: '接口测试', link: 'jktest'},
            {direction: '安全测试', link: 'aqtest'},
          ]
        },
        {
          title: '数据库',
          value: [
            {direction: 'MySQL', link: 'mysql'},
            {direction: 'Redis', link: 'redis'},
            {direction: 'MongoDB', link: 'mongodb'},
            {direction: 'Oracle', link: 'oracle'},
            {direction: 'SQL Server', link: 'sqlserver'},
            {direction: 'NoSql', link: 'nosql'},

          ]
        }
      ],
      ascription: '运维 / 测试 / 数据库'
    },
    {
      menu: [
        {
          title: 'UI设计',
          value: [
            {direction: '模型制作', link: 'modelmaking'},
            {direction: '动效动画', link: 'dxdh'},
            {direction: '设计基础', link: 'uijc'},
            {direction: '设计工具', link: 'uitool'},
            {direction: 'APPUI设计', link: 'uiapp'},
            {direction: '产品交互', link: 'ixd'},

          ]
        },
        {
          title: '游戏',
          value: [
            {direction: 'Unity 3D', link: 'unity3d'},
            {direction: 'Cocos2d-x', link: 'cocos2dx'},
          ]
        }
      ],
      ascription: 'UI设计 / 3D动画 / 游戏'
    },
  ];



  /**
   *
   * @type {CourseBaseInfo}
   */
  courses: CourseBaseInfo = new CourseBaseInfo(1, '用Go语言实现一个区块链私有链', 'Go 区块链', '中级', '151', '私有区块链，我们一起GO', '1021', 'https://img1.mukewang.com/5b4705c90001fc9506000338-240-135.jpg');

  constructor() { }

  ngOnInit() {
  }

  showMenu(value, $event: Event) {
    this.show_menu = value;
    console.log($event.target);
    console.log(this.show_menu);
  }

  enterCarousel(ev: Event) {
    console.log(ev);
  }

}
