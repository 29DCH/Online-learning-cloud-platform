import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {coursenew} from '../entity/coursenew';

@Injectable({
  providedIn: 'root'
})
export class CourseDetailService {

  constructor(private http: HttpClient) { }


  /**
   * 获取课程信息信息的服务
   * @param {number} id
   * @returns {Observable<coursenew>}
   */
  getCourseDetail(id: number): Observable<coursenew> {
    const url = `/olcp/course/detailed_page?coursetailnum=${id}`;

    return this.http.get<coursenew>(url)
      .pipe(
        catchError(this.handleError<coursenew>('getCourseDetail'))
      );
  }


  /**
   * 异常
   * @param {string} operation
   * @param {T} result
   * @returns {(error: any) => Observable<T>}
   */

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
