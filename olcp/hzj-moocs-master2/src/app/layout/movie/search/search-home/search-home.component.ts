import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {SearchService} from '../../../../service/search.service';
import {Search} from '../../../../entity/search';
import {DomSanitizer} from '@angular/platform-browser';
import index from '@angular/cli/lib/cli';

@Component({
  selector: 'app-search-home',
  templateUrl: './search-home.component.html',
  styleUrls: ['./search-home.component.scss']
})
export class SearchHomeComponent implements OnInit {

  imgs: string[] = [
    '1', '2', '3', '4', '5', '6'
  ];

  searchValue: string;

  search: Search = new Search();

  page: number = 0;

  constructor(private activatedRoute: ActivatedRoute,
              private searchService: SearchService,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.activatedRoute.queryParams
      .subscribe((params: Params) => {
        this.searchValue = params['key'];
        this.getCourseBySearch();
        console.log('搜索的内容' + this.searchValue);

      })

  }

  getCourseBySearch() {
    this.searchService.getCourseBySearch(this.searchValue, this.page)
      .subscribe((data: any) => {
        // console.log(data);
        this.search.totalPages = data.totalPages;
        this.search.highlighted = data.highlighted;
        this.search.numberOfElements = data.numberOfElements;
        this.search.last = data.last;
        this.search.size = data.size;
        this.search.num = data.number;
        this.search.first = data.first;
        this.search.totalElements = data.totalElements;
        this.search.totalPages = data.totalPages;
        console.log(this.search);
        this.search.highlighted.forEach((value, index) => {
          value.highlights.forEach((value1, index1) => {
            if (index1 === 1) {
              console.log(value1.snipplets[0]);
              let temp: any = value1.snipplets[0];
              console.log(temp);
              this.search.courseName = this.sanitizer.bypassSecurityTrustHtml(temp);
            }
            if (index1 === 2) {
              let temp: any = value1.snipplets[0];
              this.search.content = this.sanitizer.bypassSecurityTrustHtml(temp);
            }
            // if (index1 === 1) {
            //   let temp: any = value1.snipplets[0];
            //   console.log(temp);
            //   this.search.courseName = this.sanitizer.bypassSecurityTrustHtml(temp);
            //   console.log(this.search.courseName);
            // }
            //


            /*value1.snipplets.forEach((value2, index2) => {
              // console.log(value2);
              console.log(index2);


            })*/
            // if (index1 === 1) {
            //
            // }
          })
        })


      });

  }

}
