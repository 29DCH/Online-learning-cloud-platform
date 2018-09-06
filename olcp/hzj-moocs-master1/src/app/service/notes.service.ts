import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Notes} from '../entity/notes';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient) { }


  /**
   * 得到最新的课程笔记
   * @param coursetailnum   课程尾号
   */
  getAllMaxNewNotes(coursetailnum: string): Observable<Notes> {
    const url = `/olcp/user/notes/allnotes1?${coursetailnum}`;
    return this.http.get<Notes>(url);
  }

  /**
   * 得到点赞的课程笔记
   * @param coursetailnum   课程尾号
   */
  getAllMaxHostNotes(coursetailnum: string): Observable<Notes> {
    const url = `/olcp/user/notes/allnotes2?${coursetailnum}`;
    return this.http.get<Notes>(url);
  }

  /**
   * 得到最新课程笔记
   * @param coursetailnum  课程尾号
   * @param page   页数
   */
  getAllMaxNewNotesByTime(coursetailnum: string, page: number): Observable<Notes> {
    const url = `/olcp/user/notes/allnotes3?coursetailnum=${coursetailnum}&page=${page}`;
    return this.http.get<Notes>(url);
  }

  /**
   * 得到点赞课程笔记
   * @param coursetailnum   `课程尾号
   * @param page    页数
   */
  getAllMaxHotNotesByTime(coursetailnum: string, page: number): Observable<Notes> {
    const url = `/olcp/user/notes/allnotes4?coursetailnum=${coursetailnum}&page=${page}`;
    return this.http.get<Notes>(url);
  }

  /**
   * 得到用户发布的笔记
   * @param coursetailnum   课程尾号
   * @param userid    用户id
   * @param page    分页
   */
  getOwnNewNote(coursetailnum: string, userid: string, page: number): Observable<Notes> {
    const url = `/olcp/user/notes/ownnotes1?coursetailnum=${coursetailnum}&userid=${userid}&page=${page}`;
    return this.http.get<Notes>(url);
  }

  /**
   * 得到用户点赞的笔记
   * @param coursetailnum   课程尾号
   * @param userid    用户id
   * @param page    页数
   */
  getOwnHostNotes(coursetailnum: string, userid: number, page: number): Observable<Notes> {
    const url = `/olcp/user/notes/ownnotes2?coursetailnum=${coursetailnum}&userid=${userid}&page=${page}`
    return this.http.get<Notes>(url);
  }
}
