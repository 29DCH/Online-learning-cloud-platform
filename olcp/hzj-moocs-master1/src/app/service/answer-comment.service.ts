import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CommentPage} from '../entity/comment-page';
import {Disscuss} from '../entity/disscuss';
import {Question} from '../entity/question';

@Injectable({
  providedIn: 'root'
})
export class AnswerCommentService {

  constructor(private http: HttpClient) { }

  /**
   * 获得课程的所用评论
   * @param {string} coursetailnum    课程尾号, 课程的唯一标识
   * @param {number} page   //分页数
   */
  getAllDisscusses(coursetailnum: string, page: number): Observable<CommentPage> {
    const url = `/olcp/user/disscuss/alldisscusses?coursetailnum=${coursetailnum}&page=${page}`;
    return this.http.get<CommentPage>(url);
  }

  /**
   * 发表评论
   * @param disscuss
   */
  addDisscusses(disscuss: Disscuss): Observable<boolean> {
    const url = `/olcp/user/disscuss/add`;
    return this.http.post<boolean>(url, disscuss);
  }

  getAllQuestions(coursetailnum: string, page: number) {

  }

  addQuestions(question: Question): Observable<boolean> {
    const url = `/olcp/user/question/add`;
    return this.http.post<boolean>(url, question);
  }

}
