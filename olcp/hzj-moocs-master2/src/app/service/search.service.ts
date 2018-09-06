import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  /**
   * 搜索
   * @param coursename      搜索内容
   * @param page    页数
   */
  getCourseBySearch(coursename: string, page: number) {
    const url = `/olcp/user/search/freecourses?coursename=${coursename}&page=${page}`;
    return this.http.get(url);

  }
}
