import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {freeCourse} from '../entity/freeCourse';
import {catchError} from 'rxjs/operators';
import {consoleTestResultHandler} from 'tslint/lib/test';

@Injectable({
  providedIn: 'root'
})
export class FreeCourseService {



  constructor(private http: HttpClient) { }
  /**
   * 最新课程的分页的服务  传给后台 page=id(eg: 2)
   * @param {number} id
   * @returns {Observable<freeCourse>}
   */
  getNewcoursesIndex(id: number): Observable<freeCourse> {
    const url = `/olcp/course/allnewcourses?page=${id}`;
    return this.http.get<freeCourse>(url)
      .pipe(
        catchError(this.handleError<freeCourse>('getNewcoursesIndex'))
      );
  }

  /**
   * 最新课程的分页, 传给后台的参数有三个,
   * @param {number} page 页数
   * @param {string} direction 方向
   * @param {string} difficult 难度
   * @returns {Observable<freeCourse>}
   */
  getNewCourseByCondition(page: number, direction: string, difficult: string) :Observable<freeCourse> {
    if (difficult == '0') {
      //难度为所有是,调用难度为all的接口
      const url = `/olcp/course/allnewcourses/sortbylast?direction=${direction}&page=${page}`;
      return this.http.get<freeCourse>(url)
        .pipe(
          catchError(this.handleError<freeCourse>('getNewCourseByCondition'))
        )
    } else {
      const url = `/olcp/course/allnewcourses/sortbylast1?direction=${direction}&coursedifficulty=${difficult}&page=${page}`;
      return this.http.get<freeCourse>(url)
        .pipe(
          catchError(this.handleError<freeCourse>('getNewCourseByCondition'))
        )
    }

  }

  /**
   * 得到最热课程的分页服务  传给后台 page=id(ge: 2)
   * @param {number} id
   * @returns {Observable<freeCourse>}
   */
  getHotCourseIndex(id: number): Observable<freeCourse>{
    const url = `/olcp/course/allhotcourses?page=${id}`;
    return this.http.get<freeCourse>(url)
      .pipe(
        catchError(this.handleError<freeCourse>('getHotCourseIndex'))
      );
  }

  /**
   * 得到最热课程的分页  传给后台的数据有三个
   * @param {number} page  页数
   * @param {string} direction  方向
   * @param {string} difficult  难度
   * @returns {Observable<freeCourse>}
   */
  getHotCourseByCondition(page: number, direction: string, difficult: string) :Observable<freeCourse> {
    if (difficult == '0') {
      //难度为所有是,调用难度为all的接口
      const url = `/olcp/course/allhotcourses/sortbypop?direction=${direction}&page=${page}`;
      return this.http.get<freeCourse>(url)
        .pipe(
          catchError(this.handleError<freeCourse>('getNewCourseByCondition'))
        )
    } else {
      const url = `/olcp/course/allhotcourses/sortbypop1?direction=${direction}&coursedifficulty=${difficult}&page=${page}`;
      return this.http.get<freeCourse>(url)
        .pipe(
          catchError(this.handleError<freeCourse>('getNewCourseByCondition'))
        )
    }

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



  // getNewCourse() {
  //   var url = '/olcp/course/allnewcourses';
  //   return this.http.get<course[]>(url);
  // }
}
