import { Component, OnInit } from '@angular/core';
import {RecordService} from '../../../../service/record.service';
import {MyRecord} from '../../../../entity/record';

@Component({
  selector: 'app-study-course',
  templateUrl: './study-course.component.html',
  styleUrls: ['./study-course.component.scss']
})
export class StudyCourseComponent implements OnInit {

  page: number = 0;

  // course_list: any[] = [
  //   {course_img: 'assets/img/java.jpg', course_name: 'Typescript入门', status: '更新完毕', progress: '96%', use_time: '3小时11分', study: '1-2 TypeScript-课程内容介绍', note: '0', code: '0', answer: '0'},
  //   {course_img: 'assets/img/java.jpg', course_name: 'Typescript入门', status: '更新完毕', progress: '96%', use_time: '3小时11分', study: '1-2 TypeScript-课程内容介绍', note: '0', code: '0', answer: '0'},
  //
  // ];

  course_list: MyRecord[];
  constructor(private recordService: RecordService) { }

  ngOnInit() {
    this.recordService.getAllRecords('LJQ', this.page)
      .subscribe((data: any) => {
        console.log(data);
        this.course_list = data.content;
        console.log(this.course_list);
      });
    // this.recordService.getRecords()
  }

}
