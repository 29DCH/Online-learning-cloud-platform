import { Component, OnInit } from '@angular/core';
import {coursenew} from '../../../../entity/coursenew';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseDetailService} from '../../../../service/course-detail.service';
import {Label} from '../../../../entity/label';
import {Directory} from '../../../../entity/directory';
import {RecordService} from '../../../../service/record.service';
import {MyRecord} from '../../../../entity/record';
import {CollectionService} from '../../../../service/collection.service';
import {Collection} from '../../../../entity/collection';

@Component({
  selector: 'app-course-detail-home',
  templateUrl: './course-detail-home.component.html',
  styleUrls: ['./course-detail-home.component.scss']
})
export class CourseDetailHomeComponent implements OnInit {

  //学习课程
  myRecord: MyRecord = new MyRecord();
  //收藏课程
  myCollection: Collection = new Collection();

  //课程的图片
  picturepath: string;
  //储存课程详细信息
  courseDetail: coursenew;
  //存储课程标签
  labeles: Label[];
  //存储课程目录
  course_list: Directory[];

  //老师告诉你能学到什么
  learncontentes: string[];

  //课程须知
  coursenotes: string[];

  constructor(private route: ActivatedRoute,
              private courseDetailService: CourseDetailService,
              private recordService: RecordService,
              private collectionService: CollectionService,
              private router: Router) { }
  ngOnInit() {
    this.getCourseDetrail();
  }

  /**
   * 得到课程详细信息
   */
  getCourseDetrail(): void {
    //  前面的(+)号会把数字字符串转化为数字类型, 课程尾号
    const id = +this.route.snapshot.paramMap.get('id');
    this.courseDetailService.getCourseDetail(id)
      .subscribe((data: coursenew) => {
        console.log(data);
        // console.log(data[0]);
        this.labeles = JSON.parse(data[0].coursetype);
        // console.log(this.labeles);
        this.course_list = JSON.parse(data[0].chapter);
        this.learncontentes = JSON.parse(data[0].learncontent);
        this.coursenotes = JSON.parse(data[0].coursenotes);
        this.courseDetail = data[0];
      });
    this.recordService.getRecords(String(id))
      .subscribe((data: any) => {
        this.picturepath = data.picturepath;
        // console.log(data.picturepath);
      })
  }

