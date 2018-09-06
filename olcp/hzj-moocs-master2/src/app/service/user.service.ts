import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../entity/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // getAll() {
  //   const url =  `/api/users`;
  //   return this.http.get<User[]>(url);
  // }
}
