import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ExamType} from '../entity/exam-type';
import {Proans} from '../entity/proans';
import {Userexam} from '../entity/userexam';

@Injectable({
  providedIn: 'root'
})
export class ExamTypeService {

  constructor(private http: HttpClient) { }

  getExamType(): Observable<ExamType[]> {
    const url = `/olcp/admin/exam/allexams`;
    return this.http.get<ExamType[]>(url);
  }

  getExamTypeValue(id: number): Observable<ExamType> {
    const url = `/olcp/admin/exam/oneexam?paperid=${id}`;
    return this.http.get<ExamType>(url);
  }

  /**
   * 得到试卷的服务
   * @param tailnum 表示是那套试卷
   */
  getTopic(tailnum: string): Observable<any> {
    const url = `/olcp/admin/problem/allproblems?tailnum=${tailnum}`;
    return this.http.get<any>(url);
  }


  /**
   * 得到提交题目的分数
   * @param proans
   */
  getGrade(proans: Proans[]): Observable<any> {
    const  url = `/olcp/admin/proans/grade`;
    return this.http.post<any>(url, proans);
  }

  /**
   * 得到考试的答案
   * @param tailnum
   */
  getAllAnswers(tailnum: string) {
    const url = `/olcp/admin/proans/allanswers?tailnum=${tailnum}`;
    return this.http.get(url);
  }

  addUserExam(userexam: Userexam) {
    const url = `/olcp/user/userexam/add`;
    return this.http.post(url, userexam);
  }

  getExamInfo(userid: number, tailnum: string, page: number) {
    const url = `/olcp/user/userexam/examinfo?userid=${userid}&tailnum=${tailnum}&page=${page}`;
    return this.http.get(url);
  }
}