  /**
   * 点击目录, 将课程添加到最近学习课程中去
   * @param course_directory
   */
  addToMyCourse(course_directory: string, link: string) {
    let date: Date = new Date();
    this.myRecord.userid = 1;
    this.myRecord.usernickname = 'LJQ';
    this.myRecord.coursename = this.courseDetail.coursename;
    this.myRecord.coursepicture = this.picturepath;
    this.myRecord.changedate = '更新完毕';
    this.myRecord.studied = '0%';
    this.myRecord.spendtime = '0分';
    this.myRecord.studytochapter = course_directory;
    this.myRecord.notenumber = 0;
    this.myRecord.codenumber = 0;
    this.myRecord.questionnumber = 0;
    this.myRecord.time = date.getFullYear()+'月'+date.getMonth()+'月'+date.getDay()+'日';
    this.myRecord.coursetailnum = this.route.snapshot.paramMap.get('id');
    console.log(this.myRecord);
    this.recordService.addRecord(this.myRecord)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['/study/video', link]);
      })

  }

  /**
   * 点击收藏, 将课程添加到我的收藏中
   */
  addCollectionCourse() {
    this.myCollection.userid = 1;
    this.myCollection.usernickname = 'LJQ';
    this.myCollection.coursepicture = this.picturepath;
    this.myCollection.coursename = this.courseDetail.coursename;
    this.myCollection.changedate = '更新完毕';
    this.myCollection.studied = '0';
    this.myCollection.spendtime = '0分';
    this.myCollection.studytochapter = '';
    this.myCollection.notenumber = 0;
    this.myCollection.codenumber = 0;
    this.myCollection.questionnumber = 0;
    this.myCollection.coursetailnum = this.courseDetail.coursetailnum;
    // this.
    this.collectionService.addCollection(this.myCollection)
      .subscribe(data => {
        console.log(data);
      });
  }
  /**
   *   tt: string = "[\"{\\\"name\\\":\\\"数据库\\\",\\\"link\\\":\\\"data\\\"}\",\"{\\\"name\\\":\\\"MySQL\\\",\\\"link\\\":\\\"mysql\\\"}\"]";
   cc: string = "[{course_chapter_name:\"第1章 需求分析\",course_chapter_introduction:\"本章主要讲解在数据库设计过程中如何进行需求分析，以及在需求分中我们所要了解的主要内容是什么。\",directory:[{course_directory:\"1-1数据库设计简介(04:56)\",course_status:\"radio-button\",link:\"117-1-1\"},{course_directory:\"1-2数据库设计的步骤(03:39)\",course_status:\"radio-button\",link:\"117-1-2\"},{course_directory:\"1-3需求分析重要性简介(03:59)\",course_status:\"radio-button\",link:\"117-1-3\"},{course_directory:\"1-4需求分析举例(07:04)\",course_status:\"radio-button\",link:\"117-1-4\"}{course_chapter_name:\"第2章 逻辑设计\",course_chapter_introduction:\"本章主要讲解逻辑设的基本方法以及所要遵守的相关规范，并通过一些简单的例子使大家更容易了解逻辑设计规范的相关内容。\",directory:[,{course_directory:\"2-1ER图(04:36)\",course_status:\"radio-button\",link:\"117-2-1\"},{course_directory:\"2-2设计范式概要(03:05)\",course_status:\"radio-button\",link:\"117-2-2\"},{course_directory:\"2-3第一范式(01:35)\",course_status:\"radio-button\",link:\"117-2-3\"},{course_directory:\"2-4第二范式(05:45)\",course_status:\"radio-button\",link:\"117-2-4\"},{course_directory:\"2-5第三范式(05:18)\",course_status:\"radio-button\",link:\"117-2-5\"},{course_directory:\"2-6BC范式(04:59)\",course_status:\"radio-button\",link:\"117-2-6\"}{course_chapter_name:\"第3章 物理设计\",course_chapter_introduction:\"本章主要讲解物理设计中我们所要注意的一些问题，并以MySQL为例说明了一些使用MySQL进行数据存储时的一些注意事项。\",directory:[,{course_directory:\"3-1数据库物理设计要做什么(04:02)\",course_status:\"radio-button\",link:\"117-3-1\"},{course_directory:\"3-2选择哪种数据库(03:41)\",course_status:\"radio-button\",link:\"117-3-2\"},{course_directory:\"3-3MYSQL常用存储引擎(05:25)\",course_status:\"radio-button\",link:\"117-3-3\"},{course_directory:\"3-4数据库表及字段的命名规则(03:39)\",course_status:\"radio-button\",link:\"117-3-4\"},{course_directory:\"3-5数据库字段类型选择原则(05:34)\",course_status:\"radio-button\",link:\"117-3-5\"},{course_directory:\"3-6数据库如何具体选字段类型(06:39)\",course_status:\"radio-button\",link:\"117-3-6\"},{course_directory:\"3-7数据库设计其它注意事项(07:05)\",course_status:\"radio-button\",link:\"117-3-7\"},{course_directory:\"3-8反范式化表设计(06:06)\",course_status:\"radio-button\",link:\"117-3-8\"}{course_chapter_name:\"第4章 维护优化\",course_chapter_introduction:\"本章主要介绍数据库结构的维护及优化方法，并介绍了什么是水平拆分表及垂直拆分表。\",directory:[,{course_directory:\"4-1数据库维护和优化要做什么(02:30)\",course_status:\"radio-button\",link:\"117-4-1\"},{course_directory:\"4-2数据库如何维护数据字典(02:30)\",course_status:\"radio-button\",link:\"117-4-2\"},{course_directory:\"4-3数据库如何维护索引(05:12)\",course_status:\"radio-button\",link:\"117-4-3\"},{course_directory:\"4-4数据库中适合的操作(05:38)\",course_status:\"radio-button\",link:\"117-4-4\"},{course_directory:\"4-5数据库表的垂直和水平拆分(04:12)\",course_status:\"radio-button\",link:\"117-4-5\"}]}]";

   * var myObj = {
      name: 'Skip',
      age: 2,
      favoriteFood: 'Steak'
    };
   var myObjStr = JSON.stringify(myObj);
   console.log(myObjStr);
   // "{"name":"Skip","age":2,"favoriteFood":"Steak"}"

   console.log(JSON.parse(myObjStr));
   // Object {name:"Skip",age:2,favoriteFood:"Steak"}"
   */
}
