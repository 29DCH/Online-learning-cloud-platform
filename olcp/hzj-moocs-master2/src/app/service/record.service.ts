import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MyRecord} from '../entity/record';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordService {



  constructor(private http: HttpClient) { }


  /**
   * 得到用户最近学习的课程
   * @param usernickname    用户的昵称(昵称是唯一的)
   */
  getAllRecords(usernickname: string, page: number): Observable<MyRecord> {
    const url = `/olcp/user/record/allrecords?usernickname=${usernickname}&page=${page}`;
    return this.http.get<MyRecord>(url);
  }

  /**
   * 添加学习的课程
   * @param myRecord
   */
  addRecord(myRecord: MyRecord): Observable<boolean> {
    const url = `/olcp/user/record/add`;
    return this.http.post<boolean>(url, myRecord);
  }

  /**
   * 获取用户历史学习课程记录的信息(图片等)
   */
  getRecords(coursetailnum: string) {
    const url = `/olcp/user/record/getrecords?coursetailnum=${coursetailnum}`;
    return this.http.get(url);
  }
}
