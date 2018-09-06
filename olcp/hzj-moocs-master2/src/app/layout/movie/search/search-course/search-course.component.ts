import {Component, Input, OnInit} from '@angular/core';
import {Search} from '../../../../entity/search';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.scss']
})
export class SearchCourseComponent implements OnInit {

  @Input() courses: Search;

  constructor() { }

  ngOnInit() {
  }

}
