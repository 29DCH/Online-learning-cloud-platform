import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../entity/user';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(user: User) {
    let userId = user.usernickname;
    const url = `/olcp/user/login`;
    return this.http.post<User>(url, user)
      .pipe(map((res: any) => {
        if (res && res.token) {
          localStorage.setItem('currentUser', JSON.stringify({ userId , token: res.token }))
        }
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
